import * as React from 'react';
import{Text, View, Image, StyleSheet, Touch, FlatList} from 'react-native';

export default function Games(){
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Filmes
        </Text>
        <FlatList
          data={arrayJogo}
          renderItem={({ item }) => (
            <View >
              <Text>
                <Text style={styles.subTitulo}>Jogo: </Text> {item.Jogo}
                {'\n'}
                <Text style={styles.subTitulo}>Lançamento: </Text> {item.lancamento}
                {'\n'}
                <Text style={styles.subTitulo}>Console: </Text> {item.Console}
                {'\n'}
              </Text>
              <View style={styles.tituloimg}><Image style={styles.img} source={item.capa} /></View>
             
            </View>
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    color: '#ff5a73',
    fontFamily: 'Lato_400Regular',
    marginTop: 10,
    marginBottom:20,
    textAlign:'center'
  },
  img: {
    borderBottomRightRadius: 40,
    borderRadius:40,
    width: 320,
    height: 320,
    marginBottom:40
  },
  subTitulo: {
    marginTop:20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tituloimg:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

const arrayJogo = [
  {
    Jogo: 'Sonic',
    lancamento: '1991',
    Console: 'Master System, Mega Drive',
    capa: require('../assets/sonic.jpg'),
  },
  {
    Jogo: 'Mario',
    lancamento: '1981',
    Console: 'Super Nintendo, Nintendinho',
    capa: require('../assets/mario.jpg'),
  },
  {
     Jogo: 'Donkey Kong',
    lancamento: '1981',
    Plataforma: 'Super Nintendo, Nintendinho',
    capa: require('../assets/DK.png'),
  },
  
];