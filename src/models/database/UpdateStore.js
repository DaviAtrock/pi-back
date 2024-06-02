import { Database } from '../../database/index.js'

export const UpdateStore = async ({ storeId, storeAddress }) => {

    let query = 'SELECT * FROM stores WHERE store_id = ?';
    let params = [storeId];

    let responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: 'erro ao executar tarefa no banco de dados' };
    }

    if(responseDatabase.results.length === 0){
        return { status: false, errorMessage: 'loja nao encontrada' };
    }

    query = 'UPDATE stores SET store_address = ? WHERE store_id = ?'; 
    params = [storeAddress, storeId];

    responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: 'erro ao executar tarefa no banco de dados' };
    }
    
    return { status: true };
}; 