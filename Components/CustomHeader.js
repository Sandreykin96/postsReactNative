import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const CustomHeader = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>{props.header}</Text>
      <View style={styles.person}>
        <Text style={styles.email}>{props.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 14,
    flex: 1,
    color: 'white',
  },
  person: {
    flex: 1,
  },
  email: {
    fontSize: 14,
    textAlign: 'right',
    color: 'white',
  },
});

export default CustomHeader;
