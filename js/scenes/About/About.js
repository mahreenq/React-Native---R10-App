import React, { Component } from 'react';
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

import { Dimensions } from 'react-native';
import styles from './styles';

const About = ({conductData , isLoading}) => {

 

    return (
      
    <View style ={styles.mainContainer} >
          <ScrollView>
        <View style ={styles.imageContainer}>
            <Image style ={styles.image} resizeMode={"contain"}
                    source={require('../../assets/images/r10_logo.png')}
                    >
            </Image>
        </View>

          <View style={styles.container}> 
            <Text style={styles.fontMontLight}>R10 is a conference that focuses on just about any topic related to dev. </Text> 
          </View>

          <View style={styles.container}> 
            <Text style={styles.title}>Date and Venue </Text> 
          </View>

          <View style={styles.container}> 
            <Text style={styles.fontMontLight}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC. </Text> 
          </View>

          <View style={styles.container}> 
            <Text style={styles.title}>Code of Conduct </Text> 
          </View>

                <FlatList
                data={conductData}
                renderItem={( {item} ) => 
                    <View style={styles.container}>
                        <Text style={styles.titleCodeOfConduct}> +{item.title}  </Text>
                        <Text style={styles.description}> {item.description}  </Text>
                    </View>
                    }
                keyExtractor={item => item.title}
                /> 


        </ScrollView>
 </View>

    
    )
    
 };
// class About extends Component {


    
//       componentDidMount() {
//         let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
//         fetch(endpoint)
//           // if fetch is successful, read our JSON out of the response
//           .then(response => response.json())
//           .then(data => {
//             this.setState({ data });
//           })
//           .catch(error => console.log(`Error fetching JSON: ${error}`));
//       }
//       componentDidUpdate() {
//         if ( this.state.data && this.state.isLoading ) {
//           this.setState({ isLoading: false });
//         }
//       }


//       render() {
//         if (this.state.isLoading) {
//          return (
//           <ActivityIndicator animating={true} size="small" color="black" />
//          );
//         } else {
//          return (
            //  <View style ={styles.mainContainer} >
            //      <ScrollView>
            //     <View style ={styles.imageContainer}>
            //     <Image style ={styles.image} resizeMode={"contain"}
            //             source={require('../../assets/images/r10_logo.png')}
            //             >
            //     </Image>
            //     </View>

            //      <View style={styles.container}> 
            //         <Text style={styles.fontMontLight}>R10 is a conference that focuses on just about any topic related to dev. </Text> 
            //      </View>

            //      <View style={styles.container}> 
            //         <Text style={styles.title}>Date and Venue </Text> 
            //      </View>

            //      <View style={styles.container}> 
            //         <Text style={styles.fontMontLight}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC. </Text> 
            //      </View>

            //      <View style={styles.container}> 
            //         <Text style={styles.title}>Code of Conduct </Text> 
            //      </View>


            //             <FlatList
            //             data={this.state.data}
            //             renderItem={({ item }) => 
            //                     <View style={styles.container}>
                    
                    
            //                 <Text style={styles.titleCodeOfConduct}> +{item.title}  </Text>
            //                 <Text style={styles.description}> +{item.description}  </Text>
                          
            //                 </View>}

            //             keyExtractor={item => item.title}
            //             />
            //     </ScrollView>
            // </View>
//          );
//         }
//        }
// }

export default About;

