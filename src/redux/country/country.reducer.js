import {countryTypes} from './country.types';

const INITIAL_STATE = {
    detailsByCountry:null,  
    isLoading: true,
    errorMessage:false
}

const countryReducer = (state = INITIAL_STATE , action) => {

    switch(action.type) {
        case countryTypes.FETCH_BY_COUNTRY_START:
            return {
            ...state,
            isLoading:true,
            errorMessage:null    
            }
        case countryTypes.FETCH_BY_COUNTRY_SUCCESS:
            return {
                ...state,
                detailsByCountry: action.payload,    
                isLoading:false,                      
                errorMessage:null    
                } 
        case countryTypes.FETCH_COUNTRIES_FAILURE:
            return {
                    ...state,     
                    detailsByCountry: null,                    
                    isLoading:false,
                    errorMessage:action.payload   
                    } 
        default:
            return state;    
    }

}
export default countryReducer;