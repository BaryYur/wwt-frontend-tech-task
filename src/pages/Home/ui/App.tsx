import { useSelectedFilters } from '@entities/filter'
import { FilterModal } from '@features/filter'

export const App = () => {
	const selectedFilters = useSelectedFilters()

	return (
		<section className="w-full gap-5 h-dvh flex flex-col items-center justify-center">
			<FilterModal />

			<pre className="max-w-3xl overflow-x-auto rounded-md bg-slate-100 p-4 text-sm text-slate-800">
				{JSON.stringify(selectedFilters, null, 2)}
			</pre>
		</section>
	)
}
