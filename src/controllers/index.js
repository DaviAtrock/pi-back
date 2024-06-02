import { Create } from './users/Create.js';
import { Auth } from './login/Auth.js';
import { SearchUsers } from './users/SearchUsers.js';
import { ChangeUserPass } from './users/ChangeUserPass.js';
import { RemoveUser } from './users/RemoveUser.js';
import { CreateStore } from './stores/CreateStore.js';
import { SearchStore } from './stores/SearchStore.js';
import { RemoveStore } from './stores/RemoveStore.js';
import { UpdateStore } from './stores/UpdateStore.js';
import { CreateParts } from './parts/CreateParts.js';
import { CreateCar } from './cars/CreateCar.js';
import { SelectCars } from './cars/SelectCars.js';
import { SelectParts } from './parts/SelectParts.js';

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
        SearchStore,
        RemoveStore,
        UpdateStore
    },
    parts: {
        CreateParts,
        SelectParts
    },
    cars: {
        CreateCar,
        SelectCars
    }
}