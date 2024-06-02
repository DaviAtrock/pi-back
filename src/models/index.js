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
import { InsertParts } from './database/InsertParts.js';
import { SelectCarPlateAndChassi } from './database/SelectCarPlateAndChassi.js';
import { InsertNewCar } from './database/InsertNewCar.js';
import { DeleteStore } from './database/DeleteStore.js';
import { SelectCars } from './database/SelectCars.js';
import { UpdateStore } from './database/UpdateStore.js';
import { SelectParts } from './database/SelectParts.js';

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
        DeleteStore,
        SelectUserId,
        InsertParts,
        SelectCarPlateAndChassi,
        InsertNewCar,
        SelectCars,
        UpdateStore,
        SelectParts
    },
    services: {
        CreateJwt
    }
};