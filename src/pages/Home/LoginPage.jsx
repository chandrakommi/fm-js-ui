import { useRef } from 'react'
import { siginUser } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  
  const handleFormSubmit = event => {
    event.preventDefault()
    dispatch(siginUser(emailRef.current.value, passwordRef.current.value))
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
