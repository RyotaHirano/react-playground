import {ReduceStore} from 'flux/util'
import Dispatcher from '../Dispatcher'

class CartItem extends ReduceStore {
  getInitialState() {
    return (
      item: []
    )
  }

  reduce(state, action) {
    switch(action.type) {
      case 'ADD_CART_ITEM':
        return Object.assign({}, state, {
          items: _addItem(state.items, action.item)
        })
        break

      case 'REMOVE_CART_ITEM':
        return Object.assign({}, state, {
          items: _removeItem(state.items, action.idx)
        })
        break

      default:
        return state
    }
  }
}

function _addItem(items, item) {
  _items = items.slice()
  _items.push(item)
  return _items
}

function _removeItem(items, index) {
  _items = items.slice()
  _items = _items.splice(index, 1)
  return _items
}

export default (new CartItem(Dispatcher))
