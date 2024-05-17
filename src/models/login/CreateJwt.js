import JWT from 'jsonwebtoken';
import moment from 'moment';
import 'dotenv/config';
import { Database } from '../../database/index.js';

export const CreateJwt = async ({ userId }) => {

    console.log(userId)

    const token = JWT.sign({ foo: userId }, process.env.SECRET_HASH_PASS);

    const date = moment().format('YYYY-MM-DD HH:mm:ss');

    const query = 'INSERT INTO tokens (token, user_id, date) VALUES (?, ?, ?)';
    const params = [token, userId, date];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true, token: token }

};