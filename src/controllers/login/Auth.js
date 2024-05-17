import { Models } from '../../models/index.js';

export const Auth = async (req, res) => {

    const responseModelValidation = await Models.users.Validation({ type: 'auth', params: req.body });    

    if(!responseModelValidation.status){
        return res.status(401).json({ status: "error", description: responseModelValidation?.ValidationErrors });
    }

    const responseModelSelectUser = await Models.auth.SelectUser({ email: req.body.email });

    if(!responseModelSelectUser.status){
        return res.status(401).json({ status: "error", description: responseModelSelectUser?.errorMessage }); 
    }

    const userId = responseModelSelectUser?.data?.user_id;

    const responseModelConfirmPass = await Models.auth.ConfirmPass({ pass: responseModelSelectUser?.data?.user_pass, passConfirm: req.body.pass });

    if(!responseModelConfirmPass.status){
        return res.status(401).json({ status: "error", description: responseModelConfirmPass?.errorMessage });
    }

    const responseModelCreateJwt = await Models.auth.CreateJwt({ userId: userId });

    if(!responseModelCreateJwt.status){
        return res.status(401).json({ status: "error", description: responseModelCreateJwt?.errorMessage });
    }

    return res.status(201).json({ status: "success", token: responseModelCreateJwt.token }); 
};