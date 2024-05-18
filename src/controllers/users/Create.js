import { Models } from '../../models/index.js';

export const Create = async (req, res) => {

    const responseModelValidation = await Models.validations.FielsValidation({ type: 'create', params: req.body });    

    if(!responseModelValidation.status){
        return res.status(400).json({ status: "error", description: responseModelValidation?.ValidationErrors });
    }

    const responseModelSelectEmal = await Models.database.SelectEmail({ email: req.body.email });

    if(!responseModelSelectEmal.status){
        return res.status(400).json({ status: "error", description: responseModelSelectEmal?.errorMessage });
    }

    const responseModelInserNewUser = await Models.database.InserNewUser(req.body);

    if(!responseModelInserNewUser.status){
        return res.status(400).json({ status: "error", description: responseModelInserNewUser?.errorMessage });
    }

    return res.status(201).json({ status: "success", message: "usuário criado com sucesso"}); 
};