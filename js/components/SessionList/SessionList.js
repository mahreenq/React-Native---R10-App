import React, {Component} from 'react';
import {SectionList, Text, View, Stylesheet} from 'react-native';
import Moment from 'react-moment';
import 'moment-timezone';
import {goToSession} from '../../lib/NavigationHelpers';



const Seperator = () => {
    return (
        <View style={styles.seperator} />
    )
};


const SessionList = ({currentNavigatorUID , sessionsData, faveIds}) => {
    console.log(faveIds);
  
      return (
          <View>
                <SectionList
                    sections = {sessionsData}
                    renderItem = {({item}) => {
                       return (
                        <View  style={styles.singleSession} >
                        <Text style={styles.singleTitle} onPress={()=> goToSession(currentNavigatorUID, item )} >{item.title}  </Text>
                        <Text style={styles.singleLocation}>{item.location} </Text>
                        </View>
                        );

                    }} 
                    renderSectionHeader={({section}) => {
                        
                        return  <Moment tz="America/Vancouver" 
                                        format="h:mm A" 
                                        style={styles.singleTime} 
                                        element={Text} 
                                        unix>
                                            {section.title}
                                </Moment>;
                    }}
                    ItemSeperatorComponent= {() => <Seperator />}
                    keyExtractor = {item => item.session_id}
                    stickySectionHeadersEnabled
                />
            </View>
      );
      
   };

   export default SessionList;

   styles={
    seperator: {
        backgroundColor: 'blue',
        height:1,
    },
    singleSession: {
        borderWidth: 0.5,
        borderColor: '#e6e6e6',
        padding:10,
    },
    singleTime: {
        backgroundColor:'#e6e6e6',
        padding:10,
        fontFamily: 'Montserrat-Regular',
    },
    singleLocation:{
        color:'#999999',
        paddingTop: 10,
        fontFamily: 'Montserrat-Regular',
    },
    singleTitle:{
        fontFamily: 'Montserrat-Regular',

    }
}