import React, {useState, useEffect} from 'react';
import {UserCard} from '../../components/user-card/user-card.component';
import {User} from "../../services/user/user.dto";
import {UserServices} from "../../services/user.services";
import {Pagination} from "../../services/pagination/pagination.dto";
import {PaginationComponent} from "../../components/pagination/pagination.component";
export function UserList() {
    const userServices = new UserServices();
    const [users, setUsers] = useState<User[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null)
    const [error, setError] = useState(null);
    const refresh = (page: number) => {
        userServices.list(page)
            .then((response) => {
                console.log(response.data)
                setUsers(response.data.data);
                setPagination(new Pagination(
                    response.data.page,
                    response.data.per_page,
                    response.data.total,
                    response.data.total_pages,
                    refresh
                ));
                setError(null);
            })
            .catch(setError);
    };
    useEffect(() => {
       refresh(1);
    }, []);

    // Parcourir mon tableau de users et retourner un user à la fois :
    // let tableauUsers: any[] = [];
    // for (const user of users) {
    //     tableauUsers.push(<UserCard {...user} key={user.id}/>)
    // }

    const tableauUsers = users.map((user: User) => <UserCard {...user} key={user.id}/>); //Autre méthode que le for, moins verbeuse.
    return (
        <div>
            <div className='listing'>
                {tableauUsers}
            </div>
            <div className='pagination'>
                <PaginationComponent {...pagination}/>
                <p>
                <br />
                <br />
                <br />
                <br />
                    <br />
                    <br />
                    <br />
                    <br />
                <br />
                    test
                </p>
            </div>
        </div>
    );

}





