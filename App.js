import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListaUsuario from "./src/Screens/ListaUsuario";
import FormularioUsuario from "./src/Screens/FormularioUsuario";
import { Button, Icon } from "react-native-elements";

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListaUsuario"
        screenOptions={opcoes}
      >
        <Stack.Screen
          name='ListaUsuario'
          component={ListaUsuario}
          options={({ navigation }) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('FormularioUsuario')}
                  type='clear'
                  icon={
                    <Icon name='add' size={25} color='white' />
                  }
                />
              )
            }
          }}
        />
        <Stack.Screen
          name='FormularioUsuario'
          component={FormularioUsuario}
          options={{
            title: 'Usuários Cadastrados',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const opcoes = {
  headerStyle: {
    backgroundColor: '#3e579e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
};
