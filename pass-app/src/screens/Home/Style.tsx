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
      borderWidth: 2,
      justifyContent:'center',
      alignSelf: 'center',
      marginBottom:60,
      paddingTop:20,
      paddingBottom:10,
      backgroundColor:'#f2f' //Cor somente para marcar container
    }
  });

  export default styles