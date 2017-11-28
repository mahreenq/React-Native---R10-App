
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    speakerName: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Light',
        padding:10 ,
        textAlign: 'center',
    },
    speakerBio: {
        fontFamily: 'Montserrat-Light',
        padding:15 ,
        fontSize: 17,
    },
    mainContainer: {
        backgroundColor: 'black',
        flex: 1 , 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingLeft: 20,
 
    },
    speakerHeader : {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Light',
        padding:10 ,
        textAlign: 'center',
        color: 'white',

    },
    speakerContainer : {
        backgroundColor:'white' , 
        borderRadius: 20, 
        width: '95%',
        height: '100%',
        flex: 1 , 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 20,
   
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
      },
});

export default styles;