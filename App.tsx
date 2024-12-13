import {NavigationContainer, StackActions} from '@react-navigation/native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import TaskPage from './screens/task/TaskPage';

import {FormStateProvider} from './hooks/useFormState';
import TaskPageCreate from './screens/task/TaskPageCreate';
import FormPage from './screens/form/FormPage';
import PostDetailPage from './screens/pagination/PostDetailPage';
import HomePage from './screens/home/HomePage';
import PaginationPage from './screens/pagination/PaginationPage';
import { ThemeProvider } from './hooks/useThemeContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <FormStateProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: true, headerTitleAlign: 'center'}}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="PaginationPage" component={PaginationPage} />
            <Stack.Screen
              name="TaskPage"
              component={TaskPage}
              options={({navigation}) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('TaskPageCreate')}>
                    <Text style={styles.addTask}>Add Task</Text>
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen name="FormPage" component={FormPage} />
            <Stack.Screen name="PostDetailPage" component={PostDetailPage} />
            <Stack.Screen name="TaskPageCreate" component={TaskPageCreate} />
          </Stack.Navigator>
        </NavigationContainer>
      </FormStateProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  addTask: {
    fontWeight: 'bold',
    marginRight:5
  },
});

export default App;
