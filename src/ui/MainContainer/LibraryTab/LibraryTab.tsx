import React from 'react';
import { Text, View } from 'react-native';
// React navigation
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class LibraryTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>LibraryTab!</Text>
      </View>
    );
  }
}

export {
	LibraryTab
}
