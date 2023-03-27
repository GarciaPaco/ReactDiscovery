import React from 'react';
import {User} from "../../services/user/user.dto";
import {Link} from "react-router-dom";

export class UserCard extends React.Component<User, User> {
    render() {
        return (

            <div className='cards'>
                <div className='card-img'>
                    <img src={this.props.avatar} alt="Portrait du sujet"/>
                </div>
                <div className='card-name'>
                    <h2><Link to={'/user/' + this.props.id}>{this.props.first_name} {this.props.last_name}</Link></h2>
                </div>
                <div className='card-mail'>
                    <Link to={'mailto:' + this.props.email}>{this.props.email}</Link>
                </div>



            </div>

        );
    }
}