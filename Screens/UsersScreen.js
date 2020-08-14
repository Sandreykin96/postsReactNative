import React from 'react';
import {List, ListItem, Text} from 'native-base';
import {ScrollView, View} from 'react-native';
import store from '../Redux/store';

export class UsersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state.data = store.getState().elements.list;
  }

  state = {
    data: [],
  };

  render() {
    const {
      navigation: {navigate},
    } = this.props;

    return (
      <ScrollView>
        <List>
          {this.state.data.map((item) => {
            return (
              <ListItem
                key={item.id}
                onPress={() =>
                  navigate('Element', {
                    itemTitle: item.title,
                    itemDesc: item.description,
                  })
                }>
                <Text>{item.title}</Text>
              </ListItem>
            );
          })}
        </List>
      </ScrollView>
    );
  }
}
