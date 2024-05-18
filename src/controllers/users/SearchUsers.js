import { Models } from '../../models/index.js';

export const SearchUsers = async (req, res) => {
    
    const setToken = req?.headers?.authorization;

    const responseModelValidation = await Models.validations.FieldsValidation({ type: 'token', params: { token: setToken }});

    if(!responseModelValidation.status){
        return res.status(401).json({ status: "error", description: responseModelValidation?.ValidationErrors?.token });
    }

    const token = setToken.split(' ')[1];

    const responseModelSelectUserToken = await Models.database.SelectUserToken({ token: token });

    if(!responseModelSelectUserToken.status){
        return res.status(401).json({ status: "error", description: responseModelSelectUserToken?.errorMessage });
    }

    const responseModelSectUsers = await Models.database.SelectUsers();

    if(!responseModelSectUsers.status){
        return res.status(401).json({ status: "error", description: responseModelSectUsers?.errorMessage });
    }

    return res.status(200).json({ status: "success", users: responseModelSectUsers.data }); 
};