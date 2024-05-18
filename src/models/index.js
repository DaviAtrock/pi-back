import { FielsValidation } from './validations/FielsValidation.js';
import { ConfirmPass } from './validations/ConfirmPass.js';
import { SelectEmail } from './database/SelectEmail.js';
import { InserNewUser } from './database/InserNewUser.js';
import { SelectUser } from './database/SelectUser.js';
import { SelectUserToken } from './database/SelectUserToken.js';
import { SelectUsers } from './database/SelectUsers.js';
import { CreateJwt } from './services/CreateJwt.js';
import { InsertNewStore } from './database/InsertNewStore.js';

export const Models = {
    validations:{
        FielsValidation,
        ConfirmPass
    },
    database: {
        SelectEmail,
        InserNewUser,
        SelectUser,
        SelectUserToken,
        SelectUsers,
        InsertNewStore
    },
    services: {
        CreateJwt
    }
};