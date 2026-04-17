import React from 'react'

import { FilterChooseOption } from '@shared/api/types'
import { Checkbox } from '@shared/ui'

interface FilterSectionProps {
	filterId: string
	name: string
	description?: string
	options: FilterChooseOption[]
	selectedOptionIds: string[]
	onToggleOption: (filterId: string, optionId: string) => void
}

export const FilterSection: React.FC<FilterSectionProps> = ({
	filterId,
	name,
	options,
	selectedOptionIds,
	onToggleOption
}) => {
	return (
		<div className="border-t border-gray-200 py-5">
			<p className="font-semibold text-xl">{name}</p>

			<div className="grid grid-cols-3 gap-5 mt-4">
				{options?.map(option => (
					<div
						key={option.id}
						className="flex items-center gap-3"
					>
						<Checkbox
							id={option.id}
							checked={selectedOptionIds.includes(option.id)}
							onCheckedChange={() => onToggleOption(filterId, option.id)}
						/>
						<label htmlFor={option.id}>{option.name}</label>
					</div>
				))}
			</div>
		</div>
	)
}
