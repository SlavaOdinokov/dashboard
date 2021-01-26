export const schema = {
  fields: [
    {
      type: 'input',
      inputType: 'text',
      label: 'Название игры',
      model: 'title',
      placeholder: 'Введите название игры',
      styleClasses: 'col-md-6'
    },
    {
      type: 'vueMultiSelect',
      model: 'category',
      label: 'Категория',
      styleClasses: 'col-md-6',
      placeholder: 'Добавить категорию',
      selectOptions: {
        multiple: false,
        key: 'title',
        id: '_id',
        trackBy: 'title',
        label: 'title',
        searchable: true,
        hideSelected: true,
      },
      values: [],
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'Стоимость игры',
      model: 'price',
      placeholder: 'Введите стоимость игры',
      styleClasses: 'col-md-6'
    },
    {
      type: 'textArea',
      label: 'Описание игры',
      model: 'description',
      placeholder: 'Введите описание игры',
      styleClasses: 'col-md-12',
      hint: 'Max 500 characters',
      rows: 10,
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'Доступное кол-во',
      model: 'amount',
      placeholder: 'Введите доступное кол-во',
      styleClasses: 'col-md-6'
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'URL картинки',
      model: 'imageUrl',
      placeholder: 'Введите URL картинки',
      styleClasses: 'col-md-6'
    }
  ]
}

export const defaultForm = {
  title: '',
  description: '',
  price: 0,
  amount: 0,
  imageUrl: '',
  category: ''
}
