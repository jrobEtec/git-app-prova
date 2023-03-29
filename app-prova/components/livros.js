import * as React from 'react';
import{Text, View, Image, StyleSheet, Touch, FlatList} from 'react-native';

export default function Livro(){
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Livros
        </Text>
        <FlatList
          data={arrayLivros}
          renderItem={({ item }) => (
            <View style={styles.viewBody}>
              <Text>
                <Text style={styles.nome}>{item.livro}</Text> 
                {'\n'} {'\n'}
                <View style={styles.tituloimg}><Image style={styles.img} source={item.capa} /></View>
                
                <Text style={styles.subTitulo}>Lançamento: </Text> {item.lancamento}
                {'\n'} {'\n'}
                <Text style={styles.subTitulo}>Autor: </Text> {item.autor}
                {'\n'} {'\n'}
              </Text>
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
    marginBottom:20
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
  viewBody:{
    marginBottom: 50,
    alignItems:'center'
  },
  nome:{
    fontSize:30,
    marginBottom: 10,
    textAlign: 'center',
  }
});

const arrayLivros = [
  {
    livro: 'It a coisa',
    lancamento: '1986',
    autor: 'Stephen King',
    capa: require('../assets/it_livro.jpg'),
  },
  {
    livro: 'Pinochio',
    lancamento: '1883',
    autor: ' Carlo Collodi',
    capa: require('../assets/pinochio_livro.webp'),
  },
  {
    livro: 'Sherlock',
    lancamento: '1887',
    autor: 'Arthur Conan Doyle',
    capa: require('../assets/Sherlock_livro.webp'),
  }
  
];