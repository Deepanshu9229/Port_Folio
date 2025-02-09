import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div style={{ 
        backgroundImage: "url('/src/assets/herobg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          <Navbar />
          <Hero />
        </div>
        <About id="about"/>
        <Experience />
        <Tech />
        <Works id="work"/>
        <div className='relative z-0'>
          <Contact id="contact"/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;