import { FieldsValidation } from './validations/FieldsValidation.js';
import { HeadersValidation } from './validations/HeadersValidation.js';
import { ConfirmPass } from './validations/ConfirmPass.js';
import { SelectEmail } from './database/SelectEmail.js';
import { InserNewUser } from './database/InserNewUser.js';
import { SelectUser } from './database/SelectUser.js';
import { SelectUserToken } from './database/SelectUserToken.js';
import { SelectUsers } from './database/SelectUsers.js';
import { CreateJwt } from './services/CreateJwt.js';
import { InsertNewStore } from './database/InsertNewStore.js';
import { UpdatePass } from './database/UpdatePass.js';
import { DeleteUser } from './database/DeletUser.js';
import { SelectUserId } from './database/SelectUserId.js';
import { SelectStores } from './database/SelectStores.js';

export const Models = {
    validations:{
        FieldsValidation,
        ConfirmPass,
        HeadersValidation
    },
    database: {
        SelectEmail,
        InserNewUser,
        SelectUser,
        SelectUserToken,
        SelectUsers,
        InsertNewStore,
        UpdatePass,
        DeleteUser,
        SelectStores,
        SelectUserId
    },
    services: {
        CreateJwt
    }
};