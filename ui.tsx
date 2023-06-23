import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';


function Fort (){
    const [flexDirection, setflexDirection] = useState('column');
    return(
        <ScrollView>
            <View style={blocks.container}>
                <Text style={blocks.texto}>Dusty Depot</Text>
                    <Image
                    style={blocks.img}
                    source={require('./img/dusty.jpg')}
                    />
                <Text style={blocks.texto}>Tilted Towers</Text>
                    <Image
                    style={blocks.img}
                    source={require('./img/tilted.jpg')}
                    />
                <Text style={blocks.texto}>Salty Springs</Text>
                    <Image
                    style={blocks.img}
                    source={require('./img/salty.jpg')}
                    />
                <Text style={blocks.texto}>Tomato Town</Text>
                    <Image
                    style={blocks.img}
                    source={require('./img/tomato.jpg')}
                    />
                <Text style={blocks.finalimg}></Text>
            </View>
        </ScrollView>
    )
}


const Ui =()=> {
  return (
    <View>
        <Fort/>
    </View>
  );
}

const blocks = StyleSheet.create({
   container:{
    justifyContent: 'center',
    alignItems: 'center',
   },
   texto:{
    textAlign: "center",
    fontSize:24,
    paddingTop:22
   },
   img:{
     width: 300, 
     height: 300 
    },

    finalimg:{
       
        width: 300, 
        height:200
    }

})

export default Ui


      
