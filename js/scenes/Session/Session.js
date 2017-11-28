import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SectionList
} from 'react-native';
import {goToSpeaker} from '../../lib/NavigationHelpers';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import Moment from 'react-moment';
import 'moment-timezone';
import {createFave, deleteFave} from '../../config/models';

const Session = ({sessionData , speakerData}) => {
  const {session_id} = sessionData



    return (
          <View style ={styles.mainContainer} >
          <ScrollView>
          <Text style ={styles.location}>{sessionData.location} </Text>
            <Text style ={styles.title}>{sessionData.title} </Text>
            <Moment tz="America/Vancouver" 
                    format="h:mm A"                    
                    element={Text} 
                    unix
                    style ={styles.time}>
                    {sessionData.start_time}
               </Moment>
            <Text style ={styles.description}>{sessionData.description} </Text>

            <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#999999', paddingLeft: 10, paddingRight: 10 }} >
            <Text style ={styles.location}  > Presented by: </Text>

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                     <View style={{ padding: 10, }}>
                        <Image
                          onPress={()=> goToSpeaker(speakerData)}
                          style={{ width: 80, height: 80, borderRadius:40, }}
                          resizeMode={"contain"}
                          source={{uri:speakerData.image}}
                         
                        />
                      </View>
                    
                    <View >
                        <Text  style ={styles.speakerName} onPress={()=> goToSpeaker(speakerData)} > {speakerData.name} </Text>
                    </View>

    
                </View>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', paddingTop: 15, }}>
                  <LinearGradient 
                          start={{x: 0.5, y: 0.25}} end={{x: 1, y: 1}}
                          locations={[0.0,0.5]}
                          colors={['#9963ea', '#8797D6']} style={styles.linearGradient}>
                            <Text style={styles.buttonText}  onPress={()=> createFave(session_id)}>
                              Add to Faves
                            </Text>
                  </LinearGradient>
              </View>
              <View style={{justifyContent:'center', alignItems:'center', paddingTop: 15, }}>
                  <LinearGradient 
                          start={{x: 0.5, y: 0.25}} end={{x: 1, y: 1}}
                          locations={[0.0,0.5]}
                          colors={['#9963ea', '#8797D6']} style={styles.linearGradient}>
                            <Text style={styles.buttonText}  onPress={()=> deleteFave(session_id)}>
                              Remove from Faves
                            </Text>
                  </LinearGradient>
              </View>
              </ScrollView>
          </View>
    );
    
 };

export default Session;

