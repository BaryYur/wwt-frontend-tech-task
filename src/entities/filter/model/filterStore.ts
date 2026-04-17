import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SelectedOptions = Record<string, string[]>

interface FilterStore {
	appliedOptions: SelectedOptions
	draftOptions: SelectedOptions
	initializeDraft: () => void
	toggleDraftOption: (filterId: string, optionId: string) => void
	applyDraft: () => void
	resetDraft: () => void
	clearDraft: () => void
}

export const useFilterStore = create<FilterStore>()(
	persist(
		set => ({
			appliedOptions: {},
			draftOptions: {},
			initializeDraft: () => {
				set(state => ({
					draftOptions: state.appliedOptions
				}))
			},
			toggleDraftOption: (filterId, optionId) => {
				set(state => {
					const filterOptions = state.draftOptions[filterId] ?? []
					const isSelected = filterOptions.includes(optionId)
					const nextOptions = isSelected
						? filterOptions.filter(id => id !== optionId)
						: [...filterOptions, optionId]

					return {
						draftOptions: {
							...state.draftOptions,
							[filterId]: nextOptions
						}
					}
				})
			},
			applyDraft: () => {
				set(state => ({
					appliedOptions: state.draftOptions
				}))
			},
			resetDraft: () => {
				set(state => ({
					draftOptions: state.appliedOptions
				}))
			},
			clearDraft: () => {
				set({
					draftOptions: {}
				})
			}
		}),
		{
			name: 'filters-storage',
			partialize: state => ({
				appliedOptions: state.appliedOptions
			}),
			onRehydrateStorage: () => state => {
				if (!state) {
					return
				}

				state.draftOptions = state.appliedOptions
			}
		}
	)
)
