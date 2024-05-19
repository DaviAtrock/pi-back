import { Models } from '../../models/index.js';

export const ChangeUserPass = async (req, res) => {

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

    const userId = responseModelSelectUserToken.data?.user_id;

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'changeUserPass', params: req.query })

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation?.ValidationErrors });
    }

    const responseModelUpdatepass = await Models.database.UpdatePass({ userId: userId, userPass: req.query.userPass });

    if(!responseModelUpdatepass.status){
        return res.status(400).json({ status: "error", description: responseModelUpdatepass.errorMessage });
    }

    return res.status(200).json({ status: "success", message: "senha alterada com sucesso" });
};