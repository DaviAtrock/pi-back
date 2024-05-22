import { v4 as uuidv4 } from 'uuid'
import 'dotenv/config';
import { Database } from '../../database/index.js';

export const InsertParts = async (data) => {

    const partId = uuidv4();

    const query = 'INSERT INTO parts (part_id, part_name, part_model, part_brand, part_price) VALUES (?, ?, ?, ?, ?)';
    const params = [partId, data.partName, data.partModel, data.partBrand, data.partPrice];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };
};