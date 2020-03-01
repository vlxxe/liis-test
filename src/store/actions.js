export const SIGN_UP_PENDING = "SIGN_UP_PENDING"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"

export const signUpPending = data => {
  return {
    type: SIGN_UP_PENDING,
    payload: data
  }
}

export const signUpSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS
  }
}
