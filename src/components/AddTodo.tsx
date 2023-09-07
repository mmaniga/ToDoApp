import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo,increment } from "./todoSlice";

export const AddTodo = () => {
    const [text, setText] = useState("Add todo here");
    const dispatch = useDispatch();

    function handleSubmit(){
        dispatch(addTodo(text));
        //dispatch(increment(text));
        setText("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                onChangeText={setText}
                style={styles.input} />
            <Button title="Add" onPress={handleSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 2
    },
    input: {
        backgroundColor: 'ghostwhite',
        marginBottom: 8,
        margin:12,
        padding: 8,
        height: 40,
        borderWidth:1,
    },
});