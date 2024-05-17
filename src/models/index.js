import { SelectUser } from './login/SelectUser.js';
import { ConfirmPass } from './login/ConfirmPass.js';
import { CreateJwt } from './login/CreateJwt.js';
import { Validation } from './users/Validation.js';
import { SelectEmail } from './users/SelectEmail.js';
import { InserNewUser } from './users/InserNewUser.js';

export const Models = {
    auth: {
        SelectUser,
        ConfirmPass,
        CreateJwt
    },
    users: {
        Validation,
        SelectEmail,
        InserNewUser
    }
};