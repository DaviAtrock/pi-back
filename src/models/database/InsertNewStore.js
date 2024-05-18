import { v4 as uuidv4 } from 'uuid'
import { Database } from '../../database/index.js';

export const InsertNewStore = async (data) => {

    const storeId = uuidv4();

    const query = 'INSERT INTO stores (store_id, store_name, store_address, store_cnpj) VALUES (?, ?, ?, ?)';
    const params = [storeId, data.storeName, data.storeAddress, data.storeCnpj];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };

}