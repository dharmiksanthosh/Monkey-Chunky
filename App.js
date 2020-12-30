import { Sound } from 'expo-av/build/Audio';
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import Header from './components/Header';
import SoundButton from './components/SoundButton';
import db from './localdb';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      word:"",
      chunks:[],
      phonems:[]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Image
          style={styles.img}
          source={{
            uri:'https://i.pinimg.com/originals/94/86/16/9486166e44e3023bf4fdbd40848f7255.png'
          }}/>
        <Text style={styles.text}>Please enter the word below</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {this.setState({word:text})}}
          value={this.state.word}
        />
        <TouchableOpacity
          style={styles.go}
          onPress={()=>{
            var text = this.state.word.toLowerCase().trim()
            db[text] ? (
              this.setState({
                chunks:db[text].chunks
              }),
              this.setState({
                phonems:db[text].phones
              })
            ) : 
            Alert.alert("The Does not exit in our DataBase")
          }}>
          <Text style={styles.text}>GO</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          {this.state.chunks.map((item,index)=>{
            return (
              <SoundButton wordChunk={this.state.chunks[index]} soundChunk={this.state.phonems[index]} buttonIndex={index}/>
            )
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  input: {
    width:200,
    height:50,
    marginTop:50,
    alignSelf:'center',
    textAlign:'center',
    borderWidth:5,
    borderColor:'#000',
    backgroundColor:'#fff'
  },
  text: {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  img:{
    width:100,
    height:100,
    margin:30,
    alignSelf:'center'
  },
  go:{
    backgroundColor:'orange',
    width:50,
    height:50,
    alignSelf:'center',
    borderWidth:4,
    borderRadius:10,
    justifyContent:'center',
    margin:10
  },
  chunk:{
    backgroundColor:'#F75431',
    width:50,
    height:40,
    alignSelf:'center',
    borderWidth:4,
    borderRadius:25,
    justifyContent:'center',
    margin:10
  }
});