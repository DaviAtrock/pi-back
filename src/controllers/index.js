import { Create } from './users/Create.js';
import { Auth } from './login/Auth.js';
import { SearchUsers } from './users/SearchUsers.js';
import { CreateStore } from './stores/CreateStore.js';

export const Controllers = {
    login: {
        Auth
    },
    users: {
        Create,
        SearchUsers
    },
    stores: {
        CreateStore
    }
}