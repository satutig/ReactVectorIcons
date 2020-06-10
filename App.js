/**
 * Sample React Native App
 * https://reactnativecode.com/create-beautiful-social-icons-button/
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {SocialIcon} from 'react-native-elements';

export default class App extends React.Component{


render(){


    return (

<ScrollView>

    <View style={styles.MainContainer}>


    <Text style={{fontSize: 20 , margin:20 , textAlign: 'center'}}> React native vector icons </Text>

    <View style={{flex:1 , flexDirection: 'row', margin:20}}>

    <View style={{flexDirection:'column'}}>

    <SocialIcon
        type="facebook"
        onPress={()=>{
            alert('Facebook icon');
        } }>
        </SocialIcon>

    <Text style= {{textAlign: 'center'}}>

        Facebook

    </Text>

    </View>



    <View style={{flexDirection:'column'}}>


    <SocialIcon type='github'
    onPress={()=>{
        alert("Github Link")
    }

    }/>

    <Text style={{textAlign:'center', marginLeft:20}}>
     Github
    </Text>

    </View>



    <View style={{flexDirection:'column'}}>

        <SocialIcon
            type="instagram"
            onPress={()=>{
                alert('Instagram icon');
            } }>
            </SocialIcon>

        <Text style= {{textAlign: 'center'}}>

            Instagram

        </Text>

        </View>


    </View>




      <View style={{flex:1 , flexDirection: 'row', margin:20}}>

        <View style={{flexDirection:'column'}}>

        <SocialIcon
            type="linkedin"
            onPress={()=>{
                alert('LinkedIn icon');
            } }>
            </SocialIcon>

        <Text style= {{textAlign: 'center'}}>

            LinkedIn

        </Text>

        </View>



        <View style={{flexDirection:'column'}}>


        <SocialIcon type='twitter'
        onPress={()=>{
            alert("Twitter Link")
        }

        }/>

        <Text style={{textAlign:'center', marginLeft:20}}>
         Twitter
        </Text>

        </View>



        <View style={{flexDirection:'column'}}>

            <SocialIcon
                type="pinterest"
                onPress={()=>{
                    alert('Pin Interest icon');
                } }>
                </SocialIcon>

            <Text style= {{textAlign: 'center'}}>

                Pinterest

            </Text>

            </View>


        </View>


        <View style = {{width:'100%'}}>

                <SocialIcon title='Sign In'
                    button
                    type = 'facebook'
                    onPress={()=>{

                    alert("Button type ")
                    }
                    }
                />

                </View>

                 <View style = {{width:'100%'}}>

                                <SocialIcon title='Sign In'
                                    button
                                    type = 'google'
                                    onPress={()=>{

                                    alert("Button type ")
                                    }
                                    }
                                />

                                </View>

</View>


    </ScrollView>

    );

}

}

const styles = StyleSheet.create(
{

MainContainer:{
     justifyContent: 'center',
     alignItems : 'center',
     padding: 12,
}

}


);
