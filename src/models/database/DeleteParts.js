import { Database } from '../../database/index.js';

export const DeleteParts = async ({ partId }) => {
    let query = 'SELECT * FROM parts WHERE part_id = ?';
    let params = [partId];

    let responseDatabase = await Database.Execute({ query, params });

    if (!responseDatabase.status) {
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    if (responseDatabase.results.length === 0) {
        return { status: false, errorMessage: "peca nao encontrada" };
    }

    query = 'DELETE FROM parts WHERE part_id = ?';
    params = [partId];
    
    responseDatabase = await Database.Execute({ query, params });

    if (!responseDatabase.status) {
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }
    return { status: true };
};

