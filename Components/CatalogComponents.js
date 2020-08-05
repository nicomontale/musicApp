import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import {Surface} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const {width, height}= Dimensions.get('window')
export default class CatalogComponents extends Component {
    constructor(props) {
        super(props)
    }

    goToDetails = item => {
        this.props.navigation.navigate('Details', {item, item});
      };
    render() {
        let categories= [
            {
                name: 'R&B',
                subtitle: 'Changes',
                img: require('../img/R&B.jpg')
        
        
            }, {
                name: 'Hip-Hop',
                subtitle: 'New Album',
                img: require('../img/HipHop.jpg')
        
        
            }, {
                name: 'Rap',
                subtitle: 'New Album',
                img: require('../img/rap.jpg')
        
        
            },
        ]
        return (
            <View style={styles.container}>
         
                <Text style={styles.title}> Categories </Text>
                <FlatList
                data={categories}
                horizontal={true}
                renderItem={({item,index})=>{
                    return(
                        <TouchableWithoutFeedback onPress={() => this.goToDetails(item)}>
                   <Surface style={styles.surface}>
                   <ImageBackground source={item.img} style={styles.img}>
                   <Icon name="music" size={20} color="#fff"/>
                   <Text style={styles.name}>{item.name}</Text>
                   </ImageBackground>
                   </Surface>
                   </TouchableWithoutFeedback>
                    )
                }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 250,
        padding: 15
        
    },
    title: {
        fontWeight:'bold',
        fontSize:24,
        color:'#fff',
        marginLeft: 15,
        margin:10},
        surface: {
            elevation: 15,
            height: 150,
            width: 150, 
           borderRadius: 10,
            marginRight: 10,
            marginLeft: 15,
            overflow: 'hidden'

    }, img: {
        height: 150,
        width: 150, 
       borderRadius: 10,
       padding: 10
    },
    name: {
        position: 'absolute',
        bottom: 10,
        left:10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        elevation: 15
    }
})
