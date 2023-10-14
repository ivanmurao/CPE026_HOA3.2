import { View, TextInput, Pressable, StyleSheet, Text, } from 'react-native'; 
import React, { useState } from 'react';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        if (enteredGoalText.trim() === "") {
            // Input is empty, do not add a goal
            return;
        }

        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return(
        <View style={styles2.inputContainer}>
          <TextInput style={styles2.inputText} placeholder=' Your Course Goal' 
          onChangeText={goalInputHandler} value={enteredGoalText}/>
          <Pressable
                style={({ pressed }) => [
                    styles2.addButton,{
                        backgroundColor: pressed ? '#B38B7D' : '#CBBAB0',},
                ]}
                onPressOut={addGoalHandler}
                unstable_pressDelay={3000}
                pressRetentionOffset={{ top: 10, left: 10, right: 10, bottom: 10 }}
            >
                <Text style={styles2.buttonText}>Add Goal</Text>
            </Pressable>
        </View>
    );
};

const styles2 = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 5,
        borderColor: '#9C949C',
    },
    inputText: {
        borderWidth: 2,
        borderColor: '#333',
        backgroundColor: '#CBBAB0',
        padding: 10,
        borderRadius: 20,
        marginRight: 12,
        fontSize: 16,
    },
    addButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#CBBAB0',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
});


