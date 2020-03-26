import {homeTypes} from './home.types';

const INITIAL_STATE = {
     data: 
        {
         header: {                   
                    title:`COVID-19`
                 }
        }

     ,
     errorMessage: null,
     isLoading: false   
}


const HomeReducer = (state = INITIAL_STATE , action) => {

    switch(action.payload) {
        case  homeTypes.FETCH_HOME_PAGE_START:
            return {
                ...state,
                errorMessage: null,
                isLoading:true
            }
        case homeTypes.FETCH_HOME_PAGE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading:false
            } 
        case homeTypes.FETCH_HOME_PAGE_SUCCESS:
            return {
                ...state
            }       
        default:
            return state;
    }

}

export default HomeReducer;