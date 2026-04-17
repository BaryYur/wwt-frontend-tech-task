import React from 'react'
import { useTranslation } from 'react-i18next'

import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@shared/ui'

interface FilterConfirmationModalProps {
	isOpen: boolean
	onClose: () => void
	onApply: () => void
	onCancel: () => void
}

export const FilterConfirmationModal: React.FC<
	FilterConfirmationModalProps
> = ({ isOpen, onClose, onApply, onCancel }) => {
	const { t } = useTranslation('filter')

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}
		>
			<DialogContent className="min-w-[800px]">
				<DialogHeader className="flex justify-center pt-5">
					<DialogTitle className="text-center text-2xl">
						{t('confirmDescription')}
					</DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>

				<DialogFooter className="mt-10">
					<div className="flex justify-center gap-4 w-full">
						<Button
							size="lg"
							variant="outline"
							onClick={onCancel}
							className="w-32"
						>
							{t('confirmCancel')}
						</Button>
						<Button
							size="lg"
							onClick={onApply}
							className="w-32"
						>
							{t('confirmTitle')}
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
