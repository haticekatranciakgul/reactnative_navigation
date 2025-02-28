import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, SafeAreaView, Button } from 'react-native';

const Stack = createStackNavigator();


function DetailsScreen() {
  return (
    <SafeAreaView>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
}
export default DetailsScreen;