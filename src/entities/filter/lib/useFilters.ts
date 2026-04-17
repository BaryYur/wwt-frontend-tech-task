import { useQuery } from '@tanstack/react-query'

import { FilterApiService } from '../api'

export const useGetFilters = () => {
	return useQuery({
		queryFn: () => FilterApiService.getFilters(),
		queryKey: ['filters']
	})
}
