import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default class SoundButton extends React.Component {
    constructor(){
        super();
        this.state={
            buttonPressIndex:null
        }
    }
    playSound = async (soundChunk) =>{
        var soundLink = "https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/" + soundChunk + '.mp3';
        await Audio.Sound.createAsync(
            {uri:soundLink},
            {shouldPlay:true}
        )
    }
    render(){
        return(
            <TouchableOpacity
                style={
                    this.props.buttonIndex === this.state.buttonPressIndex
                    ? ([styles.chunk,{backgroundColor:'white'}])
                    : ([styles.chunk,{backgroundColor:'#F75431'}])
                }
                onPress={()=>{
                    this.playSound(this.props.soundChunk)
                    this.setState({buttonPressIndex:this.props.buttonIndex})
                }}>
                <Text style={styles.text}>{this.props.wordChunk}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
      },
    chunk:{
        width:50,
        height:40,
        alignSelf:'center',
        borderWidth:4,
        borderRadius:25,
        justifyContent:'center',
        margin:10,
    }
})