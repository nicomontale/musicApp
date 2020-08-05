import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import {Surface} from 'react-native-paper'
export default class ProfileComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.info}>
               <Surface style={styles.surface}>
               <Image
               source={require('../img/react-me.png')}
               style={styles.profile}
               
               />
               
               </Surface>
               <View style={styles.dataContainer}>
               <Text style={styles.name}>Nicola</Text>
               <Text style={styles.nickname}>Nickname1995</Text>
               </View>
               </View>
               <View style={styles.divider}/>
               
               <View style={styles.option}>
               
               </View>
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#000'
    },
    info: {
     padding: 10,
     flexDirection: 'row'
    },
    surface: {
        marginLeft: 20,
        height: 100,
        width: 100,
        borderRadius: 75,
        elevation: 15,
        overflow: 'hidden'
    },
    profile: {
        height: 100,
        width: 100,
        borderRadius: 75,
    },
    dataContainer: {
        paddingLeft: 15,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize:18,
        color: '#fff',
        fontWeight: 'bold'

    },
    nickname: {
        fontSize:18,
        color: '#fff',
        
    },
    divider : {
        height: 10,
        backgroundColor:'#ff5b77'
    },
    option: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
