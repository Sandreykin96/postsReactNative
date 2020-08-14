import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {UsersScreen} from  './Screens/UsersScreen';
import {ElementScreen} from  './Screens/ElementScreen';
import {LoginContainer} from  './Screens/AutorisationScreen';
import HeaderContainer from './Components/CustomHeader';
import {Provider, connect} from 'react-redux';
import store from './Redux/store';

const Stack = createStackNavigator();

export const App = (props) => {
  let email = props.email;

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Autorisation"
            component={LoginContainer}
            options={{
              headerTitle: (props) => (
                <HeaderContainer header={'Вход в личный кабинет'} />
              ),
              headerStyle: {backgroundColor: '#CF3737'},
            }}
          />
          <Stack.Screen
            name="Users"
            component={UsersScreen}
            options={{
              headerTitle: (props) => (
                <HeaderContainer header={'Список'} email = {email}/>
              ),
              headerStyle: {backgroundColor: '#CF3737'},
            }}
          />
          <Stack.Screen
            name="Element"
            component={ElementScreen}
            options={{
              headerTitle: (props) => (
                <HeaderContainer header={'График'} email = {email}/>
              ),
              headerStyle: {backgroundColor: '#CF3737'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const RootApp = (props) => {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

let mapStateToProps = (state) => {
  return {
    email : state.loginPage.email
  }
}

let mapDispatchToProps = () =>{
  return{

  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default RootApp;

