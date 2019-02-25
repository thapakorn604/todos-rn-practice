import React, { Component } from 'react'
import { StyleSheet, View,TextInput, Button, Picker } from 'react-native'

import Header from '../sub-components/Header'

class LoginScene extends Component {
    
    constructor(props) {
        super(props)
        this.state = { 
            username: "",
            password: "",
         }
         const { navigation, auth } = this.props
         auth.isLoggedIn == true ? navigation.navigate("App") : navigation.navigate("Auth")
    }

    doLogin(username, password){
         const { navigation, auth, updateStatus, saveUser } = this.props
        console.log(auth.username+" "+auth.password)
        if(auth.username == username && auth.password == password){
            updateStatus(true)
            saveUser(auth.user)
            navigation.navigate("App")
        }else{
            alert("ERROR")
            this.state.username = ""
            this.state.password = ""
        }  
    }

    render() { 
        const { username, password } = this.state
        return ( 
            <View style={styles.container}>
                <View style={styles.center}>
                <Header title="TODOS APP"/>
                    <TextInput
                        style={styles.textbox}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        placeholder="enter username"
                    />
                    <TextInput
                        style={styles.textbox}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder="enter password"
                        secureTextEntry={true}    
                    />
                    <Button title="Login"
                    onPress={()=> this.doLogin(this.state.username, this.state.password)}/> 
                </View>
            </View>
         )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    textbox: {
        height: 30, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginLeft:30,
        marginRight: 30,
        marginTop:10,
        marginBottom: 10,
        paddingLeft: 5,
    },
    center:{
        flex:1,
        justifyContent: "center",   
    }
})
 
export default LoginScene