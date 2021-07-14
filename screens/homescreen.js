import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class homescreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(text) => {
                        this.setState({ text: text });
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

                <Text>{this.state.displayText}</Text>

            </View>
        )
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
                var wordData = responseObject.definitions(0)
                var definition=wordData.desctiption
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
        }
    
    }
}