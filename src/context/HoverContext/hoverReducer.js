import {HOVER_MESSAGE} from '../types'

const hoverReducer = (state, action) => {
  switch(action.type) {
    case HOVER_MESSAGE: return {
      ...state,
      hoverMessage: action.payload,

    }
    default: return state
  }
}
export default hoverReducer