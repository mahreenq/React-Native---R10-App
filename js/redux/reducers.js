import { combineReducers } from 'redux';
import {NavigationReducer} from '@expo/ex-navigation';
import ConductReducer from '../redux/modules/conduct';
import SessionsReducer from '../redux/modules/sessions';
import SpeakerReducer from '../redux/modules/speaker';
import FavesReducer from '../redux/modules/faves';


export default combineReducers({
    navigation: NavigationReducer,
    conduct : ConductReducer,
    sessions : SessionsReducer,
    speaker : SpeakerReducer,
    faves : FavesReducer,
});