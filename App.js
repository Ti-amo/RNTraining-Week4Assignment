import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons'
import AllScreen from './src/screens/AllScreen'
import CompleteScreen from './src/screens/CompleteScreen'
import ActiveScreen from './src/screens/ActiveScreen'
import SingleTodoScreen from './src/screens/SingleTodoScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All" component={AllScreen} />
      <Stack.Screen name="SingleTodo" component={SingleTodoScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'All') {
              iconName = 'ios-add-circle-outline'
            } else if (route.name === 'Complete') {
              iconName = 'md-done-all'
            } else if (route.name === 'Active') {
              iconName = 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        initialRouteName= 'All'
      >
        <Tab.Screen name="Complete" component={CompleteScreen} />
        <Tab.Screen name="All" component={MyStack} />
        <Tab.Screen name="Active" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}