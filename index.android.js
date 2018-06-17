import React,
       { Component } from 'react';
import { Registry,
         StyleSheet,
         Text,
         View } from 'react-native';
import { AppBridge } from 'NativeModules';

async function displayHelloWorld (self) {
    try {
        let text = await AppBridge.sayHello("Android")
        self.setState({
            hello: text
        })
    } catch (e) {
        console.log(e)
    }
}

export default class app extends Component {
    state = {}

    componentDidMount () {
        displayHelloWorld(this)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    rust says: { this.state.hello }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('app', () => app);
