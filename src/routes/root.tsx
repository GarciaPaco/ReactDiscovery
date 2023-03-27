import React from "react";
import {Outlet} from "react-router-dom";
import {HeaderNavbar} from "../components/menuing/header-navbar.component";
import {FooterNavbar} from "../components/menuing/footer-navbar.component";


export default function Root() {
    return (
        <div>

            <div className='header-navbar'>
                <HeaderNavbar/>
            </div>


            <Outlet/>


            <div className='footer-navbar'>
                <FooterNavbar/>
            </div>

        </div>
    );
}
