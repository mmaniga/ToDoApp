import React from "react";
import {Text,View,StyleSheet} from "react-native";
import {useSelector} from "react-redux";



const styles = StyleSheet.create({
    container: {
        margin:12,
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
    },
    todoText:{
        margin:4,
    }
});
const LogWriter = () => {
    const todoy = useSelector((state) => state.todos.userState);

    if (todoy.length %10 ==0) {
        console.log("Writing all Log to Server...");
        todoy.map((todo, index) => (
            console.log({index})))
    }
}
export function TodoList() {
    const todos = useSelector((state) => state.todos.userState);

    LogWriter();
    if (!todos.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Start creating a new todo</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            {todos.map((todo, index) => (
                <Text style={styles.todoText} key={todo.id}>
                    {`${index + 1}. ${todo.text}`}
                </Text>
            ))}
        </View>
    );
}
