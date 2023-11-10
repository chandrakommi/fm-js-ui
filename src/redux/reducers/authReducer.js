import { authActionTypes } from '../types/authActionTypes'

const initialState = {
  isAuthenticated: false,
  user: null,
  uid: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.CHECK_SIGN_IN: {
      return {
        isAuthenticated: true,
        user: payload,
        uid: payload.uid,
      }
    }
    case authActionTypes.SIGN_IN:
      return {
        isAuthenticated: true,
        user: payload,
        uid: payload.uid,
      }
    case authActionTypes.SIGN_UP: {
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        uid: payload.uid,
      }
    }
    case authActionTypes.SIGN_OUT:
      return { ...initialState }

    default:
      return state
  }
}

export default authReducer
