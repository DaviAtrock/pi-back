import 'dotenv/config';
import { Database } from '../../database/index.js';

export const DeleteStore = async ({ storeId }) => {

    const query = 'DELETE FROM stores WHERE store_id = ?';
    const params = [storeId];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };
    
};