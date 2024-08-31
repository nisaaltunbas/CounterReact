import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Btn = (props) => {
  return (
    <View style={{width:90,marginLeft:70,marginTop:20}}>
      <Text style={{backgroundColor:props.renk,width:props.width,height:props.height,borderRadius:props.borderRadius,marginTop:props.marginTop,marginLeft:props.marginLeft}}>{props.metin}</Text>
    </View>
  )
}

export default Btn

const styles = StyleSheet.create({
    btn:{
      
    },

})