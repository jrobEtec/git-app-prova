import * as React from 'react';
import{Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function Home(props){
  return(
<View style={styles.container}>
  <Text style={styles.head}> Recomendações de lazer </Text>

 <ScrollView> 
<Image style={styles.img} source={require('../assets/jogos_livro.png')} />

<TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Games')}}>
<Text>Games</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Livros')}}>
<Text>Livros</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Filmes')}}>
<Text>Filmes</Text>
</TouchableOpacity>


 </ScrollView>
</View>
  );}

  const styles = StyleSheet.create({
      container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#FFFFFF',
      alignItems:'center'
    },
    button:{
      margin: 10,
      padding:10,
      borderRadius: 18,
      backgroundColor:'#66CDAA',
      color:'#F0F8FF',
      fontSize: 30,
      alignItems:'center',
      fontWeight:'bold'
    },
    img:{
      width:350,
      height:200,
      margin:10,
      padding:15
    },
    head:{
      fontSize:25,
      fontWeight:'bold',
      fontStyle:'italic'
    }
  })