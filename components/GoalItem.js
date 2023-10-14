import { View, Text, StyleSheet } from 'react-native'; 
import React, { useState } from 'react';

export default function GoalItem(props){
    return (
        <View style={styles1.goalItem}>
          <Text style={styles1.goalText}>{props.text}</Text>
        </View>
    )
};

const styles1 = StyleSheet.create({
    goalItem: {
        padding: 10,
        backgroundColor: '#CBBAB0',
        borderColor: '#383532',
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 10,
        marginRight: 10,
      },
    goalText: {
        color: '#333',
        fontSize: 16,
      }
});
