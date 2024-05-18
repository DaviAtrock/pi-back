import { Connection } from '../connection/index.js';

export const Execute = async ({ query, params }) => {

    try{

        const [ results, fields ] = await Connection.execute(query, params);

        return { status: true, results }

    }catch(error){
        
        return { status: false, error: error?.sqlMessage }
    }
};