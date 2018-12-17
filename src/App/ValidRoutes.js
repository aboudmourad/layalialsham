import React from 'react';
import { Route } from "react-router-dom";
import Header from "../common/components/Header";
import HomePage from '../pages/homePage/HomePage';
import Footer from '../common/components/Footer';
// import MenuPage from '../pages/menu/MenuPage';



const ValidRoutes = props => {
    return (
        <div>
             <Header/>
                <div className="content">
                    <Route exact path="/" component={HomePage}/>
                    {/* <Route exact path="/menus" component={MenuPage}/> */}
                </div>
             <Footer/>
        </div>
    );
};

export default ValidRoutes;
