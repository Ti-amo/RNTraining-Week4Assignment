import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleTodoScreen = ({ route, navigation }) => {
  const { id, status, body } = route.params.updatedTodo 
  console.log("DAA", route.params)
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {id}. {status}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

SingleTodoScreen.navigationOptions = {
  title: 'SingleTodoScreen'
};

export default SingleTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 50
  }
});