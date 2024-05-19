import { Models } from '../../models/index.js';

export const RemoveUser = async (req, res) => {
    
    const setToken = req?.headers?.authorization;

    const responseModelHeadersValidation = await Models.validations.HeadersValidation({ params: { token: setToken }})

    if(!responseModelHeadersValidation.status){
        return res.status(401).json({ status: "error", description: responseModelHeadersValidation?.ValidationErrors?.token });
    }

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'removeUser', params: req.query });

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors.userId });
    }

    const responseModelDeleteUser = await Models.database.DeleteUser({ userId: req.query.userId });

    if(!responseModelDeleteUser.status){
        return res.status(400).json({ status: "error", description: responseModelInserNewUser?.errorMessage });
    }

    return res.status(201).json({ status: "success", message: "usuário removido com sucesso" }); 

};