import { useTheme } from 'app/providers/ThemeProvider'
import { Suspense } from 'react'
import 'shared/config/i18n/i18n'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () => {
	const {theme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback='loading...'>
				<div className='content-page'>
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	)
};

export default App
