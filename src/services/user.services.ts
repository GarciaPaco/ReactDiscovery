import axios from "axios";
import {User} from "./user/user.dto";
export class UserServices {
    create(user: User) {
        return axios.post('https://reqres.in/api/users/', user);
    }
    update(last_name: string, first_name: string, email: string) {
        axios.put('https://reqres.in/api/users/');
    }
    list(page:number) {
        return axios('https://reqres.in/api/users?page=' + page);
    }
    getById(id: string) {
        return axios.get('https://reqres.in/api/users/' + id);
    }
}