



import { BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
      <BrowserRouter>
      <Nav/>
      <div className='top-div  '>
        <div className='w-full lg:h-4/6 h-4/6 flex justify-end items-center flex-col'>
        <h1 className='lg:w-2/3 w-5/6'>Fascinating tool to solve all your data entry problems</h1>
        <h2  className='lg:w-2/3 w-5/6 mt-8'>easy and effective way to automate data entry and grow your business</h2>
        <button className="animation text-col w-auto pr-5 pl-5 rounded-3xl m-10 h-auto pt-2 pb-3 lg:text-xl text-lg text-center">start your journey</button>
        </div>
        <div className='flex w-full  justify-center h-1/12 items-center'>
        <img src="https://assets.website-files.com/602f5458a0b1d868c6c84d5b/60b72e8c428fbb080fbecdaa_Group%20342.svg" className='img-animated' alt='animated image' />
        </div>      
      </div>
      
      <div className='shadow'>
      </div>
      <div className='below-shadow'>

      </div>
      <div className='h-screen'>
          <div className='flex h-50 w-full justify-center items-center'>
          
          </div>
      </div>
      </BrowserRouter>
    
    
  );
}

export default App;
