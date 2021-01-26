import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Поле обязательное для заполнения'
})

extend('email', {
  ...email,
  message: 'Введите корректный email'
})
