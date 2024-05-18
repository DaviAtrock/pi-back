import { Database } from '../../database/index.js';

export const SelectEmail = async ({ email }) => {

    const query = 'SELECT COUNT(*) FROM users WHERE user_email = ?';
    const params = [email];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return responseDatabase;
    }

    if(responseDatabase?.results[0]['COUNT(*)'] > 0){
        return { status: false, errorMessage: 'email já cadastrado' };
    }

    return { status: true };
};