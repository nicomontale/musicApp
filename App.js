import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,
StatusBar } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './config/router';
import Player from './Screens/Player';
import CategoriesDetails from './Components/CategoriesDetails'
 class App extends Component {
constructor(props) {
  super(props);
}
  gotToTabs() {
   this.props.navigation.navigate("Tabs")
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
        <Text style={styles.title}> </Text>
        <Image
        source={require('./img/logo.png')}
        style={styles.logo}
        
        
        />
        <TouchableOpacity style={styles.btn} onPress={()=>this.gotToTabs()}>
        <Text style={styles.text}> Start Listening</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const Stack = createStackNavigator();

function Stacks() {
  return (
   <Stack.Navigator>
   <Stack.Screen
   name="App"
   component={App}
   options={{headerShown:false}}
   />

   <Stack.Screen
   
   name="Tabs"
   component={Tabs}
   options={{headerShown:false}}/>

   <Stack.Screen
   
   name="Player"
   component={Player}
   options={{headerShown:false}}/>
   <Stack.Screen
        name="Details"
        component={CategoriesDetails}
        options={{
          headerShown: false,
        }}
      />
   </Stack.Navigator>
  )
}

function MainScreen() {
  return(
    <NavigationContainer>
    <Stacks/>
    </NavigationContainer>
  )
} export default MainScreen;
 const styles= StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: '#000',
   justifyContent: 'center',
   alignContent: 'center',
   alignItems: 'center'
   },
   title: {
    fontSize: 32,
    color: '#000' ,
    fontWeight: 'bold',
    marginLeft: 34,
    marginBottom: 20
   },
   logo: {
     marginTop: -70,
     height: 350,
     width:'80%',
     justifyContent: 'center',
     alignContent: 'center',
     alignItems: 'center',
   },
   btn: {
     width: '70%',
     height: 50,
     borderRadius: 20,
     backgroundColor:'#ff5b77',
     justifyContent: 'center',
   alignContent: 'center',
   alignItems: 'center',
   elevation: 15
   },
   text: {
     color: '#fff',
     fontSize: 20

   }
 })
