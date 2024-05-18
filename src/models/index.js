import { FieldsValidation } from './validations/FieldsValidation.js';
import { ConfirmPass } from './validations/ConfirmPass.js';
import { SelectEmail } from './database/SelectEmail.js';
import { InserNewUser } from './database/InserNewUser.js';
import { SelectUser } from './database/SelectUser.js';
import { SelectUserToken } from './database/SelectUserToken.js';
import { SelectUsers } from './database/SelectUsers.js';
import { CreateJwt } from './services/CreateJwt.js';

export const Models = {
    validations:{
        FieldsValidation,
        ConfirmPass
    },
    database: {
        SelectEmail,
        InserNewUser,
        SelectUser,
        SelectUserToken,
        SelectUsers
    },
    services: {
        CreateJwt
    }
};