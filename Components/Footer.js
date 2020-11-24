import React from 'react'
import {View, Text, StyleSheet, TextInput, Button,TouchableOpacity} from 'react-native'

import Context from '../Context/Context'

export default class Footer extends React.Component{

    constructor(props) {
        super(props)
        this.state={
            newTask: ''
        }
        this.myTextInput = React.createRef()
    }

    static contextType= Context;

    render() {
    const handelPress = () => {
        this.context.addNewTask(this.state.newTask)
        this.myTextInput.current.clear();
        
    }
    const handleChange = (x) =>{
        this.setState({newTask: x})
    }
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    ref={this.myTextInput}
                    onChangeText={handleChange}
                    placeholder="Add a new Task"
                />
                <TouchableOpacity activeOpacity={0.50} style={styles.button} onPress={handelPress}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        elevation: 10,
        justifyContent:'space-between',
    },
    view: {
        flex: 1,
        width: '100%',
        bottom: 20, 
        position: 'absolute',
        flexDirection: 'row'
    },
    title: {
        marginTop:20,
        marginLeft: 20,
        fontSize: 30,
      },
      input: {
        width:'80%',
        height: 50,
        borderRadius: 20,
        borderWidth:1,
        padding: 5,
        fontSize: 18,
        alignSelf:'flex-end',
        backfaceVisibility: 'hidden',
      },
      add: {
        width: 20,
      },
    button: {
        flexDirection: 'row',
        width: 50, 
        height: 50, 
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 3,
        alignSelf:'flex-end',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})