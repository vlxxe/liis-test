import React from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

import { signUpPending } from "../store/actions"

export const RegisterForm = ({ setShowForm }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    dispatch(signUpPending(data))
    setShowForm(false)
  }

  return (
    <section className="registration-section">
      <a className="registration-logo" href="/">
        <img src="./img/logo.svg" alt="logo" />
        yourtext
      </a>
      <h1 className="registration-title">Registration Form</h1>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first-wrap">
          <label>
            <p className="label-name">First Name</p>
            <input
              type="text"
              name="firstName"
              ref={register({ required: true })}
            />
          </label>

          <label>
            <p className="label-name">Second Name</p>
            <input
              type="text"
              name="secondName"
              ref={register({ required: true })}
            />
          </label>
        </div>

        <label>
          <p className="label-name">Username</p>
          <input
            type="text"
            name="username"
            ref={register({ required: true })}
          />
        </label>

        <label>
          <p className="label-name">Email</p>
          <input type="text" name="email" ref={register({ required: true })} />
        </label>

        <label>
          <p className="label-name">Phone Number</p>
          <input
            type="tel"
            name="phoneNumber"
            ref={register({ required: true })}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </section>
  )
}
