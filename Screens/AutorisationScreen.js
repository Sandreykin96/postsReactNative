import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {  Container, Button, Content, Form, Item, Input, Label} from 'native-base';
import {  passwordChangedCreator, loginChangedCreator} from '../Redux/loginReducer';
import store from '../Redux/store';
import {connect} from 'react-redux';

export const AutorisationScreen = ({navigation, email}) => {
  let onLoginChange = (text) => {
    store.dispatch(loginChangedCreator(text));
  };

  let onPasswordChange = (text) => {
    store.dispatch(passwordChangedCreator(text));
  };

  return (
    <Container>
      <Content>
        <Text style={styles.headText}>Войти</Text>

        <Text style={styles.simpleText}>
          Природа! Она совершенна и вечно творит новое. Она неиссякаемый
          источник всего живого и реального. Все в ней, она полнота бытия. Она
          всесильна и могуча, постоянно сокрушает и непрерывно создает.
        </Text>

        <Form>
          <Item floatingLabel>
            <Label>Логин</Label>
            <Input onChangeText={onLoginChange} value = {email} />
          </Item>
          <Item floatingLabel last>
            <Label onChangeText={onPasswordChange}>Пароль</Label>
            <Input />
          </Item>
        </Form>

        <Button
          style={styles.button}
          block
          danger
          onPress={() => navigation.navigate('Users')}>
          <Text style={styles.buttonText}>Войти</Text>
        </Button>
      </Content>
    </Container>
  );
};

export const LoginContainer = connect((state) => ({
  email: state.loginPage.email,
}))(AutorisationScreen);

const styles = StyleSheet.create({
  headText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    color: '#CF3737',
    fontSize: 45,
    paddingVertical: 50,
  },
  simpleText: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 0,
    paddingHorizontal: 3,
    color: '#333333',
  },
  button: {
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
});
