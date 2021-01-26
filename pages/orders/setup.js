export const config = {
  name: 'Заказы',
  singleName: 'заказ',
  crudName: 'orders',
  pageName: 'OrdersPage'
}

export const columns = [
  { key: 'fullname', name: 'Имя покупателя' },
  { key: 'email', name: 'Почта' },
  { key: 'phone', name: 'Телефон' },
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
