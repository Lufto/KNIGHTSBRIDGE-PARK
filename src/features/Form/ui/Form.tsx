import { classNames } from 'shared/lib/classNames/classNames'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IFormInput } from '../types/TForm'
import cls from './Form.module.scss'

interface FormProps {
className?: string;
}

export const Form = ({className} : FormProps) => {
  const { t } = useTranslation('form');
	const { control, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Form data:', data);
    reset();
  };

	
	return (
		<form 
			className={classNames(cls.form, {}, [className])}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={classNames(cls.form__wrap)}>
        <label htmlFor="firstName">{t("Имя")}</label>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <input {...field} id="firstName" />}
        />
      </div>

      <div className={classNames(cls.form__wrap)}>
        <label htmlFor="lastName">{t("Фамилия")}</label>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <input {...field} id="lastName" />}
        />
      </div>

      <div className={classNames(cls.form__wrap)}>
        <label htmlFor="phone">{t("Номер телефона")}</label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <input {...field} id="phone" />}
        />
      </div>

      <div className={classNames(cls.form__wrap)}>
        <label htmlFor="email">{t("Email")}</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} id="email" />}
        />
      </div>

      <button type="submit">{t("Отправить")}</button>
		</form>
	)
};
