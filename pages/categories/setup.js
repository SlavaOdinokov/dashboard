export const config = {
  name: 'Категории',
  singleName: 'категорию',
  crudName: 'categories',
  pageName: 'CategoriesPage',
  formName: 'CategoryForm',
  formTitle: 'Форма категории'
}

export const columns = [
  { key: 'title', name: 'Название категории' }
]

export const actions = [
  {
    className: 'btn btn-warning text-white',
    emit: 'onEdit',
    actionKey: '_id',
    label: 'Изменить'
  },
  {
    className: 'btn btn-danger text-white',
    emit: 'onDelete',
    actionKey: '_id',
    label: 'X'
  }
]
