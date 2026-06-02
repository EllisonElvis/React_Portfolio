import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/Index.css'

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data =>
    alert(`Welcome, ${data.name}! Your email has been submitted successfully. Thank you for reaching out!`)

  return (
    <div className='formpage'>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* NAME */}
        <div className="input-group">
          <input
            {...register('name', { required: "Name is required" })}
            placeholder=" "
          />
          <label>Name</label>
        </div>
        <p className="error">{errors.name?.message}</p>

        {/* EMAIL */}
        <div className="input-group">
          <input
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email"
              }
            })}
            placeholder=" "
          />
          <label>Email</label>
        </div>
        <p className="error">{errors.email?.message}</p>

        {/* TEXTAREA */}
        <div className="input-group">
          <textarea
            {...register('message', { required: "Message is required" })}
            placeholder=" "
          />
          <label>Message</label>
        </div>
        <p className="error">{errors.message?.message}</p>

        <button type="submit" className='submitbtn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
