import {formatSessionData} from '../../lib/DataFormatHelpers';
const firebaseSessionsURL = 'https://r10app-95fea.firebaseio.com/sessions.json';

//types of actions to modify our state

const GET_SESSIONS_LOADING = 'GET_SESSIONS_LOADING';
const GET_SESSIONS_ERROR = 'GET_SESSIONS_ERROR';
const GET_SESSIONS = 'GET_SESSIONS';

//Dispatch actions, optionally with payloads

const getSessionsLoading = () => {
    return {
        type: GET_SESSIONS_LOADING
    };
};

const getSessionsError = (error) => {
    return {
        type: GET_SESSIONS_ERROR,
        payload: error
    };
};

const getSessions= (sessions) => {
    return {
        type: GET_SESSIONS,
        payload: sessions
    };
};

//HELPER FN

export const fetchSessions = () => (dispatch) => {
    dispatch(getSessionsLoading());

    return fetch(`${firebaseSessionsURL}`)
    .then(response => response.json())
    .then(sessions => dispatch(getSessions(sessions)))
    .catch (error => dispatch(getSessionsError(error)));
};


//Reducer that handles our actions and manipulates our state in the store

export default function reducer(state = {isLoading: false, sessionsData: []} , action){
    switch (action.type){
        case GET_SESSIONS_LOADING : {
            return {...state, isLoading: true, error:'' };
        };
        case GET_SESSIONS_ERROR: {
            return {...state , isLoading:false , error: action.payload};
        };
        case GET_SESSIONS : {
            return { ...state, isLoading: false , error: '', sessionsData: formatSessionData(action.payload)};
        };
        default : {
            return state;
        }
    }
} ;