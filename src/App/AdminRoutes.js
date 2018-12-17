import React from 'react';
import { Route } from "react-router-dom";
import Footer from '../common/components/Footer';
import MainAdmin from '../admin/MainAdmin';
import HeaderButtom from '../common/components/HeaderButtom';
import Login from '../admin/login/Login';




const ValidRoutes = props => {
    return (
        <div>
             <HeaderButtom/>
                <div className="content">
                    <Route exact path="/admin" component={MainAdmin}/>
                    <Route exact path="/login" component={Login}/>

                </div>
             <Footer/>
     
        </div>
    );
};

export default ValidRoutes;
