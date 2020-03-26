import axios from 'axios';
import {countryTypes} from './country.types';

export const fetchByCountryStart = () => ({
    type: countryTypes.FETCH_BY_COUNTRY_START
})

export const fetchByCountrySuccess = (countryData) => ({
    type: countryTypes.FETCH_BY_COUNTRY_SUCCESS,
    payload: countryData
})

export const fetchByCountryFailure = (errorMessage) => ({
    type: countryTypes.FETCH_COUNTRIES_FAILURE,
    payload: errorMessage
})

export const fetchByCountryAsync = (country) => {

    return async dispatch => {

        try {
            dispatch(fetchByCountryStart());
            const response = await axios.get(`https://api.covid19api.com/total/country/${country}/status/confirmed`);
           // console.log(response.data.length);
            dispatch(fetchByCountrySuccess(response.data));
            console.log(`SUCCESS countries`);
        }
        catch(error) {
            console.log(`ERROR  ${error.message}`);
            dispatch(fetchByCountryFailure(error.message));
        }
    }
}


