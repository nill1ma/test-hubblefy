import { IActions } from "../../interfaces/IActions"
import { DataMenu } from "../../interfaces/IMenu"

const INITIAL_STATE: DataMenu = {
  data: { id: 0, title: 'Home', active: false }
}

function page(state: DataMenu = INITIAL_STATE, action: IActions) {
  switch (action.type) {
    case "UPDATE_PAGE":
      return {
        ...state.data,
        data: action.currentPage
      }
    default:
      return state
  }
}

export { page }
