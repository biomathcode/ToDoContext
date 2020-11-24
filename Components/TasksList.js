import React, { Component } from 'react'
import {View, StyleSheet,FlatList, Text, TouchableOpacity} from 'react-native'
import Context from '../Context/Context'

export default class TasksList extends Component{
    static contextType = Context;
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.GoodMorning}>Good Morning</Text>
                <Text style={styles.title}>To Do List</Text>
                <FlatList
                    data={this.context.tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <View style={styles.rowcontainer}>
                                <Text style={styles.text}>{item}</Text>
                                <TouchableOpacity activeOpacity={0.50} style={styles.delete} onPress={() => {this.context.deleteTask(index)}}>
                                    <Text style={styles.buttonSign}>-</Text>
                                </TouchableOpacity> 
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowcontainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        marginBottom: 20,
        alignItems: 'center',
        alignContent: 'center',
        elevation: -1,
    },
    GoodMorning: {
        marginTop:20,
        marginLeft: 0,
        fontSize: 50,
        fontWeight: "normal",
        fontFamily: 'sans-serif-light',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black'
    },
    title: {
        marginTop:10,
        marginLeft: 0,
        fontSize: 20,
        opacity: 0.7,
        fontWeight: "100",
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        opacity: 0.8,
        maxWidth: '80%',
        alignSelf: 'flex-start'
    },
    buttonSign: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    delete: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 20,
        fontSize: 15,   
        alignSelf: 'flex-end'
    }
});