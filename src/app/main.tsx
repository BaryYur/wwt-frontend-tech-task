import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@shared/i18n'
import { QueryClientProvider } from '@tanstack/react-query'

import { App } from '../pages/Home'
import './main.css'
import { queryClient } from './query'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
)
