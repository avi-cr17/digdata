
import { BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';
import dragDrop from './resources/dragDrop.gif';
import id from './resources/id.jpg';
import invoice from './resources/invoice.jpeg';
import lisence from './resources/license1.png';
import medical from './resources/medical.PNG';
import passport from './resources/passport.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import DragDrop from './resources/dragDrop.svg';

function App() {
  
    
 
  useEffect(()=>{
    if (window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom", 
        pin: true, 
        pinSpacing: false 
      });
    });

    gsap.utils.toArray(".panel2").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom", 
        pin: true, 
        pinSpacing: false
      });
    });

  }
  

  },[])


  return (
      <BrowserRouter>
      <Nav/>
      <div className='top-div  '>
        <div className='w-full lg:h-4/6 h-4/6 flex justify-end items-center flex-col'>
        <Fade bottom>
        <h1 className='lg:w-2/3 w-5/6' >Fascinating tool to solve all your data entry problems</h1>
        <h2  className='lg:w-2/3 w-5/6 mt-8'>easy and effective way to automate data entry and grow your business</h2>
        </Fade>
        <button className="animation text-col w-auto pr-5 pl-5 rounded-3xl m-10 h-auto pt-2 pb-3 lg:text-xl text-lg text-center">start your journey</button>
        </div>
        <div className='flex w-full  justify-center h-1/12 items-center'>
        <img src="https://assets.website-files.com/602f5458a0b1d868c6c84d5b/60b72e8c428fbb080fbecdaa_Group%20342.svg" className='img-animated' alt='animated image' />
        </div>      
      </div>
      
      <div className='shadow' >
      </div>
      <div className='below-shadow  flex-col justify-around items-start panel2 w-screen h-screen' >
      <div>
      <p className='easy'>easy as abc...</p>
      <p className='text-white text-center text-lg '>Extract data from all types of documents!</p>
      </div>
      <div  >
        <div className="flex-row flex  slider">
          <div className='doc w-screen'>
            <img src={id}/>
            <p className='text-white text-center text-lg'>govt. id</p>
          </div>
          <div  className='doc w-2/12'>
            <img src={invoice}/>
            <p className='text-white text-center text-lg'>invoice</p>
          </div>
          <div className='doc '>
            <img src={medical}/>
            <p className='text-white text-center text-lg'>medical report</p>
          </div>
          <div  className='doc w-screen'>
            <img src={lisence}/>
            <p className='text-white text-center text-lg'>license</p>
          </div>
          <div className='doc'>
            <img src={passport}/>
            <p className='text-white text-center text-lg'>passport</p>
          </div>

          <div className='doc w-screen'>
            <img src={id}/>
            <p className='text-white text-center text-lg'>govt. id</p>
          </div>
          <div  className='doc w-2/12'>
            <img src={invoice}/>
            <p className='text-white text-center text-lg'>invoice</p>
          </div>
          <div className='doc '>
            <img src={medical}/>
            <p className='text-white text-center text-lg'>medical report</p>
          </div>
          <div  className='doc w-screen'>
            <img src={lisence}/>
            <p className='text-white text-center text-lg'>license</p>
          </div>
          <div className='doc'>
            <img src={passport}/>
            <p className='text-white text-center text-lg'>passport</p>
          </div>
          
        </div>
      </div>


      </div>
      
      <div className=' flex justify-around items-center panel flex-col  third '>
      
          <div className='flex lg:h-2/6 h-3/6 w-screen justify-around items-center bg-white p-5 shadow-2xl flex-col lg:flex-row shadow-black lg:order-2'>
          <Fade bottom>
            <h2 className='order-2 lg:w-1/3 w-full ' > Drag and Drop Images</h2>
          <img src={DragDrop} className='w-full lg:h-1/2 lg:w-2/6 h-1/3  shadow-lg shadow-black  order-1 lg:order-2' />
          </Fade>
          
          </div>
          <div className='flex lg:h-2/6 h-3/6 w-screen justify-around items-center bg-white p-5 shadow-2xl flex-col lg:flex-row shadow-black lg:order-2'>
          <Fade bottom>
            <h2 className='order-2 lg:w-1/3 w-full ' > Drag and Drop Images</h2>
          <object id="mysvg" type="image/svg+xml" data={dragDrop} className='w-full lg:h-1/2 lg:w-2/6 h-1/3  shadow-lg shadow-black  order-1 lg:order-2' />
          </Fade></div>
          <div className='flex lg:h-2/6 h-3/6 w-screen justify-around items-center bg-white p-5 shadow-2xl flex-col lg:flex-row shadow-black lg:order-2'>
          <Fade bottom>
            <h2 className='order-2 lg:w-1/3 w-full ' > Drag and Drop Images</h2>
          <img src={dragDrop} className='w-full lg:h-1/2 lg:w-2/6 h-1/3  shadow-lg shadow-black  order-1 lg:order-2' />
          </Fade></div>
          
      </div>
      <div className='  panel fourth '> 
        <div className='lg:h-2/6 h-3/12 w-screen text-center text-5xl text-white '>
          <p className='text-center text-5xl text-white pt-5'>Contact us</p>
          <p className='text-center text-lg text-white'>We would like to hear from you</p>
         
        </div>
        
        <div className='flex flex-col lg:justify-start justify-start items-center lg:h-5/6 h-3/4 w-screen'>
       
        <div class="mb-2  flex flex-col lg:flex-row w-2/3 lg:w-1/2">
      
      <input class=" appearance-none border rounded lg:w-2/3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email.id" />
      <input class=" appearance-none border rounded lg:w-1/3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name.. " />
    </div>
    <textarea id="description"  class="mb-1  appearance-none border rounded w-2/3 lg:w-1/2 h-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="query..">
  
  </textarea>
  <button class=" bg-orange-100 hover:bg-orange-300 w-1/3 lg:w-1/12  focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="submit">
        Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </button>
       
        </div>
              
      </div>
      </BrowserRouter>
    
    
  );
}

export default App;
