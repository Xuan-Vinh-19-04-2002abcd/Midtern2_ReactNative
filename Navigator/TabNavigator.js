import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
//Screen
import Home from '../Components/Home/Home';
import Notification from '../Components/Notification/Notification';
import Profile from '../Components/Profile/Profile';
import Search from '../Components/Search/Search';
import Video from '../Components/Video/Video';
export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false
          ,
          tabBarIcon: ({ focus, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focus ? "home-sharp" : "home-outline"
            }
            else if (route.name === "Search") {
              iconName = focus ? "search-sharp" : "search"
            }
            else if (route.name === "Notification") {
              iconName = focus ? "search-sharp" : "search"
            }
            else if (route.name === "Video") {
              iconName = focus ? "search-sharp" : "search"
            }
            else if (route.name === "Profile") {
              iconName = focus ? "search-sharp" : "search"
            }
            return <Ionic name={iconName} size={size} colour={colour} />
          }
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Video" component={Video} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})






































// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionic from 'react-native-vector-icons/Ionicons';


// //Screen
// import Home from '../Components/Home/Home';
// import Notification from '../Components/Notification/Notification';
// import Profile from '../Components/Profile/Profile';
// import Search from '../Components/Search/Search';
// import Video from '../Components/Video/Video';


// export default function TabNavigator() {
//     const Tab = createBottomTabNavigator();

//   return (
//     <View>
//            <NavigationContainer>
//                <Tab.Navigator
//                screenOptions={({route})=> ({
//                 tabBarIcon: ({focus, size,colour}) =>{
//                   let iconName;
//                   if(route.name ==="Home") {
//                     iconName = focus ? "home" :"home-outline"
//                   }
//                   else if( route.name ==="Search"){
//                     iconName = focus ? "search-sharp" :"search"
//                   }
//                   return <Ionic name = {iconName} size = {size} colour = {colour}/>
//                 }
//                })}>
//                   <Tab.Screen name = "Home" component={Home}/>
//                   <Tab.Screen name = "Search" component={Search}/>
//                </Tab.Navigator>
//             </NavigationContainer>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})