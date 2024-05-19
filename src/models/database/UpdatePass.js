import 'dotenv/config';
import { Database } from '../../database/index.js';

export const UpdatePass = async ({ userId, userPass }) => {
    
    const { createHmac } = await import('node:crypto');
    const hash = createHmac('sha512', process.env.SECRET_HASH_PASS).update(userPass).digest('hex');

    const query = 'UPDATE users SET user_pass = ? WHERE user_id = ?';
    const params = [hash, userId];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };

};