import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Modal, Text, TouchableOpacity, } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import OptimizedGoalList from './components/OptimizedGoalList';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ImageBackground source={require('./assets/app_bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.appContainer}>
        <TouchableOpacity onPress={openModal} style={styles.modalLink}>
          <FontAwesomeIcon name="user" size={50} color="white" />
        </TouchableOpacity>
        <GoalInput onAddGoal={addGoalHandler} />
        <GoalList goals={courseGoals} />
        {/* Uncomment the next line to use OptimizedGoalList */}
        {/* <OptimizedGoalList goals={courseGoals} />*/} 
        <Modal 
          animationType="slide" 
          visible={modalOpen} 
          onRequestClose={closeModal}
        >

          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Welcome! This is your App Goal List Application.</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  appContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  addButton: {
    backgroundColor: '#CBBAB0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  closeButton: {
    backgroundColor: '#CBBAB0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  modalLink: {
    marginTop: 50,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
});

