import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@entities/filter'
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@shared/ui'

import { FilterActions } from './FilterActions'
import { FilterConfirmationModal } from './FilterConfirmationModal'

export const FilterModal = () => {
	const { t } = useTranslation('filter')

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)

	const initializeDraft = useFilterStore(state => state.initializeDraft)
	const applyDraft = useFilterStore(state => state.applyDraft)
	const resetDraft = useFilterStore(state => state.resetDraft)
	const clearDraft = useFilterStore(state => state.clearDraft)

	const handleModalChange = (isOpen: boolean) => {
		if (isOpen) {
			initializeDraft()
		} else {
			resetDraft()
			setIsConfirmationModalOpen(false)
		}

		setIsModalOpen(isOpen)
	}

	const handleApply = () => {
		applyDraft()
		setIsConfirmationModalOpen(false)
		setIsModalOpen(false)
	}

	const handleCancelConfirmation = () => {
		resetDraft()
		setIsConfirmationModalOpen(false)
	}

	return (
		<>
			<Dialog
				open={isModalOpen}
				onOpenChange={handleModalChange}
			>
				<DialogTrigger asChild>
					<Button size="lg">{t('openFilters')}</Button>
				</DialogTrigger>
				<DialogContent className="min-w-[800px]">
					<DialogHeader>
						<DialogTitle className="text-center text-xl">
							{t('modalTitle')}
						</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>

					<FilterActions />

					<DialogFooter className="relative">
						<Button
							size="lg"
							onClick={() => setIsConfirmationModalOpen(true)}
							className="w-32"
						>
							{t('apply')}
						</Button>

						<Button
							variant="link"
							onClick={clearDraft}
							className="underline"
						>
							{t('clearAll')}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<FilterConfirmationModal
				isOpen={isConfirmationModalOpen}
				onClose={() => setIsConfirmationModalOpen(false)}
				onApply={handleApply}
				onCancel={handleCancelConfirmation}
			/>
		</>
	)
}
