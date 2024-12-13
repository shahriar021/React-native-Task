import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {useFormDataState} from '../../hooks/useFormState';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTheme } from '../../hooks/useThemeContext';

const FormPage = () => {
   const {theme, toggleTheme} = useTheme();
  
    const isDarkMode = theme === 'dark'; 
  const navigation = useNavigation();
  const {formData, updatedData} = useFormDataState();

  const handlePickImage = () => {
    launchImageLibrary({mediaType: 'photo', quality: 0.5}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        updatedData({imageUri: response.assets[0].uri});
      }
    });
  };

  const Save = () => {
    Alert.alert('Data saved successfully!', '', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home'),
      },
    ]);
  };
  const styles = createStyles(isDarkMode);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Form Screen</Text>
        {formData.imageUri ? (
          <Image source={{uri: formData.imageUri}} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>No Image Selected</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.pickImageButton}
          onPress={handlePickImage}>
          <Text style={styles.pickImageButtonText}>Pick an Image</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter your Name"
          placeholderTextColor="#aaa"
          onChangeText={name => updatedData({name})}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Email"
          placeholderTextColor="#aaa"
          onChangeText={email => updatedData({email})}
          style={styles.input}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.submitButton} onPress={Save}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const createStyles = isDarkMode =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
    },
    innerContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#343a40',
      marginBottom: 30,
      textAlign: 'center',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    imagePlaceholder: {
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: isDarkMode ? '#424242' : '#e9ecef',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    imagePlaceholderText: {
      color: isDarkMode ? '#bbb' : '#6c757d',
      fontSize: 14,
    },
    pickImageButton: {
      backgroundColor: isDarkMode ? '#1E88E5' : '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 20,
    },
    pickImageButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: isDarkMode ? '#1E1E1E' : '#fff',
      borderColor: isDarkMode ? '#666' : '#ced4da',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 20,
      paddingHorizontal: 15,
      fontSize: 16,
      color: isDarkMode ? '#ddd' : '#495057',
    },
    submitButton: {
      backgroundColor: isDarkMode ? '#2E7D32' : '#28a745',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default FormPage;
