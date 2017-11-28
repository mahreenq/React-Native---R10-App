
import { createRouter } from '@expo/ex-navigation';
import  Layout from './NavigationLayout.js';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import  Session from '../scenes/Session';
import  Speaker from '../scenes/Speaker';
import  Faves from '../scenes/Faves';
  


  export default Router = createRouter(() => ({
    layout: () => Layout,
    schedule: () => Schedule,
    about: () => About,
    session: () => Session,
    speaker: () => Speaker,
    faves : () => Faves,
  }));