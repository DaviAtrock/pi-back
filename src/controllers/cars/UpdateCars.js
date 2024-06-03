import { Models } from '../../models/index.js';

export const UpdateCars = async(req, res) =>{

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

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'UpdateCars', params: req.query }); 

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors })
    }

    const carId = req.query.carId;
    const carPrice = req.query.carPrice;
    
    const responseModelUpdateCar = await Models.database.UpdateCar({ carId: carId, carPrice: carPrice });

    if(!responseModelUpdateCar.status){
        return res.status(400).json({ status: "error", description: responseModelUpdateCar.errorMessage });
    }

    return res.status(200).json({ status: "Sucess", message: "preço alterado com sucesso" });
};