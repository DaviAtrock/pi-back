import { FielsValidation } from './validations/FielsValidation.js';
import { ConfirmPass } from './validations/ConfirmPass.js';
import { SelectEmail } from './database/SelectEmail.js';
import { InserNewUser } from './database/InserNewUser.js';
import { SelectUser } from './database/SelectUser.js';
import { CreateJwt } from './services/CreateJwt.js';

export const Models = {
    validations:{
        FielsValidation,
        ConfirmPass
    },
    database: {
        SelectEmail,
        InserNewUser,
        SelectUser
    },
    services: {
        CreateJwt
    }
};