import { auth } from '../../API/firebase'
import { authActionTypes } from '../types/authActionTypes'

const _signupUser = payload => {
  return {
    type: authActionTypes.SIGN_UP,
    payload,
  }
}

const _signinUser = payload => {
  return {
    type: authActionTypes.SIGN_IN,
    payload,
  }
}

const _checkUserSignedIn = payload => {
  return {
    type: authActionTypes.CHECK_SIGN_IN,
    payload,
  }
}

const sigupUser = (name, email, password) => dispatch => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      auth.currentUser.updateProfile({ displayName: name }).then(() => {
        const { displayName, email } = auth.currentUser.providerData[0]
        dispatch(
          _signupUser({
            displayName: displayName,
            email: email,
            uid: auth.currentUser.uid,
          }),
        )
      })
    })
    .catch(er => console.log(er))
}

const siginUser = (email, password) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      const { displayName, email, uid } = auth.currentUser
      dispatch(
        _signinUser({ email: email, displayName: displayName, uid: uid }),
      )
    })
    .catch(error => console.log(error))
}

const checkUserSignedIn = () => dispatch => {
  auth.onAuthStateChanged(user => {
    const { displayName, email, uid } = user
    dispatch(
      _checkUserSignedIn({
        email: email,
        displayName: displayName,
        uid: uid,
      }),
    )
  })
}
export { sigupUser, siginUser, checkUserSignedIn }
