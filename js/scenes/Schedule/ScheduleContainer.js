import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSessions} from '../../redux/modules/sessions';
import {
    ScrollView,
    ActivityIndicator
  } from 'react-native';

import Schedule from './Schedule';



class ScheduleContainer extends Component {
    static route = {
        navigationBar:{
            title:'Schedule'
        }
    };

    componentWillMount(){
        this.props.dispatch(fetchSessions());
    };

    render() { 
        return (
            this.props.isLoading ? 
                <ActivityIndicator animating={true} size="small" color="black" /> : 
                
                <Schedule 
                sessionsData = {this.props.sessionsData} 
                isLoading={this.props.isLoading} /> 
        );
    };

};

const mapStateToProps = ({sessions}) => ({
    sessionsData: sessions.sessionsData,
    isLoading: sessions.isLoading
})

export default connect(mapStateToProps)(ScheduleContainer);