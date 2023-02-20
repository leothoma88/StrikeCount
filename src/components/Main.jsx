import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Fightscreen from './Fightscreen';
import {Routes,Route} from 'react-router-dom'







function Main(){
    return(  
    
    <React.Fragment> 
        <Header/>
        <Fightscreen/>
        <Footer/>
    </React.Fragment>
   
    )
}

export default Main

// <React.Fragment> 
// <Header/>

// <Routes>
// <Route path="/" element= {<Fightscreen/>}/>
// </Routes> 
// <Footer/>
// </React.Fragment>
