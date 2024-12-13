import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const TaskPageCreate = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  
  const saveTasks = async updatedTasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now().toString(),
        text: taskText,
        completed: false,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setTaskText('');
      navigation.navigate('TaskPage');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.heading}>Create New Task</Text>
      <TextInput
        value={taskText}
        onChangeText={setTaskText}
        style={styles.input}
        placeholder="Enter your task"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#495057',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskPageCreate;

