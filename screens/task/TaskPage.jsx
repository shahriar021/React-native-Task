// // import React, {useState, useEffect} from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   Button,
// //   FlatList,
// //   StyleSheet,
// //   Alert,
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const TaskManagementScreen = () => {
// //   const [taskText, setTaskText] = useState('');
// //   const [tasks, setTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);

// //   // Load tasks from AsyncStorage when the component mounts
// //   useEffect(() => {
// //     const loadTasks = async () => {
// //       const storedTasks = await AsyncStorage.getItem('tasks');
// //       const storedDeletedTasks = await AsyncStorage.getItem('deletedTasks');
// //       if (storedTasks) {
// //         setTasks(JSON.parse(storedTasks));
// //       }
// //       if (storedDeletedTasks) {
// //         setDeletedTasks(JSON.parse(storedDeletedTasks));
// //       }
// //     };
// //     loadTasks();
// //   }, []);

// //   // Save tasks to AsyncStorage
// //   const saveTasks = async () => {
// //     await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
// //     await AsyncStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
// //   };

// //   // Add a new task
// //   const addTask = () => {
// //     if (taskText.trim()) {
// //       const newTask = {
// //         id: Date.now().toString(),
// //         text: taskText,
// //         completed: false,
// //       };
// //       const updatedTasks = [...tasks, newTask];
// //       setTasks(updatedTasks);
// //       saveTasks();
// //       setTaskText('');
// //     }
// //   };

// //   // Delete a task (mark as deleted)
// //   const deleteTask = id => {
// //     const updatedTasks = tasks.filter(task => task.id !== id);
// //     const taskToDelete = tasks.find(task => task.id === id);
// //     const updatedDeletedTasks = [...deletedTasks, taskToDelete];
// //     setTasks(updatedTasks);
// //     setDeletedTasks(updatedDeletedTasks);
// //     saveTasks();
// //   };

// //   // Restore a deleted task
// //   const restoreTask = id => {
// //     const updatedDeletedTasks = deletedTasks.filter(task => task.id !== id);
// //     const taskToRestore = deletedTasks.find(task => task.id === id);
// //     const updatedTasks = [...tasks, taskToRestore];
// //     setTasks(updatedTasks);
// //     setDeletedTasks(updatedDeletedTasks);
// //     saveTasks();
// //   };

// //   // Mark task as completed
// //   const completeTask = id => {
// //     const updatedTasks = tasks.map(task =>
// //       task.id === id ? {...task, completed: !task.completed} : task,
// //     );
// //     setTasks(updatedTasks);
// //     saveTasks();
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Input for new task */}

// //       {/* Active tasks */}
// //       <Text style={styles.sectionTitle}>Active Tasks</Text>
// //       <FlatList
// //         data={tasks}
// //         renderItem={({item}) => (
// //           <View style={styles.taskItem}>
// //             <Text style={item.completed ? styles.completedTask : null}>
// //               {item.text}
// //             </Text>
// //             <Button title="Complete" onPress={() => completeTask(item.id)} />
// //             <Button title="Delete" onPress={() => deleteTask(item.id)} />
// //           </View>
// //         )}
// //         keyExtractor={item => item.id}
// //       />

// //       {/* Deleted tasks */}
// //       <Text style={styles.sectionTitle}>Deleted Tasks</Text>
// //       <FlatList
// //         data={deletedTasks}
// //         renderItem={({item}) => (
// //           <View style={styles.taskItem}>
// //             <Text style={item.completed ? styles.completedTask : null}>
// //               {item.text}
// //             </Text>
// //             <Button title="Restore" onPress={() => restoreTask(item.id)} />
// //           </View>
// //         )}
// //         keyExtractor={item => item.id}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },

// //   sectionTitle: {
// //     fontWeight: 'bold',
// //     marginTop: 20,
// //   },
// //   taskItem: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 8,
// //     marginVertical: 4,
// //     backgroundColor: '#f4f4f4',
// //   },
// //   completedTask: {
// //     textDecorationLine: 'line-through',
// //     color: 'gray',
// //   },
// // });

// // export default TaskManagementScreen;

// import React, {useState, useEffect} from 'react';
// import {View, Text, Button, FlatList, StyleSheet, Alert} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const TaskManagementScreen = () => {
//   const [tasks, setTasks] = useState([]);
//   const [deletedTasks, setDeletedTasks] = useState([]);

//   useEffect(() => {
//     const loadTasks = async () => {
//       const storedTasks = await AsyncStorage.getItem('tasks');
//       const storedDeletedTasks = await AsyncStorage.getItem('deletedTasks');
//       setTasks(storedTasks ? JSON.parse(storedTasks) : []); // Default to empty array
//       setDeletedTasks(storedDeletedTasks ? JSON.parse(storedDeletedTasks) : []); // Default to empty array
//     };
//     loadTasks();
//   }, []);

//   // Save tasks and deleted tasks to AsyncStorage
//   const saveTasks = async () => {
//     await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
//     await AsyncStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
//   };

//   const deleteTask = id => {
//     const updatedTasks = tasks.filter(task => task.id !== id);
//     const taskToDelete = tasks.find(task => task.id === id);
//     const updatedDeletedTasks = [...deletedTasks, taskToDelete];
//     setTasks(updatedTasks);
//     setDeletedTasks(updatedDeletedTasks);
//     saveTasks();
//   };

//   const restoreTask = id => {
//     const updatedDeletedTasks = deletedTasks.filter(task => task.id !== id);
//     const taskToRestore = deletedTasks.find(task => task.id === id);
//     const updatedTasks = [...tasks, taskToRestore];
//     setTasks(updatedTasks);
//     setDeletedTasks(updatedDeletedTasks);
//     saveTasks();
//   };

//   const completeTask = id => {
//     const updatedTasks = tasks.map(task =>
//       task.id === id ? {...task, completed: !task.completed} : task,
//     );
//     setTasks(updatedTasks);
//     saveTasks();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>Active Tasks</Text>
//       <FlatList
//         data={tasks}
//         renderItem={({item}) => (
//           <View style={styles.taskItem}>
//             <Text style={item.completed ? styles.completedTask : null}>
//               {item?.text}
//             </Text>
//             <Button
//               title={item.completed ? 'completed' : 'complete'}
//               onPress={() => completeTask(item.id)}
//             />
//             <Button title="Delete" onPress={() => deleteTask(item.id)} />
//           </View>
//         )}
//         keyExtractor={item => item.id}
//       />

//       <Text style={styles.sectionTitle}>Deleted Tasks</Text>
//       <FlatList
//         data={deletedTasks}
//         renderItem={({item}) => (
//           <View style={styles.taskItem}>
//             <Text style={item.completed ? styles.completedTask : null}>
//               {item.text}
//             </Text>
//             <Button title="Restore" onPress={() => restoreTask(item.id)} />
//           </View>
//         )}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   taskItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 8,
//     marginVertical: 4,
//     backgroundColor: '#f4f4f4',
//   },
//   completedTask: {
//     textDecorationLine: 'line-through',
//     textDecorationColor: 'red',
//     textDecorationStyle:"solid",
//     color: 'red',
//   },
// });

// export default TaskManagementScreen;

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

const TaskPage = () => {
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
    <View style={styles.taskItem}>
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
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Active Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={item => renderTask(item)}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No active tasks</Text>
        }
      />

      <Text style={styles.sectionTitle}>Deleted Tasks</Text>
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
});

export default TaskPage;
