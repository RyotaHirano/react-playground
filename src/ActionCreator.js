import Dispatcher from 'Dispatcher'

export default class ActionCreator {
  loadListItem() {
    Dispatcher.dispatch({
      type: 'LOAD_LIST_ITEM',
      item: data
    })
  }

  addToCart(item) {
    Dispatcher.dispatch({
      type: 'ADD_CART_ITEM',
      item
    })
  }

  removeFromCart(idx) {
    Dispatcher.dispatch({
      type: 'REMOVE_CART_ITEM',
      idx
    })
  }
}
