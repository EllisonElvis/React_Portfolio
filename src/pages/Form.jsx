import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/Index.css'
import emailjs from '@emailjs/browser';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

 const onSubmit = (data) => {
  emailjs
    .send(
      'service_4uprhfe',
      'template_byitp3i',
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      'lfrDKBvw1T7CeBsAY'
    )
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log(error);
      alert('Failed to send message.');
    });
};
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
