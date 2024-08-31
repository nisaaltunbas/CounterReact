import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import Btn from '@/components/Btn'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {

  const increase =()=>{ 
    setNumber(number+1)
  }
   
  const reset=()=>{
    setNumber(0)
    
  }
  const [number,setNumber]=useState(0)
  return (
    <View style={styles.screen}>
      <View style={{backgroundColor:'green', width:160,height:60,marginTop:40,marginLeft:70}}>
      <Text style={{fontSize:40,textAlign:'center'}}>{number}</Text>
      </View>
      <View style={{flexDirection:'row', marginLeft:10}}>
      <TouchableOpacity onPress={increase}>
      <Btn  renk='#B5C0C9' width={90} height={90} borderRadius={60} marginLeft={-15}></Btn>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={reset}>
        <Btn renk='#B5C0C9' width={50} height={50} borderRadius={40} marginTop={15} marginLeft={-50}></Btn>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  screen:{
    paddingTop:10,
    backgroundColor:'lightblue',
    marginLeft:50,
    width:300,
    height:300,
    marginTop:250,
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60,
  }
})