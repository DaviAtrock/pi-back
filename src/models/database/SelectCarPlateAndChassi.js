import { Database } from '../../database/index.js';

export const SelectCarPlateAndChassi = async({ carPlate, carChassi }) => {

    const query = 'SELECT COUNT(*) as total FROM cars WHERE car_plate = ? OR car_chassi = ?';
    const params = [carPlate, carChassi];

    const responseDatabase = await Database.Execute({ query, params });

    if(!responseDatabase.status){
        return responseDatabase;
    }

    if(responseDatabase?.results[0]['total'] > 0){
        return { status: false, errorMessage: 'placa ou chassi já cadastrados' };
    }

    return { status: true };
    
};