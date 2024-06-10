import { Database } from '../../database/index.js';

export const RemoveCar = async({ carId }) =>{

    let query = 'SELECT * FROM cars WHERE car_id = ?';
    let params = [carId];

    let responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    if(responseDatabase.results.length === 0){
        return { status: false, errorMessage: "carro nao encontrado" };
    }

    query = 'DELETE FROM cars WHERE car_id = ?';
    params = [carId];
    
    responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }
    return { status: true }
}