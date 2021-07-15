import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import dictionary from '../dictionary'


export default class homescreen extends React.Component {
    constructor() {
        super();
        this.state = {
          text: '',
          isSearchPressed: false,
          word: 'Loading...',
          lexicalCategory: '',
          examples: [],
          definition: '',
        };
      }

      


      getWord=(word)=>{
        var searchKeyword=word.toLowerCase()
        var url ="https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
        return fetch(url)
        .then((data)=>{
                if(data.status===200)
            {
                return data.json()
            }
            else
            {
                return null
            }
        })
        .then((response)=>{
            var responseObject = response
            if(responseObject)
            {
                var wordData = responseObject.definitions[0]
                var definition=wordData.description
                var lexicalCategory=wordData.wordtype

                this.setState({
                    "word" :this.state.text,
                    "definition":definition,
                    "lexicalCategory":lexicalCategory

                })
            }
            else
            {this.setState({
                    "word":this.state.text,
                    "definition":"Not Found",

                });

            }
        })
    
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(text) => {
                        this.setState({ 
                            text: text,
                            isSearchPressed:false,
                            word : "Loading...",
                            lexicalCategory: '',
                            examples : [],
                            definition : ""
                        });
                    }}
                    value={this.state.text}
                />

                <TouchableOpacity
                    style={styles.goButton}
                    onPress={()=>{
                        this.setState({displayText:this.state.text})
                    }}>
                    <Text style={styles.buttonText}>Go Button</Text>
                </TouchableOpacity>

                <View style = {styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                        Word : {""}
                    </Text>
                    <Text style={{fontSize:18}}>
                    {this.state.word}
                    </Text>
                </View>

                <View style = {styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                        Type : {""}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.lexicalCategory}
                    </Text>
                </View>

                <View style = {styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                        Definition : {""}
                    </Text>
                    <Text style={{fontSize:18}}>
                        {this.state.definition}
                    </Text>
                </View>

                <Text>{this.state.displayText}</Text>

            </View>
        )
    }
}

getWord=(text)=>{
    var text = text.toLowerCase()
    try{
        var word = dictionary[text]["word"]
        var lexicalCategory = dictionary[text]["lexicalCategory"]
        var definition = dictionary[text]["definition"]

        this.setState({
            "word" :word,
            "definition":definition,
            "lexicalCategory":lexicalCategory
        })
    }
    catch(err){
        alert("Sorry this word is not available for now")
        this.setState({
            'text':'',
            'isSearchPressed':false
        })
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
    },
    displayText: {
      alignItems: 'center',
      color: 'blue',
    },
  });