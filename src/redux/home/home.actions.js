//import axios from 'axios';
import {homeTypes} from './home.types';

export const  fetchHomePageStart = () => {
    return {
        type: homeTypes.FETCH_HOME_PAGE_START       
    }
}

export const fetchHomePageSuccess = () => {
    return {
        type: homeTypes.FETCH_HOME_PAGE_SUCCESS
    }
}

export const  fetchHomePageFailure = (errorMessage) => {

    return {
        type: homeTypes.FETCH_HOME_PAGE_FAILURE,
        payload: errorMessage
    }

}

export const  fetchHomePageSuccessAsync = () => {

    console.log(`@@@@@@@@`);

    return async dispatch => {
        try {
            dispatch(fetchHomePageStart());

            dispatch(fetchHomePageSuccess());
        }
        catch(error) {
            dispatch(fetchHomePageFailure(error.message));
        }

    }
}

