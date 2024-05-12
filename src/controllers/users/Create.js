import { Models } from '../../models/index.js';

export const Create = async (req, res) => {

    const responseModelValidation = await Models.users.Validation({ type: 'create', params: req.body });    

    if(!responseModelValidation.status){
        return res.status(400).json({ status: "error", description: responseModelValidation?.ValidationErrors });
    }

    const responseModelSelectEmal = await Models.users.SelectEmail({ email: req.body.email });

    if(!responseModelSelectEmal.status){
        return res.status(400).json({ status: "error", description: responseModelSelectEmal?.errorMessage });
    }

    const responseModelInserNewUser = await Models.users.InserNewUser(req.body);

    if(!responseModelInserNewUser.status){
        return res.status(400).json({ status: "error", description: responseModelInserNewUser?.errorMessage });
    }

    return res.status(201).json({ status: "success", message: "usuário criado com sucesso"}); 
};