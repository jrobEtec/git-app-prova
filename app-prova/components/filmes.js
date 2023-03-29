import * as React from 'react';
import{Text, View, Image, StyleSheet, Touch, FlatList} from 'react-native';

export default function Filmes(){
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Filmes
        </Text>
        <FlatList
          data={arrayFilmes}
          renderItem={({ item }) => (
            <View >
              <Text>
                <Text style={styles.subTitulo}>Filme: </Text> {item.Filme}
                {'\n'}
                <Text style={styles.subTitulo}>Lançamento: </Text> {item.lancamento}
                {'\n'}
                <Text style={styles.subTitulo}>Diretor: </Text> {item.Diretor}
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

const arrayFilmes = [
  {
    Filme: 'Sherlock Holmes',
    lancamento: '2009',
    Diretor: 'Guy Ritchie',
    capa: require('../assets/sherlock_holmes.jpg'),
  },
  {
      Filme: 'It a coisa',
    lancamento: '2017',
    Diretor: 'Andy Muschietti',
    capa: require('../assets/it_a_coisa.jpg'),
  },
  {
     Filme: 'Pinocchio',
    lancamento: '1940',
    Diretor: 'Hamilton Luske',
    capa: require('../assets/pinochio.jpg'),
  },
  
];