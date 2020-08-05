import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import {Surface} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
export default class ProfileComponent extends Component {
    constructor(props) {
        super(props)
    }
    renderOption=(icon,name, count, size)=> {
        return(
            <View style={styles.option}>
            <View style={styles.left}>
            <Icon name={icon} size={35} color="#ff5b77"/>
            <Text style={styles.title}>{name}</Text>
            </View>
            <View style={{marginLeft: size}}></View>
            <View style={styles.left}>
            <Text style={styles.title}>{count}</Text>
            <Icon2 name="ios-arrow-forward" size={35} color="#ff5b77"/>
            
            </View>
            
            </View>
        )
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
               
               {this.renderOption("music", "Songs", 20,200)}
               {this.renderOption("playlist-music", "Playlist", 20,190)}
               {this.renderOption("album", "Albums", 20,185)}
               {this.renderOption("download", "Downloads", 20,145)}
               <View style={styles.divider}/>
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
        marginTop: 10,
        height: 60,
        width: '200%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor:'#ff5b77'
    },
    left: {
     flexDirection: 'row',
     
    },
    title: {
        fontSize: 25,
        marginLeft: 15,
        color: '#fff'
    }
})
