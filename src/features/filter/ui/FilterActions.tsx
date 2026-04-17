import { useFilterStore, useGetFilters } from '@entities/filter'

import { FilterSection } from './FilterSection'

export const FilterActions = () => {
	const { data: filters } = useGetFilters()

	const draftOptions = useFilterStore(state => state.draftOptions)

	const toggleDraftOption = useFilterStore(state => state.toggleDraftOption)

	return (
		<div>
			{filters?.map(filter => (
				<FilterSection
					key={filter.id}
					filterId={filter.id}
					name={filter.name}
					description={filter.description}
					options={filter.options}
					selectedOptionIds={draftOptions[filter.id] ?? []}
					onToggleOption={toggleDraftOption}
				/>
			))}
		</div>
	)
}
