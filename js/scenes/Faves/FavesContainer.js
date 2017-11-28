import React, {Component} from 'react';
import {connect} from 'react-redux';
import realm from '../../config/models';
import {fetchFaves} from '../../redux/modules/faves';
import {
    ScrollView,
    ActivityIndicator
  } from 'react-native';
import Faves from './Faves';



class FavesContainer extends Component {
    static route = {
        navigationBar:{
            title:'Faves'
        }
    };

    constructor(props) {
        super(props);
        realm.addListener('change', () => {
            this.props.dispatch(fetchFaves());
          });
    }

    componentWillMount(){
        this.props.dispatch(fetchFaves());
    };

    render() { 
        console.log(this.props.sessionsData);
        return (
            this.props.isLoading ? 
                <ActivityIndicator animating={true} size="small" color="black" /> : 
                
                <Faves
                sessionsData = {this.props.sessionsData} 
                faveIds = {this.props.faveIds}
                isLoading={this.props.isLoading} /> 
        );
    };

};

const mapStateToProps = ({faves}) => ({
    faveIds: faves.faveIds,
    sessionsData: faves.sessionsData,
    isLoading: faves.isLoading
})

export default connect(mapStateToProps)(FavesContainer);