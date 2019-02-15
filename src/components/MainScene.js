import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';

import _ from 'lodash'

class MainScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask : '',

        }
    }

    renderTodos() {
        const { todos } = this.props
        var todosList = _.filter(todos, task => !task.done)
        
        if (todosList.length !== 0) {
            return todosList.map ((item,index) => (
                <View style={{flexDirection :"row",justifyContent: 'space-between'}} key={index}>
                    <View>
                        <Text style={styles.contentText}>[{index+1}] {item.task}  </Text>
                    </View>
                    <View style={{flexDirection :"row",justifyContent: 'space-between'}} >
                    <TouchableOpacity onPress={()=> this.handleDeleteChecked(item.key)}>
                        <Text style={{color:"red", fontSize: 30,fontWeight: 'bold'}}> ✗ </Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity onPress={()=> this.handleDoneChecked(item.key)}>
                        <Text style={{color:"green", fontSize: 30,fontWeight: 'bold'}}> ✓ </Text>
                    </TouchableOpacity>
                        
                    </View>
                </View>
            ))
        }else{
            return (
                <View>
                    <Text style={{color : 'green',fontWeight:'bold'}}>No more task, have a nice day!</Text>
                </View>
            )
        }
    }

    renderDone() {
        const { todos } = this.props
        var doneList = _.filter(todos, task => task.done)
        
        if(doneList.length !== 0){

            return doneList.map ((item,index) => (
                <View style={{flexDirection :"row",justifyContent: 'space-between'}} key={index}>
                    <View style={{flexDirection :"row", justifyContent: 'space-between'}}>
                        <Text style={{fontWeight:'bold'}}>✓</Text>
                        <Text style={{color : 'green',fontWeight:'bold'}}>{item.task}</Text>
                    </View>
                </View>
           ))   
        }else {
            return (
                <View>
                    <Text style={{color : 'red',fontWeight:'bold'}}>There is no any done task.</Text>
                </View>
            )
        }
       
    }

    handleDoneChecked (key) {
        this.props.updateTodo(key,true)
    }

    handleDeleteChecked (key){
        this.props.deleteTodo(key)
    }
    handleAddPress(){
        if (this.state.newTask !== "") {
            this.props.addTodo({key: null, task: this.state.newTask, done:false})
            this.state.newTask = ""
            alert ("SUCCESS")
        }else{
            alert ("ERROR")
        }
    }

    render() { 
        return ( 
            <ScrollView style={styles.container}>
            <View >
                <View style= {styles.header}>
                    <Text style= {styles.headerText} >TODOS LIST </Text>
                </View>

                <View style={styles.content}>
                  { this.renderTodos() }
                </View>

                <View style={styles.content}>
                    <Text style={{fontWeight : 'bold',fontSize : 25}}> DONE </Text>
                </View>

                <View style={styles.content}>
                    { this.renderDone() }
                </View>  

                <View style={styles.content}>
                    <Text style={{fontWeight : 'bold',fontSize : 25}}> ADD TASK </Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1,marginTop:20,marginBottom: 20}}
                        onChangeText={(newTask) => this.setState({newTask})}
                        value={this.state.newTask}
                    />
                    <Button  
                        title='ADD NEW TASK'
                        color='blue'
                        onPress = {()=>this.handleAddPress()}
                    />
                </View>  
            </View>
            </ScrollView>
         );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex : 1
    },
    header : {
        marginTop : 50,
        justifyContent : 'center',
        flexDirection : 'row'
    },
    headerText : {
        fontWeight : 'bold',
        fontSize : 30
    },
    content : {
        margin : 20,
        justifyContent : 'flex-end'
    },
    contentText : { 
        fontWeight : 'bold',
    }
})

export default MainScene;