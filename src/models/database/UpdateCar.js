import { Database } from "../../database/index.js";

export const UpdateCar= async({ carId, carPrice }) =>{

    let query = 'SELECT * FROM cars WHERE car_id = ?';
    let params = [carId];

    let responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errormesage: 'erro ao executar tarefa no banco de dados' };
    }
    
    if(responseDatabase.results.length === 0){
        return { status: false, errormesage: 'carro não encontrado' };
    }

    query = 'UPDATE cars SET car_price = ? WHERE  car_id = ?';
    params = [carPrice, carId];

    responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };

};