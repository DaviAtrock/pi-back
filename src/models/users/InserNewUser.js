import { v4 as uuidv4 } from 'uuid'
import 'dotenv/config';
import { Database } from '../../database/index.js';

export const InserNewUser = async (data) => {

    const userId = uuidv4();

    const { createHmac } = await import('node:crypto');
    const hash = createHmac('sha512', process.env.SECRET_HASH_PASS).update(data.pass).digest('hex');

    const query = 'INSERT INTO users (user_id, user_name, user_email, user_pass) VALUES (?, ?, ?, ?)';
    const params = [userId, data.name, data.email, hash];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };
};