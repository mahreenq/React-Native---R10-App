import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {goBack} from '../../lib/NavigationHelpers';

const Speaker = ({ speakerData}) => {

console.log(speakerData);
 
    return (
          <View style ={styles.mainContainer} >

          <View style={{  flexDirection: 'row',}}>
            <Text onPress={()=> goBack()} style ={styles.speakerHeader}>  <Icon name ="ios-close-outline" size = {40} color="white" /></Text> 
            <Text style ={styles.speakerHeader}> About the Speaker </Text>
          </View>

          <ScrollView>
            <View style={styles.speakerContainer}>
                <View style={{ padding: 20, flex: 1 , justifyContent: 'center', alignItems: 'center', }}>
                              <Image
                                style={{ width: 150, height: 150, borderRadius:75, }}
                                resizeMode={"contain"}
                                source={{uri:speakerData.image}}
                              
                              />
                </View>  
                <View>        
                  <Text style ={styles.speakerName}> {speakerData.name} </Text>
                  <Text style ={styles.speakerBio}> {speakerData.bio} </Text>
                </View>


                <LinearGradient 
                start={{x: 0.5, y: 0.25}} end={{x: 1, y: 1}}
                locations={[0.0,0.5]}
                colors={['#9963ea', '#8797D6']} style={styles.linearGradient}>
                  <Text onPress={() => Linking.openURL(speakerData.url)}
                  style={styles.buttonText}>
                    Read More on Wikipedia
                  </Text>
              </LinearGradient>


            </View>


          </ScrollView>

          </View>
    );
    
 };

export default Speaker;

