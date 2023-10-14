// OptimizedGoalList.js
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import GoalItem from './GoalItem'; 

const OptimizedGoalList = ({ goals }) => {
  return (
    <FlatList
      data={goals}
      renderItem={({ item }) => <GoalItem text={item.text} />}
      keyExtractor={(item, index) => index.toString()}
      style={styles4.goalListContainer}
    />
  );
};

const styles4 = StyleSheet.create({
    goalListContainer: {
        flex: 3,
    }
});

export default OptimizedGoalList;
