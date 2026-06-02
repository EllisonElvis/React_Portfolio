import React from 'react'
import '../css/Index.css'

const About = () => {
  return (
    <>
      <div className="about">
        <div className='div1'>
          <h3>Hi there I'm Mark,</h3>
          <p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p>
        </div>

        <div className='div2'>
          <div>
            <h6>2019 - PRESENT</h6>
            <h4>Freelance Web Developer</h4>
            <p>Working happily on my own web projects</p>
          </div>
          <div>
            <h6>2018 - 2019</h6>
            <h4>Lead Web Developer</h4>
            <p>Beautiful project for a major digital agency</p>
          </div>
        </div>


        <div className='div3'>
          <div>
            <h6>2017 - 2018</h6>
            <h4>Senior Web Designer</h4>
            <p>Inhouse web designer for ecommerce firm</p>
          </div>
          <div>
            <h6>2016 - 2017</h6>
            <h4>Junior Web Designer</h4>
            <p>Junior web designer for small web agency</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default About