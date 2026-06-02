import React from 'react'
import Form from '../pages/Form'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contactdiv1'>
        <h1>Contact details</h1>
        <p>For any type of online project please don't hesitate to get in touch with me. The fastest way is to <br /> send me your message using the following email</p>
      </div>
      <div>
        <Form />
      </div>


    </section>
  )
}

export default Contact