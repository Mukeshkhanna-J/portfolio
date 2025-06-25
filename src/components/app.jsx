import React from 'react'
//import {useRef} from 'react'
import Header from './header';
import TitlePage from './titlePage';
import About from './about';
import Contact from './contact';
import Skills from './skills';
import Footer from './footer';
//import Work from './work';


function App() {


    return ( 
    <div className='body'>
        <Header className="component" />
        <div>
            <TitlePage className="component" />
        </div>
        <div>
            {/* <Work className="component" /> */}
        </div>
        <div>
            <Skills className="component" />
        </div>
        <About className="component" />
        <Contact className="component" />
        <Footer className="component" />
    </div>
    );
}

export default App;