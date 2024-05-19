import { Create } from './users/Create.js';
import { Auth } from './login/Auth.js';
import { SearchUsers } from './users/SearchUsers.js';
import { CreateStore } from './stores/CreateStore.js';
import { ChangeUserPass } from './users/ChangeUserPass.js';

export const Controllers = {
    login: {
        Auth
    },
    users: {
        Create,
        SearchUsers,
        ChangeUserPass
    },
    stores: {
        CreateStore
    }
}