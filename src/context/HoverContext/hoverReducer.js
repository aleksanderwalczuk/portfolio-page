import {HOVER_MESSAGE} from '../types'
//eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case HOVER_MESSAGE: return {
      ...state,
      hoverMessage: action.payload,

    }
    default: return state
  }
}