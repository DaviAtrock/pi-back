import { Models } from '../../models/index.js';

export const RemoveStore = async (req, res) => {
    
    const setToken = req?.headers?.authorization;

    const responseModelHeadersValidation = await Models.validations.HeadersValidation({ params: { token: setToken }})

    if(!responseModelHeadersValidation.status){
        return res.status(401).json({ status: "error", description: responseModelHeadersValidation?.ValidationErrors?.token });
    }

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'removeStore', params: req.query });

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors.storeId });
    }

    const responseModelDeletestore = await Models.database.DeleteStore({ storeId: req.query.storeId });

    if(!responseModelDeletestore.status){
        return res.status(400).json({ status: "error", description: responseModelDeletestore?.errorMessage });
    }

    return res.status(200).json({ status: "success", message: "loja removida com sucesso" });

};

//--correcao de bug na remocao de loja--//