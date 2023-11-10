import { useRef } from 'react'
import { sigupUser } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'
const RegisterPage = () => {
  const [nameRef, emailRef, passwordRef, confirmPasswordRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ]

  const dispatch = useDispatch()
  const handleFormSubmit = event => {
    event.preventDefault()

    dispatch(
      sigupUser(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value,
      ),
    )
    // auth
    //   .createUserWithEmailAndPassword(
    //     emailRef.current.value,
    //     passwordRef.current.value,
    //   )
    //   .then(() => {
    //     auth.currentUser
    //       .updateProfile({ displayName: nameRef.current.value })
    //       .then(() => {
    //         console.log('newUser', auth.currentUser)
    //       })
    //   })
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className=' form-label '>
            Name
          </label>
          <input
            ref={nameRef}
            type='text'
            placeholder='Name'
            className='form-control'
            autoComplete='name'
            id='name'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className=' form-label '>
            Email
          </label>
          <input
            ref={emailRef}
            type='email'
            placeholder='Email'
            className='form-control'
            autoComplete='email'
            id='email'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className=' form-label '>
            Password
          </label>
          <input
            ref={passwordRef}
            type='password'
            placeholder='Password'
            className='form-control'
            autoComplete='password'
            id='password'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='confirm-password' className=' form-label '>
            Password
          </label>
          <input
            ref={confirmPasswordRef}
            type='password'
            placeholder='Confirm password'
            className='form-control'
            autoComplete='confirm-password'
            id='confirm-password'
          />
        </div>

        <div className='mt-3'>
          <button type='submit' className='btn btn-primary '>
            Register
          </button>
        </div>
      </form>
    </>
  )
}
export default RegisterPage
