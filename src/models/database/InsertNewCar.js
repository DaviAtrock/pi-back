import { v4 as uuidv4 } from 'uuid'
import { Database } from '../../database/index.js';

export const InsertNewCar = async (data) => {

    const carId = uuidv4();

    const query = 'INSERT INTO cars (car_id, car_name, car_brand, car_model, car_plate, car_chassi, car_price) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const params = [carId, data.carName, data.carBrand, data.carModel, data.carPlate, data.carChassi, data.carPrice];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, errorMessage: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true };
};