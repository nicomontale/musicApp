import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, FlatList, TouchableWithoutFeedback, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const {width, height}=Dimensions.get("window")


export default class SongsComponent extends Component {
    constructor(props) {
        super(props)
    }
    separator=()=> {
    return <View style={{height: 15, backgroundColor: '#000'}}/>
}

playSong = item => {
    this.props.navigation.navigate('Player', {item: item});
  };
    render() {
        let songs= [
            {
                name: 'Rain On Me',
                subtitle: 'Lady Gaga',
                img: require('../img/ladygaga.jpeg'),
                duration: '3:15'
        
        
            }, {
                name: 'Peep Hole',
                subtitle: 'DaBaby',
                img: require('../img/dababy.jpg'),
                duration: '3:15'
        
            }, {
                name: 'Burn',
                subtitle: 'Usher',
                img: require('../img/usher.jpg'),
                duration: '3:15'
        
            },
            {
                name: 'After Hours',
                subtitle: 'The Weeknd',
                img: require('../img/ater.jpeg'),
                duration: '3:15'
        
        
            },{
                name: 'Yummy',
                subtitle: 'Justin Bieber',
                img: require('../img/yummy.jpg'),
                duration: '3:15'
        
        
            },
        ]
        return (
            <View style={styles.container}>
            <View style={{marginLeft: 20}}>
            <FlatList
                data={songs}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=>this.separator()}
                renderItem={({item, index})=>{
                    return (
                       <TouchableWithoutFeedback style={styles.songContainer} onPress={()=>this.playSong(item)}>
                       <View style={{flexDirection: 'row'}}>
                       <Image source={item.img}
                       style={styles.img}/>
                       
                       <View style={styles.datacontainer}>
                       <Text style={styles.title}>{item.name}</Text>
                       <Text style={styles.subtitle}>{item.subtitle}</Text>
                       <Text style={styles.subtitle}>{item.duration}</Text>
                       </View>
                       <View style={styles.iconcontainer}>
                       <Icon name="download" color="#ff5b77" size={40}/>
                       <Icon name="dots-vertical" color="#ff5b77" size={40}/>
                       </View>
                       </View>
                       </TouchableWithoutFeedback>
                    )
                }}
                
                />
            
            </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width
    }, 
    songContainer: {
        width: width,
        height: 70,
       
       
       
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    datacontainer: {
        paddingLeft:10,
        width: width-200,
        backgroundColor: '#000',

    }, title: {
        fontSize: 20,
        color: '#fff'
    },
    subtitle: {
        fontSize: 20,
        color: 'grey'
    },
    iconcontainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }
})
