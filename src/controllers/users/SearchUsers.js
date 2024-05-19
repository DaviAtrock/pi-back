import { Models } from '../../models/index.js';

export const SearchUsers = async (req, res) => {
    
    const setToken = req?.headers?.authorization;

    const responseModelHeadersValidation = await Models.validations.HeadersValidation({ params: { token: setToken }})

    if(!responseModelHeadersValidation.status){
        return res.status(401).json({ status: "error", description: responseModelHeadersValidation?.ValidationErrors?.token });
    }

    const token = responseModelHeadersValidation?.token;

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