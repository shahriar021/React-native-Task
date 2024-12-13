import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../../hooks/useThemeContext';

const TaskPage = () => {
  const {theme, toggleTheme} = useTheme(); 

  const isDarkMode = theme === 'dark';
  const [tasks, setTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      const storedDeletedTasks = await AsyncStorage.getItem('deletedTasks');
      setTasks(storedTasks ? JSON.parse(storedTasks) : []);
      setDeletedTasks(storedDeletedTasks ? JSON.parse(storedDeletedTasks) : []);
    };
    loadTasks();
  }, []);

  const saveTasks = async () => {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    await AsyncStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    const taskToDelete = tasks.find(task => task.id === id);
    const updatedDeletedTasks = [...deletedTasks, taskToDelete];
    setTasks(updatedTasks);
    setDeletedTasks(updatedDeletedTasks);
    saveTasks();
  };

  const restoreTask = id => {
    const updatedDeletedTasks = deletedTasks.filter(task => task.id !== id);
    const taskToRestore = deletedTasks.find(task => task.id === id);
    const updatedTasks = [...tasks, taskToRestore];
    setTasks(updatedTasks);
    setDeletedTasks(updatedDeletedTasks);
    saveTasks();
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
    saveTasks();
  };

  const renderTask = ({item}, isDeleted = false) => (
    <View style={[styles.taskItem, isDarkMode && styles.taskItemDark]}>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item?.text}
      </Text>
      {!isDeleted && (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[
              styles.button,
              item.completed ? styles.completedButton : styles.completeButton,
            ]}
            onPress={() => completeTask(item.id)}>
            <Text style={styles.buttonText}>
              {item.completed ? 'Completed' : 'Complete'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={() => deleteTask(item.id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      {isDeleted && (
        <TouchableOpacity
          style={[styles.button, styles.restoreButton]}
          onPress={() => restoreTask(item.id)}>
          <Text style={styles.buttonText}>Restore</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text
        style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
        Active Tasks
      </Text>
      <FlatList
        data={tasks}
        renderItem={item => renderTask(item)}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No active tasks</Text>
        }
      />

      <Text
        style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
        Deleted Tasks
      </Text>
      <FlatList
        data={deletedTasks}
        renderItem={item => renderTask(item, true)}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No deleted tasks</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  taskItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
  },
  completedButton: {
    backgroundColor: '#8BC34A',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  restoreButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#aaa',
    marginTop: 20,
  },
  taskItemDark: {
    backgroundColor: '#444',
  },
  containerDark: {
    backgroundColor: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionTitleDark: {
    color: '#fff',
  },
});

export default TaskPage;
