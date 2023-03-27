import React from "react";
import {Link} from "react-router-dom";

export class HeaderNavbar extends React.Component<any, any>{
    render (){
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/listing'>Listing</Link></li>
                    <li><Link to='/create-user'>Add user</Link></li>
                </ul>
            </nav>
        )
    }
}
