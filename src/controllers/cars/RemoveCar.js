import { Models } from "../../models/index.js";

export const RemoveCar = async(req, res) => {
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

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'removeCar', params: req.query });

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors.carId });
    }

    const responseModelDeleteCars = await Models.database.RemoveCar({ carId: req.query.carId });

    if(!responseModelDeleteCars.status){
        return res.status(400).json({ status: "error", description: responseModelDeleteCars.errorMessage });
    }
    return res.status(200).json({ status: "Sucess", message: "carro removido com sucesso" });
}