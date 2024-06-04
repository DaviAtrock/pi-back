import { Database } from "../../database/index.js";

export const UpdateParts = async({ partId, partPrice }) => {

    let query = 'SELECT * FROM parts WHERE part_id = ?';
    let params = [partId];

    let responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: 'erro ao executar tarefa no banco de dados' };
    }
    
    if(responseDatabase.results.length === 0){
        return { status: false, errorMessage: 'peça não encontrada' };
    }

    query = 'UPDATE parts SET part_price = ? WHERE part_id = ?';
    params = [partPrice, partId];

    responseDatabase = await Database.Execute({ query, params });
    console.log(responseDatabase)

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };
};