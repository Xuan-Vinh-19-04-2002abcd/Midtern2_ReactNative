import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
export default function Profile() {
  return (
    <View style = {styles.profileContainer}>
      <Text style = {styles.profileText}>My Profile</Text>
      <View style = {styles.profileView}>
            <View style = {styles.profileViewImage}>
                 <View style = {styles.profileImage}>
                 </View>
            </View>
            <View>
              <Text style = {styles.profileNameText}>Hi, Ben Cline</Text>
              <Text>Welcome to Medteach</Text>
            </View>
      </View>
      <View style = {styles.profileDetails}>
              <View style = {styles.profileDetailsLeft}>
                  <View style = {styles.profileIcon}>

                  </View>
                  <Text style = {styles.profileDetailText}>Private Account</Text>
              </View>
              <View style = {styles.profileDetailsRight}>
                    <Text>></Text>
              </View>
      </View>



      <View style = {styles.profileLine}></View>
      <View style = {styles.profileDetails}>
              <View style = {styles.profileDetailsLeft}>
                  <View style = {styles.profileIcon}>

                  </View>
                  <Text style = {styles.profileDetailText}>My Accounts</Text>
              </View>
              <View style = {styles.profileDetailsRight}>
                    <Text>></Text>
              </View>
      </View>
      <View style = {styles.profileLine}></View>


      <View style = {styles.profileDetails}>
              <View style = {styles.profileDetailsLeft}>
                  <View style = {styles.profileIcon}>

                  </View>
                  <Text style = {styles.profileDetailText}>My Orders</Text>
              </View>
              <View style = {styles.profileDetailsRight}>
                    <Text>></Text>
              </View>
      </View>
      <View style = {styles.profileLine}></View>


      <View style = {styles.profileDetails}>
              <View style = {styles.profileDetailsLeft}>
                  <View style = {styles.profileIcon}>

                  </View>
                  <Text style = {styles.profileDetailText}>Biling</Text>
              </View>
              <View style = {styles.profileDetailsRight}>
                    <Text>></Text>
              </View>
      </View>
      <View style = {styles.profileLine}></View>



      <View style = {styles.profileDetails}>
              <View style = {styles.profileDetailsLeft}>
                  <View style = {styles.profileIcon}>

                  </View>
                  <Text style = {styles.profileDetailText}>Fag</Text>
              </View>
              <View style = {styles.profileDetailsRight}>
                    <Text>></Text>
              </View>
      </View>
      <View style = {styles.profileLine}></View>



    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer:{
    flex:1,
    marginVertical:10,
    paddingHorizontal: 20,
  },
  profileView:{
    flexDirection:'row',
    width:  Dimensions.get('window').width/1.15-40,
    justifyContent:"space-between",
    alignItems:'center',
    paddingTop:10
  },

  profileText:{
    fontSize:25
  },
  profileImage:{
    width:100,
    height:100,
    backgroundColor:'black',
    borderRadius:100
  }
  ,
  profileNameText:{
    fontSize:22,
    fontWeight:'500',
    color:'black'
  },
  profileIcon:{
    width:20,
    height:20,
    backgroundColor:'pink'
  },
  profileDetails:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:30
  },
  profileDetailsLeft:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:170
  },
  profileLine:{
      height:2,
      width:'80%',
      backgroundColor:"#E9E3C8",
      marginTop:10,
      alignSelf:'flex-end'
  }
})