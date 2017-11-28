import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  SectionList
} from 'react-native';

import { Dimensions } from 'react-native';
import styles from './styles';
import SessionList from '../../components/SessionList';

const Schedule = ({sessionsData , isLoading}) => {

 

    return (
          <View style ={styles.mainContainer} >

                      <SessionList 
                        currentNavigatorUID={"schedule"}
                        sessionsData={sessionsData}  />
               
          </View>
    );
    
 };

export default Schedule;

