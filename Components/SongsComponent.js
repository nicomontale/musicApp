import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, FlatList, TouchableWithoutFeedback, Image, Modal, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Surface} from 'react-native-paper'
const {width, height}=Dimensions.get("window")

class SongData extends Component {
    constructor(props){
        super(props);
        this.state= {
            modalVisible: false
        }

    }
    playSong = item => {
        this.props.navigation.navigate('Player', {item: item});
      };

      openModal=()=> {
          this.setState({
              modalVisible: true
          })
      }
      closeModal=()=> {
          this.setState({
              modalVisible: false
          })
      }
render() {
    let item= this.props.item;
    
    return(
        <View>
        <Modal transparent={true} visible={this.state.modalVisible} animationType="slide" onRequestClose={()=> this.closeModal()}>
        <View style={{height: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
        <View style={styles.modal}>
        <TouchableOpacity style={styles.btnclose} onPress={()=> this.closeModal()} >
                    <Icon name="close" size={30} color="#fff" />
                  </TouchableOpacity>
        <Surface style={styles.surface}>
        <Image source={item.img} style={styles.modalimg}/>
        </Surface>
        
        <View style={styles.modalData}>
        <View style={styles.playerContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <TouchableOpacity style={styles.btn}>
                    <Icon name="play" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
        <View style={styles.option}>
        <Icon name="heart" size={30} color="#ff5b77"/>
        <Text style={styles.text}>Favorites</Text>
        
        
        </View>
        <View style={styles.option}>
        <Icon name="playlist-plus" size={30} color="#ff5b77"/>
        <Text style={styles.text}>Add to Playlist</Text>
        
        
        </View>
        <View style={styles.option}>
        <Icon name="album" size={30} color="#ff5b77"/>
        <Text style={styles.text}>Albums</Text>
        
        
        </View>
        <View style={styles.option}>
        <Icon name="download" size={30} color="#ff5b77"/>
        <Text style={styles.text}>Downloads</Text>
        
        
        </View>
        
        </View>
        
        </View>
        </View>
        
        </Modal>
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
        <TouchableOpacity onPress={()=> this.openModal()}>
        <Icon name="dots-vertical" color="#ff5b77" size={40}/>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableWithoutFeedback>
        </View>

    )
}
}
export default class SongsComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    separator=()=> {
    return <View style={{height: 15, backgroundColor: '#000'}}/>
}


    render() {
        let songs= [
            {
                name: 'Peep Hole',
                subtitle: 'DaBaby',
                img: require('../img/dababy.jpg'),
                duration: '3.15'
        
            },
            {
                name: 'Rain On Me',
                subtitle: 'Lady Gaga',
                img: require('../img/ladygaga.jpeg'),
                duration: '3.15'
        
        
            },  {
                name: 'U Got It bad',
                subtitle: 'Usher',
                img: require('../img/usher.jpg'),
                duration: '3.15'
        
            },
            {
                name: 'After Hours',
                subtitle: 'The Weeknd',
                img: require('../img/ater.jpeg'),
                duration: '3.15'
        
        
            },{
                name: 'Yummy',
                subtitle: 'Justin Bieber',
                img: require('../img/yummy.jpg'),
                duration: '3.15'
        
        
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
                     <SongData item={item} navigation={this.props.navigation}/>
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
    },
    modal: {
        height: '55%',
        width: '100%',
        backgroundColor:'#2E2E2E',
        position: 'absolute',
        bottom: 0,
        right: 0


    }, modalimg: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        position: 'absolute'
    }, 
    surface: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: 20,
        elevation: 20,
        top: -100,
        overflow: 'hidden'
    },
    modalData: {
marginTop: 60
    },
    option: {
        height: 50,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        marginLeft: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ff5b77'
    },
    text: {
        marginLeft: 15,
        color: '#ff5b77',
        fontSize: 20
    },playerContainer: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      btn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#ff5b77',
        elevation: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }, btnclose: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#ff5b77',
        elevation: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: -30,
        marginLeft: 350
      }
})
