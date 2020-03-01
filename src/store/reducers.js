import { SIGN_UP_PENDING, SIGN_UP_SUCCESS } from "./actions"

const initialState = {
  isLoggedIn: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_PENDING:
      return {
        ...state
      }

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }

    default:
      return state
  }
}
