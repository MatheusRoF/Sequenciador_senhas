import React from "react";
import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer:{
      flexDirection:'column',
      borderColor: 'red',
      borderWidth:0,
      justifyContent:'center',
      alignSelf: 'center',
      marginBottom:60,
      paddingTop:20,
      paddingBottom:10,
      backgroundColor:'#fff' //Cor somente para marcar container
    },
    inputContainer:{
      width:'70%',
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center',
      flexDirection: 'column',
      
    }
  });

  export default styles