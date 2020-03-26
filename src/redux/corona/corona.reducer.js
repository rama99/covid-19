import {coronaTypes} from './corona.types';

const INITIAL_STATE = {
    countries: null,
    byCountry: null,    
    isLoading: true,
    errorMessage:false
}

const coronaReducer = (state = INITIAL_STATE , action) => {

    switch(action.type) {
        case coronaTypes.FETCH_COUNTRIES_START:
            return {
            ...state,
            isLoading:true,
            errorMessage:null    
            }
        case coronaTypes.FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                byCountry: `india`,
                isLoading:false,
                errorMessage:null    
                } 
        case coronaTypes.FETCH_COUNTRIES_FAILURE:
                return {
                        ...state,                       
                        isLoading:false,
                        errorMessage:action.payload   
                    } 
        default:
            return state;    
    }

}
export default coronaReducer;