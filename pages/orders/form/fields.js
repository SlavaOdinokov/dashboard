export const schema = {
  fields: [
    {
      type: 'input',
      inputType: 'text',
      label: 'Название категории',
      model: 'title',
      placeholder: 'Введите название категории',
      styleClasses: 'col-md-6'
    },
    {
      type: 'textArea',
      label: 'Описание категории',
      model: 'description',
      placeholder: 'Введите описание категории',
      styleClasses: 'col-md-12',
      hint: 'Max 500 characters',
      rows: 10,
    }
  ]
}

export const defaultForm = {
  title: '',
  description: '',
  products: []
}
