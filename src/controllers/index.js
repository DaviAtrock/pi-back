import { Create } from './users/Create.js';
import { Auth } from './login/Auth.js';
import { SearchUsers } from './users/SearchUsers.js';

export const Controllers = {
    login: {
        Auth
    },
    users: {
        Create,
        SearchUsers
    }
}