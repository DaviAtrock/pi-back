import { Models } from '../../models/index.js';


export const DeleteParts = async (req, res) => {

    const setToken = req?.headers?.authorization;

    const responseModelHeadersValidation = await Models.validations.HeadersValidation({ params: { token: setToken } })

    if (!responseModelHeadersValidation.status) {
        return res.status(401).json({ status: "error", description: responseModelHeadersValidation?.ValidationErrors?.token });
    }

    const token = responseModelHeadersValidation?.token;

    const responseModelSelectUserToken = await Models.database.SelectUserToken({ token: token });

    if (!responseModelSelectUserToken.status) {
        return res.status(401).json({ status: "error", description: responseModelSelectUserToken?.errorMessage });
    }

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'removeParts', params: req.query });

    if (!responseModelFieldsValidation.status) {
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors.partId });
    }

    const responseModelDeleteParts = await Models.database.DeleteParts({ partId: req.query.partId });

    if (!responseModelDeleteParts.status) {
        return res.status(400).json({ status: "error", description: responseModelDeleteParts.errorMessage });
    }

    return res.status(200).json({ status: "success", message: "peca removida com sucesso" });
};
