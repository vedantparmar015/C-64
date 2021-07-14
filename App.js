import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import homescreen from './screens/homescreen'
import dictionary from './dictionary'

var word=dictionary[text]["word"]
var lexicalCategory=dictionary[text]["lexicalCategory"]
var definition=dictionary[text]["definition"]

this.setState({
  "word":word,
  "lexicalCategory":lexicalCategory,
  "definition":definition
})

constructor(); {
  super();
  this.state = {
    wordSearched,
    wordReturnedFromDatabase,
    lexicalCategory,
    definition,
    isButtonPressed
  };
}

export default function App() {
  return (
    <View style={styles.container}>
        
      <TouchableOpacity
        style={styles.goButton}
        onPress={()=>{
          this.setState({isGoPressed:true});
          this.getWord(this.state.text)
        }}>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          Word:{""}
        </Text>
        <Text style={{fontSize}}>
          {this.state.word}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          Type:{""}
        </Text>
        <Text style={{fontSize}}>
          {this.state.lexicalCategory}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          Definition:{""}
        </Text>
        <Text style={{fontSize}}>
          {this.state.Definition}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

getWord=(text)=>{
  var text=text.toLowerCase()
  try{
    var word=dictionary[text]["word"]
    var lexicalCategory=dictionary[text]["lexicalCategory"]
    var definition=dictionary[text]["definition"]
    this.setState({
      "word":word,
      "lexicalCategory":lexicalCategory,
      "definition":definition
    })
  }
  catch(err){
    alert("Sorry this word it not avalible for now")
    this.setState({
      'text':'',
      'isSearchPressed':false
    })
  }
}
