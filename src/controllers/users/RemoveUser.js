import { Models } from '../../models/index.js';

export const RemoveUser = async (req, res) => {
    
    const setToken = req?.headers?.authorization;

    const responseModelHeadersValidation = await Models.validations.HeadersValidation({ params: { token: setToken }});

    if(!responseModelHeadersValidation.status){
        return res.status(401).json({ status: "error", description: responseModelHeadersValidation?.ValidationErrors?.token });
    }

    const token = responseModelHeadersValidation?.token;

    const responseModelSelectUserToken = await Models.database.SelectUserToken({ token: token });

    if(!responseModelSelectUserToken.status){
        return res.status(401).json({ status: "error", description: responseModelSelectUserToken?.errorMessage });
    }

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'removeUser', params: req.query });

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors.userId });
    }

    const responseModelSelectUserId = await Models.database.SelectUserId({ userId: req.query.userId  })

    if(!responseModelSelectUserId.status){
        return res.status(400).json({ status: "error", description: responseModelSelectUserId?.errorMessage });
    }

    const responseModelDeleteUser = await Models.database.DeleteUser({ userId: req.query.userId });

    if(!responseModelDeleteUser.status){
        return res.status(400).json({ status: "error", description: responseModelDeleteUser?.errorMessage });
    }

    return res.status(200).json({ status: "success", message: "usuário removido com sucesso" }); 

};