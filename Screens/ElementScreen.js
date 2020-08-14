import React from 'react';
import {Text, Button} from 'native-base';
import {StyleSheet, ScrollView, View} from 'react-native';
import {fireUserCreator} from '../Redux/loginReducer';
import {connect} from 'react-redux';
import store from '../Redux/store';

export const ElementScreen = ({route, navigation}) => {
  const {itemTitle} = route.params;
  const {itemDesc} = route.params;

  let onOutPress = () => {
    store.dispatch(fireUserCreator());
    navigation.navigate('Autorisation');
  };
  
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.textBold}>{itemTitle}</Text>
        <Text>{itemDesc}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <Button style={styles.button} full danger onPress={onOutPress}>
          <Text>Выйти из аккаунта</Text>
        </Button>
        <Button
          style={styles.button}
          full
          danger
          bordered
          onPress={() => navigation.goBack()}>
          <Text style={styles.redButtonText}>Назад</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignContent: 'stretch',
    flex: 1,
  },
  main: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 8,
  },
  footer: {
    flexDirection: 'row',
  },
  textBold: {
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  redButtonText: {
    color: 'red',
  },
});
