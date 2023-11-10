import { useRef } from 'react'
import { auth } from '../../API/firebase'

const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const handleFormSubmit = event => {
    event.preventDefault()

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then(user => {
        console.log(user)
      })
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <input
            ref={emailRef}
            type='text'
            placeholder='Email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <input
            ref={passwordRef}
            type='password'
            placeholder='Password'
            className='form-control'
          />
        </div>

        <div className='mt-3'>
          <button type='submit' className='btn btn-primary '>
            Log in
          </button>
        </div>
      </form>
    </>
  )
}
export default LoginPage
