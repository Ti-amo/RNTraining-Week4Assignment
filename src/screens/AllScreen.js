import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar,
    Platform,
    Keyboard,
    ScrollView,
    ImageBackground
} from 'react-native';
import { TODOS } from '../../data'
import TodoItem from '../components/TodoItem'

export default function AllScreen({ navigation }) {
    const [todoList, setTodoList] = useState(TODOS)
    const [todoBody, setTodoBody] = useState('')

    const onToggleTodo = id => {
        const todo = todoList.find(todo => todo.id === id);
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';
        const foundIndex = todoList.findIndex(todo => todo.id === id);
        todoList[foundIndex] = todo;
        const newTodoList = [...todoList];
        setTodoList(newTodoList)

        setTimeout(() => {
            navigation.navigate('SingleTodo', {
                updatedTodo: todo
            });
        }, 1000);
    };

    const onDeleteTodo = id => {
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    };

    const onSubmitTodo = () => {
        Keyboard.dismiss()

        const newTodo = {
            body: todoBody,
            status: 'Active',
            id: todoList.length + 1
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        setTodoBody('');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={styles.container} source={{ uri: 'https://mondrian.mashable.com/wp-content%252Fgallery%252Fiphone-6-wallpaper%252Ftumblr_nglh5niidy1tqjbpqo2_1280.jpg%252Ffit-in__850x850.jpg?signature=lE0RDwtRFUlnumotMRH6JRutz-g=&source=https%3A%2F%2Fmashable.com' }}>
                <KeyboardAvoidingView
                    enabled
                    behavior='position'
                    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}

                >
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ marginTop: '10%' }}>
                            {todoList.map((todo, idx) => {
                                return (
                                    <TodoItem
                                        idx={idx}
                                        todo={todo}
                                        key={todo.body}
                                        onToggleTodo={onToggleTodo}
                                        onDeleteTodo={onDeleteTodo}
                                    />
                                );
                            })}

                            <View style={styles.inputContainer}>
                                <TextInput
                                    value={todoBody}
                                    style={styles.todoInput}
                                    onChangeText={text => setTodoBody(text)}
                                />
                                <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

AllScreen.navigationOptions = {
    title: 'All Todos'
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    todoItem: {
        margin: 5,
        padding: 10,
        minHeight: 50,
        width: '95%',
        color: 'white',
        borderRadius: 5,
        flexWrap: 'wrap'
    },
    todoText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    todoInput: {
        width: '95%',
        minHeight: 30,
        color: 'white',
        borderWidth: 1,
        marginTop: '20%',
        marginBottom: '5%',
        borderColor: 'grey',
        fontWeight: 'bold'
    },
    inputContainer: {
        flex: 1,
        width: '90%',
        marginTop: 20,
        marginBottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    },
    button: {
        height: 50,
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    scrollView: {
        flex: 1,
        paddingTop: 1000
    }
});