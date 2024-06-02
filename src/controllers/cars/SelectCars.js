import { Models } from '../../models/index.js';

export const SelectCars = async (req, res) => {

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
    
    const responseModelSelectCars = await Models.database.SelectCars({ }); 
 
    if(!responseModelSelectCars.status){
        return res.status(401).json({ status: "error", description: responseModelSelectCars?.errorMessage });
    }

    return res.status(200).json({ status: "success", users: responseModelSelectCars.data }); 

}