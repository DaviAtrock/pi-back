import { Models } from "../../models/index.js";

export const UpdateStore = async (req, res) =>{

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

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'updateStore', params: req.query });

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors });
    }

    const storeId = req.query.storeId;
    const storeAddress = req.query.storeAddress;
    
    const resonseModelUpdateStore = await Models.database.UpdateStore({ storeId: storeId, storeAddress: storeAddress });

    if(!resonseModelUpdateStore.status){
        return res.status(400).json({ status: "error", description: resonseModelUpdateStore.errorMessage });
    }

    return res.status(200).json({ status: "success", message: 'loja alterada com sucesso' });
};