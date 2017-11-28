
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    location: {
        color: '#999999',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Light',
        padding:10,
        paddingTop: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Light',
        padding:10,
    },
    time: {
        color: '#cf392a',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Light',
        padding:10,
    },
    description: {
        fontSize: 20,
        fontFamily: 'Montserrat-Light',
        padding:10,
    },
    speakerName: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Light',
        padding:10 ,
    },
    speakerImage: {
        display:'flex',
        flex: 1,
        padding:10,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        width: '80%',
        height: 50,
        flex: 1 , 
        justifyContent: 'center', 
        alignItems: 'center',
   
      },
      buttonText: {
  
        fontSize: 17,
        fontFamily: 'Montserrat-Light',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
      }
    



    
});

export default styles;