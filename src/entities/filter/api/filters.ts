import type { FilterItem } from '@shared/api/types'
import filterData from '@shared/temp/filterData.json'

interface FiltersResponse {
	filterItems: FilterItem[]
}

const filtersResponse = filterData as FiltersResponse

const getFilters = async (): Promise<FilterItem[]> => {
	return filtersResponse.filterItems
}

export const FilterApiService = {
	getFilters
}
