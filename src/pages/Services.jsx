import React from 'react'
import servicepic from '../../src/assets/servicepic.jpg'
import bootstrap from '../../src/assets/bootstrap.png'
import css from '../../src/assets/css.png'
import illustrator from '../../src/assets/illustrator.png'
import html from '../../src/assets/html.png'
import javascript from '../../src/assets/javascript.png'
import photoshop from '../../src/assets/photoshop.png'
import project1 from '../../src/assets/project1.jpg'
import project2 from '../../src/assets/project2.jpg'
import project3 from '../../src/assets/project3.jpg'
import project4 from '../../src/assets/project4.jpg'
import '../css/Index.css'

const Services = () => {
    return (
        <>
            <section className='services1'>
                <div className='services1div1'>
                    <h1>Offered services</h1>
                    <p>Web design and development have been my bread and butter for more than 5 years. During that time <br /> I've discovered that I can help startups and companies with the following services:</p>
                </div>

                <div className='servicecards'>
                    <div>
                        <img src="#" alt="" />
                        <h3>DESIGN</h3>
                        <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
                    </div>
                    <div>
                        <img src="#" alt="" />
                        <h3>DEVELOPMENT</h3>
                        <p>With a solid design in place, development is the next step. I use the latest technologies to create fast and efficient websites that are easy to maintain and update.</p>
                    </div>
                    <div>
                        <img src="#" alt="" />
                        <h3>BASIC SEO</h3>
                        <p>Having a great website is not enough if no one can find it. I offer SEO services to help my clients get found online and attract more visitors to their websites.</p>
                    </div>
                </div>
            </section>

            <section className='services2'>
                <div className='servicepic'>
                    <img src={servicepic} alt="" />
                </div>

                <div className='servicecontent'>
                    <div className='content1'>
                        <h1>Why Work With Me</h1>
                        <p>I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
                    </div>
                    <div className='content2'>
                        <h3>DESIGN TOOLS</h3>
                        <p>My favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too</p>
                    </div>
                    <div className='content3'>
                        <h3>DEVELOPMENT TOOLS</h3>
                        <p> I am proficient in using the latest web development technologies to create efficient and scalable websites.</p>
                    </div>
                    <div className='content4'>
                        <img src={bootstrap} alt="" />
                        <img src={css} alt="" />
                        <img src={illustrator} alt="" />
                        <img src={html} alt="" />
                        <img src={javascript} alt="" />
                        <img src={photoshop} alt="" />

                    </div>
                </div>
            </section>

            <section className='services3'>
                <div className='services3div1'>
                    <h1>Delivered projects</h1>
                    <p>Listed below are some of the most representative projects I've worked on. They range from basic <br /> web design for presentation sites to advanced web development for online shops</p>
                </div>

                <div className='services3div2'>
                    <div>
                        <div>
                            <img src={project1} alt="" />
                        </div>
                        <p>For: Jumbotron, Project: web design for their corporate websites and landing pages for marketing campaigns</p>

                    </div>

                    <div>
                        <div>
                            <img src={project2} alt="" />
                        </div>
                        <p>For: Carsrepo, Project: designed and developed modern platform for purchasing second hand cars online</p>
                    </div>

                    <div>
                        <div>
                            <img src={project3} alt="" />
                        </div>
                        <p>For: Truevideo, Project: created a custom video editing and upload web app for this awesome team</p>
                    </div>

                    <div>
                        <div>
                            <img src={project4} alt="" />
                        </div>
                        <p>For: Evolosim, Project: complete redesign of their corporate website and platform update for their online shop</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Services