import {ReduceStore} from 'flux/util'
import Dispatcher from '../Dispatcher'

class ListItem extends ReduceStore {
  getInitialState() {
    return (
      item: []
    )
  }

  reduce(state, action) {
    switch(action.type) {
      case 'LOAD_LIST_ITEM':
        return Object.assign({}, state, {
          items: action.items.slice()
        })
        break

      default:
        return state
    }
  }
}

export default (new ListItem(Dispatcher))
