import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchConduct} from '../../redux/modules/conduct';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ActivityIndicator
  } from 'react-native';


import About from './About';

class AboutContainer extends Component {
    static route = {
        navigationBar:{
            title:'About'
        }
    };

    componentWillMount(){
        this.props.dispatch(fetchConduct());
    };

    render() { 
        return (
            this.props.isLoading ? 
                <ActivityIndicator animating={true} size="small" color="black" /> : 
                
                <About 
                conductData = {this.props.conductData} 
                isLoading={this.props.isLoading} /> 
        );
    };
};

const mapStateToProps = ({conduct}) => ({
    conductData: conduct.conductData,
    isLoading: conduct.isLoading
})

export default connect(mapStateToProps)(AboutContainer);