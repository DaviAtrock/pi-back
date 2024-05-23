import { Models } from "../../models/index.js";

export const CreateCar = async (req, res) => {
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

    const responseModelFieldsValidations = await Models.validations.FieldsValidation({ type: 'createCars', params: req.body });
    
    if(!responseModelFieldsValidations.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidations?.ValidationErrors });
    }

    let responseModelDatabase = await Models.database.SelectCarPlateAndChassi({ carPlate: req.body.carPlate, carChassi: req.body.carChassi });

    if(!responseModelDatabase.status){
        return res.status(400).json({ status: "error", description: responseModelDatabase?.errorMessage });
    }

    responseModelDatabase = await Models.database.InsertNewCar(req.body);

    if(!responseModelDatabase.status){
        return res.status(400).json({ status: "error", description: responseModelDatabase?.errorMessage });
    }

    return res.status(201).json({ status: "success", message: "carro cadastrado com sucesso" }); 
};
