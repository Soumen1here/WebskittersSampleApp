import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LoginActions from './../actions/Login';
import Loader from './../components/Loader';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: null,
            pass: null
        }
    }

    doLogin(){
        let { user, pass } = this.state;
        this.props.login(user, pass);
    }

    SignUp(){
        Actions.Main();
    }

    render(){
        let { hasError, isLogged, isLoading } = this.props;
        return (
            <View style={styles.container}>
                <Loader loading={isLoading} />
                <Image style={styles.Logo} source={require('../../assets/icons/WEB.png')} />
                <Text style={styles.Text}>Webskitters Login</Text>
                <View>
                    <TextInput
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(54, 173, 164, .8)'}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={(user) => this.setState({user})}
                    />
                    <TextInput
                        placeholder={'Password'}
                        placeholderTextColor={'rgba(54, 173, 164, .8)'}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={(pass) => this.setState({pass})}
                    />
                </View>
                <Button
                    title={"LogIn"}
                    onPress={ () => { this.doLogin() } }
                />
                <TouchableOpacity onPress={() => { this.SignUp() }}>
                    <Text style={styles.Text}>Don't have Account? SignUp</Text>
                </TouchableOpacity>
                    
                {/* <Text style={{marginTop: 20}}>{hasError ? "Please fill up fileds" : ""}</Text>
                <Text style={{marginTop: 20}}>{isLogged ? "ONLINE" : "OFFLINE"}</Text> */}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.login.isLogged,
        hasError : state.login.hasError,
        isLoading: state.login.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(LoginActions.login(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    input: {
        marginBottom: 10,
        borderBottomColor: '#36ada4',
        borderBottomWidth: 1
    },

    button: {
        padding: 10,
        backgroundColor: '#36ada4',
        marginTop: '10%'
    },
    Logo: {
        marginTop: '10%',
        alignSelf: 'center',
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        overflow: "hidden",
        borderWidth: 3,
     
    },
    Text: {
        marginTop: '10%',
        fontWeight: "bold"
    }
});
