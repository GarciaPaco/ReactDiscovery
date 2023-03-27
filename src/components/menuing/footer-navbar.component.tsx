import React from "react";
import {Link} from "react-router-dom";

export class FooterNavbar extends React.Component<any, any>{
    render (){
        return (
            <nav>
                <ul>
                    <li><Link to='#'>INFOS</Link></li>
                    <li><Link to='#'>CONCTACT</Link></li>
                    <li><Link to='#'>MENTIONS LEGALES</Link></li>
                </ul>
                <p>Copyright Paco Garcia - 2023</p>
            </nav>
        )
    }
}
