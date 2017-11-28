import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSpeaker} from '../../redux/modules/speaker';
import {
    ScrollView,
    ActivityIndicator
  } from 'react-native';

import Session from './Session';



class SessionContainer extends Component {
    constructor(props){
        super(props);
    };

    static route = {
        navigationBar:{
            title:'Session'
        }
    };

    componentWillMount(){
         this.props.dispatch(fetchSpeaker(this.props.sessionData.speaker));
        //grab speaker information
    };

    render() { 
        const {sessionData, speakerData} = this.props;
        return (
            this.props.isLoading ? 
                <ActivityIndicator animating={true} size="small" color="black" /> : 
                
                <Session
                sessionData = {sessionData} speakerData= {speakerData}  /> 
        );
    };

};

const mapStateToProps = ({speaker}) => ({
    speakerData: speaker.speakerData,
    isLoading: speaker.isLoading
})


export default connect(mapStateToProps)(SessionContainer);