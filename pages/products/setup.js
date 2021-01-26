export const config = {
  name: 'Продукты',
  singleName: 'продукт',
  crudName: 'products',
  pageName: 'ProductsPage',
  formName: 'ProductPage',
  formTitle: 'Форма продукта'
}

export const columns = [
  { key: 'title', name: 'Название продукта' },
  { key: 'amount', name: 'Доступное кол-во, шт' },
  { key: 'price', name: 'Цена $' },
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
