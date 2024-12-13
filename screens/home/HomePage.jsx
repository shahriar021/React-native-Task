

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {useFormDataState} from '../../hooks/useFormState';
import { useTheme } from '../../hooks/useThemeContext';

const HomePage = () => {

  const {theme, toggleTheme} = useTheme(); // Get the current theme and toggle function

  const isDarkMode = theme === 'dark'; 


  const navigation = useNavigation();
  
  const {formData} = useFormDataState();
  const [modalVisible, setModalVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  };

  const dynamicStyles = StyleSheet.create({
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: isDarkMode ? '#FFFFFF' : '#333',
    },
    pageButton: {
      backgroundColor: isDarkMode ? '#1E90FF' : '#007BFF',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginBottom: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: isDarkMode ? 0.4 : 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    pageButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    showDataButton: {
      backgroundColor: isDarkMode ? '#32CD32' : '#28A745',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: isDarkMode ? 0.4 : 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    showDataButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    modalView: {
      width: '90%',
      backgroundColor: isDarkMode ? '#333333' : '#FFFFFF',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 10,
      textAlign: 'center',
      color: isDarkMode ? '#FFFFFF' : '#333',
    },
    modalButton: {
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      elevation: 2,
    },
    modalCloseButton: {
      backgroundColor: isDarkMode ? '#FF6347' : '#DC3545',
    },
    modalButtonText: {
      color: '#FFFFFF',
      fontWeight: '600',
      textAlign: 'center',
    },
    themeButton: {
      position: 'absolute', // Absolute positioning
      top: 10, // Distance from the top
      right: 10, // Distance from the right
      backgroundColor: isDarkMode ? '#1E90FF' : '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    themeButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
    },
  });
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TouchableOpacity style={dynamicStyles.themeButton} onPress={toggleTheme}>
        <Text style={dynamicStyles.themeButtonText}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>
      <Text style={dynamicStyles.title}>Home</Text>

      <View style={styles.navButtonsContainer}>
        <TouchableOpacity
          style={dynamicStyles.pageButton}
          onPress={() => navigation.navigate('TaskPage')}>
          <Text style={dynamicStyles.pageButtonText}>Task Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={dynamicStyles.pageButton}
          onPress={() => navigation.navigate('PaginationPage')}>
          <Text style={dynamicStyles.pageButtonText}>Pagination Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={dynamicStyles.pageButton}
          onPress={() => navigation.navigate('FormPage')}>
          <Text style={dynamicStyles.pageButtonText}>Form Page</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={dynamicStyles.modalView}>
            {formData?.name && formData?.email && formData?.imageUri ? (
              <>
                <Text
                  style={
                    dynamicStyles.modalText
                  }>{`Name: ${formData.name}`}</Text>
                <Text
                  style={
                    dynamicStyles.modalText
                  }>{`Email: ${formData.email}`}</Text>
                <Image
                  source={{uri: formData.imageUri}}
                  style={styles.modalImage}
                />
              </>
            ) : (
              <Text style={dynamicStyles.modalText}>No data available</Text>
            )}
            <Pressable
              style={[
                dynamicStyles.modalButton,
                dynamicStyles.modalCloseButton,
              ]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={dynamicStyles.modalButtonText}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={dynamicStyles.showDataButton}
        onPress={() => setModalVisible(true)}>
        <Text style={dynamicStyles.showDataButtonText}>Show Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  navButtonsContainer: {
    width: '100%',
    marginBottom: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
});

export default HomePage;
