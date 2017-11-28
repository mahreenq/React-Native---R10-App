import React, {Component} from 'react';
import {Stylesheet, Text} from 'react-native';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem,
  } from '@expo/ex-navigation';
import Router from './router.js';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


export default class NavigationLayout extends Component {

    renderIcon(iconName, isSelected) {
        let color = isSelected ? '#ffffff' : '#999999' ;
        return(
            <Icon name ={iconName} size = {24} color={color} />
        )
    };

    renderTitle(isSelected, title){
        let color = isSelected ? '#ffffff' : '#999999' ;
        let titleStyle = {
            color: color,
            fontFamily: 'Montserrat-Regular',
            fontSize: 10 
        }
        return (
            <Text style ={titleStyle}> {title} </Text>
        )
    };

    renderBackground() {
        return (
          <LinearGradient
            style={styles.linearGradient}
            colors={['#9963ea ', '#cf392a ']}
            start={{ x: 0.5, y: 0.25 }}
            end={{ x: 0.0, y: 1.0 }}
          />
        );
      }

    render(){
        const defaultRouteConfig = {
            navigationBar: {
              tintColor: '#ffffff',
              backgroundColor: 'purple',
              titleStyle: {
                fontFamily: 'Montserrat-Regular'
              },
              
           
            }
           };
        return(

            <TabNavigation
            initialTab="schedule"
            style={styles.tabItem}>

                    <TabItem
                    style={styles.tabItem} 
                    id="schedule"
                    title="Schedule" 
                    selectedStyle={styles.selectedTab} 
                    renderTitle={this.renderTitle}
                    renderIcon={(isSelected) => this.renderIcon('ios-calendar', isSelected)}
                    >
                    
                    <StackNavigation
                        defaultRouteConfig={defaultRouteConfig}
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                    </TabItem>

                    <TabItem
                    style={styles.tabItem}
                    id="faves"
                    title="Faves"
                    selectedStyle={styles.selectedTab} 
                    renderTitle={this.renderTitle}
                    renderIcon={(isSelected) => this.renderIcon('ios-heart', isSelected)} 
                    >
                    <StackNavigation
                        id="faves"
                        initialRoute={Router.getRoute('faves')}
                    />
                    </TabItem>
            
                    <TabItem
                    style={styles.tabItem}
                    id="about"
                    title="About"
                    selectedStyle={styles.selectedTab} 
                    renderTitle={this.renderTitle}
                    renderIcon={(isSelected) => this.renderIcon('ios-information-circle', isSelected)} 
                    >
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('about')}
                    />
                    </TabItem>
            
          </TabNavigation>

        )
    }
}

//imported to router

const styles = ({
    tabItem: {
      backgroundColor: 'black',
    },
    selectedTab: {
        backgroundColor: 'black',
    },
    navTitle:{
        color:'white',
    },
    linearGradient : {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'stretch',
        height: '100%'
       },

  });
  