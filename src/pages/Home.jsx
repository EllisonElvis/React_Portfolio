import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Header from '../components/Header'

const Home = () => {
    return (
        <>

            <section className='appsection' id='home'>
                <Header />
            </section>


            <section className='appsection' id='about'>
                <About />
            </section>

            <section className='appsection' id='services'>
                <Services />
            </section>


            <section className='appsection' id='contact'>
                <Contact />
            </section>
        </>
    )
}

export default Home

























// import React, {useContext, useState, useEffect} from 'react'
// import luffy from '../assets/luffy.jpg'
// import '../css/Index.css'
// import { userContext } from '../stores/userContext';

// const Home = () => {
// const [mydata, setMyData] = useState(null)

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts/')
//         .then(response => response.json())
//         .then(data => setMyData(data))
//         .catch(error => console.error('Error fetching data:', error));
// }, [])

// const { isOpen, setIsOpen, handleClick } = useContext(userContext);
//     return (
//         <>
//         <div>
//             {!mydata ? 'loading...' : mydata.map((el) =>
//                 <div key={el.id}>
//                     <h2>{el.title}</h2>
//                     <p>{el.body}</p>
//                 </div>
//             )}
//         </div>
//             <div className='home'>
//                 <div>
//                     <h2>Software Developer</h2>
//                 </div>

//                 <div className='imgcover'>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home