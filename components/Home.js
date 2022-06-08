/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   TouchableOpacity
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import { useDispatch, useSelector } from "react-redux";
 import { userlogin } from '../auth/authSlice';
 import { getuserData } from '../auth/authSlice';
import { saveData } from '../auth/authSlice';
import { getData } from '../auth/authSlice';

 const Home=()=>{

    const status = useSelector(getuserData,getData);
    const dispatch = useDispatch();
 
   useEffect(()=>{
        console.log("st",status)
 },[dispatch,status])

   return(
     <>
     <View style={{flex:1,alignItems:"center",textAlign:"center",justifyContent:"center"}}>
     <Text style={{fontFamily:"TiroTelugu-Italic",fontSize:20}}>Auth Screen</Text>
     
     <View style={{height:"5%"}}></View>
     <TouchableOpacity style={styles.button} onPress={
       ()=>{
           console.log("Clicked to send data in storage")
         dispatch(saveData())
       }
   
   }>
     <Text  style={styles.text} >Click to send data in storage</Text>
     </TouchableOpacity>


<View style={{height:"5%"}}></View>
     <TouchableOpacity style={styles.button} onPress={
       ()=>{
           console.log("clicked to see storage details")
         dispatch(getData())
       }
   
   }>
     <Text style={styles.text}>Click to see storage details</Text>
     </TouchableOpacity>
     </View>
 
     </>
   )
 }
 const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Home;
 