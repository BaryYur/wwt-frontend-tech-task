import { useMemo } from 'react'

import { FilterType, SearchRequestFilter } from '@shared/api/types'

import { useFilterStore } from './filterStore'

export const useSelectedFilters = () => {
	const appliedOptions = useFilterStore(state => state.appliedOptions)

	return useMemo<SearchRequestFilter>(() => {
		return Object.entries(appliedOptions)
			.filter(([, optionsIds]) => optionsIds.length > 0)
			.map(([id, optionsIds]) => ({
				id,
				type: FilterType.OPTION,
				optionsIds
			}))
	}, [appliedOptions])
}
