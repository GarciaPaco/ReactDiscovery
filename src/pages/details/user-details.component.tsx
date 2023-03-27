import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {UserCard} from "../../components/user-card/user-card.component";
import {User} from "../../services/user/user.dto";
import {UserServices} from "../../services/user.services";

export function UserDetails() {
    const userServices = new UserServices();
    let {userId} = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        userServices.getById(userId ? userId:'')
            .then((response) => {
                console.log(response.data)
                setUser(response.data.data);
            });
    },[userId]);

    return (
        <div>
            <UserCard {...user} />
            <button>
                EDIT USER
            </button>
        </div>

    );
}