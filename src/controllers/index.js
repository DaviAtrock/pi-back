import { Create } from './users/Create.js';
import { Auth } from './login/Auth.js';
import { SearchUsers } from './users/SearchUsers.js';
import { ChangeUserPass } from './users/ChangeUserPass.js';
import { RemoveUser } from './users/RemoveUser.js';
import { SearchStore } from './stores/SearchStore.js';
import { CreateStore } from './stores/CreateStore.js';
import { CreateParts } from './parts/CreateParts.js';

export const Controllers = {
    login: {
        Auth
    },
    users: {
        Create,
        SearchUsers,
        ChangeUserPass,
        RemoveUser
    },
    stores: {
        CreateStore,
        SearchStore
    },
    parts: {
        CreateParts
    }
}