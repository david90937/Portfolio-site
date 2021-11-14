import React from "react";
import { Element } from 'react-scroll'
import NavigationBar from "./client/Components/NavigationBar";
import Main from "./client/Components/Main"
import Footer from './client/Components/Footer'



const App = () => {
    return (
        <div className="container">
            <Element id="page-top" name="page-top"></Element>
            <NavigationBar></NavigationBar>
            <Main></Main>
            <Footer></Footer>
        </div>

        // <BrowserRouter>
        //     <Navbar></Navbar>
        //     <Routes>
        //         <Route exact path="/" element={<Home />}></Route>
        //         <Route exact path ="/experience" element={<WorkExp/>}></Route>
        //         {/* <Route exact path ="/coursework"></Route>
        //         <Route exact path ="/projects"></Route> */}
        //     </Routes>
        // </BrowserRouter>
    )
}

export default App;