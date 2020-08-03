import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
const {width, height}=Dimensions.get('window')
export default class BannerComponents extends Component {
   
    constructor(props) {
        super(props);
      }
    render() {
        console.disableYellowBox=true
        let banners= [
            {
                title: 'Justin Bieber',
                subtitle: 'Changes',
                img: require('../img/banner2.jpg')
        
        
            }, {
                title: 'Ariana Grande',
                subtitle: 'New Album',
                img: require('../img/banner4.jpg')
        
        
            }, {
                title: 'Partynextdoor',
                subtitle: 'New Album',
                img: require('../img/banner1.jpg')
        
        
            },
        ]
        return (
            <View style={styles.container}>
            <FlatList 
            data={banners}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>{
                return(
            <View style={styles.banner} key={index}>
            <ImageBackground
            source={item.img}
            style={styles.imgBanner}
            key={index}
            >
            <TouchableOpacity style={styles.btn}>
            <Icon name="play" size={20} color="#000">
          <Text style={styles.text}>Play Now</Text>  
            </Icon>
            
            </TouchableOpacity>
            </ImageBackground>
            
            </View>
                )
            }}
            />
          </View>
        )
    }
}

    


const styles = StyleSheet.create({
container: {
    //flex:1,
    height: 250,
    backgroundColor: '#fff'
}, title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40,
    margin:10,
    marginLeft:15
},
banner: {
    height: 250,
    width: width

},
imgBanner: {
    height: 250,
    width:'100%'
},
btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    flexDirection: 'row'
}, text: {
    marginLeft: 5
}
})
