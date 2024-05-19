import 'dotenv/config';
import { Database } from '../../database/index.js';

export const DeleteUser = async ({ userId }) => {

    const query = 'DELETE FROM users WHERE user_id = ?';
    const params = [userId];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };
    
};