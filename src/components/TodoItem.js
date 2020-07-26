import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';


const TodoItem = props => {
    const onLongPress = todo => {
        const prompt = `"${todo.body}"`;
        Alert.alert(
            'Delete your todo?',
            prompt,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
            ],
            { cancelable: true }
        );
    };

    const statusStyle = {
        backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
    };
    return (
        <TouchableOpacity
            key={props.todo.body}
            style={[styles.todoItem, statusStyle]}
            onLongPress={() => onLongPress(props.todo)}
            onPress={() => props.onToggleTodo(props.todo.id)}
        >
            <Text style={styles.todoText}>
                {props.idx + 1}: {props.todo.body}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        margin: 5,
        padding: 10,
        width: '95%',
        minHeight: 20,
        borderRadius: 5
    },
    todoText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        flexShrink: 2
    }
})

export default TodoItem;