import * as React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Livros from './livros';
import Games from './games';
import Home from './home';
import Filmes from './filmes';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
  <NavigationContainer> 
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Livros" component={Livros} />
    <Stack.Screen name="Games" component={Games} />
    <Stack.Screen name="Filmes" component={Filmes} />
    </Stack.Navigator>
</NavigationContainer>
)
}