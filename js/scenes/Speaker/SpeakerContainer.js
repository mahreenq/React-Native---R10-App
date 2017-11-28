import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {fetchSpeaker} from '../../redux/modules/speaker';
import {
    ActivityIndicator
  } from 'react-native';

import Speaker from './Speaker';



class SpeakerContainer extends Component {

    static route = {
        navigationBar:{
            visible: false
        }
    };

    render() { 

        return (
            this.props.isLoading ? 
                <ActivityIndicator animating={true} size="small" color="black" /> : 
                <Speaker speakerData= {this.props.speakerData}  /> 
        );
    };

};



export default SpeakerContainer ;