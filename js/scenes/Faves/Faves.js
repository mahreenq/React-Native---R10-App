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
import FavesList from '../../components/FavesList';
import SessionList from '../../components/SessionList';

const Faves = ({sessionsData , faveIds}) => {

 
//  console.log(faveIds);
    return (
          <View style ={styles.mainContainer} >

                      <SessionList 
                        faveIds = {faveIds}
                        currentNavigatorUID={"faves"}
                        sessionsData={sessionsData}  />
               
          </View>
    );
    
 };

export default Faves;

