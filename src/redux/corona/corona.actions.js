import axios from 'axios';
import {coronaTypes} from './corona.types';

export const fetchCountriesStart = () => ({
    type: coronaTypes.FETCH_COUNTRIES_START
})

export const fetchCountriesSuccess = (countries) => ({
    type: coronaTypes.FETCH_COUNTRIES_SUCCESS,
    payload: countries
})

export const fetchCountriesFailure = (errorMessage) => ({
    type: coronaTypes.FETCH_COUNTRIES_FAILURE,
    payload: errorMessage
})



export const fetchCoronaSuccessAsync = () => {

    return async dispatch => {

        try {
            dispatch(fetchCountriesStart());
            const response = await axios.get(`https://api.covid19api.com/countries`);
           // console.log(response.data.length);
            dispatch(fetchCountriesSuccess(response.data));
            console.log(`SUCCESS countries`);
        }
        catch(error) {
            console.log(`ERROR  ${error.message}`);
            dispatch(fetchCountriesFailure(error.message));
        }
    }
}





