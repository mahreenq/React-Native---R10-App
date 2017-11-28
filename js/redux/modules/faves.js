import {formatSessionData} from '../../lib/DataFormatHelpers';
import {queryFaves , createFave , deleteFave} from '../../config/models';
const firebaseSessionsURL = 'https://r10app-95fea.firebaseio.com/sessions.json';

//types of actions to modify our state

const GET_FAVES_LOADING = 'GET_FAVES_LOADING';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';
const GET_FAVES_SESSION = 'GET_FAVES_SESSION';
const CREATE_FAVE_SESSION = 'CREATE_FAVE_SESSION';
const DELETE_FAVE_SESSION = 'DELETE_FAVE_SESSION';
const WRITE_FAVE_ERROR = 'WRITE_FAVE_ERROR';

//Dispatch actions, optionally with payloads

const getFavesLoading = () => {
    return {
        type: GET_FAVES_LOADING
    };
};

const getFavesError = (error) => {
    return {
        type: GET_FAVES_ERROR,
        payload: error
    };
};

const getFavesSession= (faves) => {
    return {
        type: GET_FAVES_SESSION,
        payload: faves
    };
};

const createFaveSession= () => {
    return {
        type: CREATE_FAVE_SESSION
    };
};

const deleteFaveSession= () => {
    return {
        type: DELETE_FAVE_SESSION
    };
}

const writeFaveError = (error) => {
    return {
        type: WRITE_FAVE_ERROR,
        payload: error
    };
};

//HELPER FN

export const fetchFaves = () => (dispatch) => {
    dispatch(getFavesLoading());
    const faveIds = queryFaves();

    return fetch(`${firebaseSessionsURL}`)
    .then(response => response.json())
    .then(sessions => {
        // console.log('fave session', sessions);
        const filteredSessions = sessions.filter(session =>(
            faveIds.includes(session.session_id)
        ));
        // console.log('fave session', filteredSessions);
        return dispatch(getFavesSession(filteredSessions)); 
    })
    .catch (error => dispatch(getFavesError(error)));
};

//Add faved session to database

export const addFaveSession = (sesssionId) => dispatch => {
    try {
        createFave(sesssionId);
        dispatch(createFaveSession());
    } catch (error) {
        dispatch(writeFaveError(error));
    }
};

//Remove faved session to database

export const removeFaveSession = (sesssionId) => dispatch => {
    try {
        deleteFave(sesssionId);
        dispatch(deleteFaveSession());
    } catch (error) {
        dispatch(writeFaveError(error));
    }
};

//Reducer that handles our actions and manipulates our state in the store

export default function reducer(state = {isLoading: false, sessionsData: [] , faveIds:[], lastModified:'' }, action){
    switch (action.type){
        case GET_FAVES_LOADING : {
            return {...state, isLoading: true, error:'' };
        };
        case GET_FAVES_ERROR: {
            return {...state , isLoading:false , error: action.payload};
        };
        case GET_FAVES_SESSION: {
            const sessions = action.payload;
            const faveIds = sessions.map(session => session.sessions_id);
            return { ...state, 
                isLoading: false , 
                error: '', 
                sessionsData: formatSessionData(sessions),
                faveIds : faveIds
             };
        };
        case WRITE_FAVE_ERROR : {
            return { ...state, error: action.payload };
        };
        case CREATE_FAVE_SESSION : 
        case DELETE_FAVE_SESSION : {
            return {...state, lastModified: Date.now()};
        };
        default : {
            return state;
        };
    }
};