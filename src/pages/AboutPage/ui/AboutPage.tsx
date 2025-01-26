import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink/AppLink'

const AboutPage = () => {
  const { t } = useTranslation('about');
	
	return (
		<div>
			<AppLink to={'/'}>
				Вернуться
			</AppLink>
			{t('О сайте')}
		</div>
	)
};

export default AboutPage
