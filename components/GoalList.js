// GoalList.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import GoalItem from './GoalItem'; 

const GoalList = ({ goals }) => {
  return (
    <ScrollView style={styles3.goalListContainer}>
      {goals.map((goal, index) => (
        <GoalItem key={index} text={goal.text} />
      ))}
    </ScrollView>
  );
};

const styles3 = StyleSheet.create({
  goalListContainer: {
    flex: 3,
  }
});

export default GoalList;
