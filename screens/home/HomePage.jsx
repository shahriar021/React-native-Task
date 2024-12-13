// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TouchableOpacity,
//   Modal,
//   Pressable,
//   Image,
// } from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {useNavigation} from '@react-navigation/native';
// import {FormStateProvider, useFormDataState} from '../hooks/useFormState';

// const HomePage = () => {
//   const navigation = useNavigation();
//   const isDarkMode = useColorScheme() === 'dark';
//   const {formData} = useFormDataState();
//   const [modalVisible, setModalVisible] = useState(false);

//   console.log(
//     formData.name,
//     formData.email,
//     formData.imageUri,
//     'name in home page',
//   );

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   console.log(isDarkMode, 'THEME');

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <Text style={styles.title}>Home</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('TaskPage')}>
//         <Text style={styles.buttonText}>Go to Task Page</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('PaginationPage')}>
//         <Text style={styles.buttonText}>Go to Pagination Page</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('FormPage')}>
//         <Text style={styles.buttonText}>Go to Form Page</Text>
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             {formData &&
//             formData.name &&
//             formData.email &&
//             formData.imageUri ? (
//               <>
//                 <Text style={styles.modalTextm}>{formData.name}</Text>
//                 <Text style={styles.modalTextm}>{formData.email}</Text>
//                 <Image source={{uri: formData.imageUri}} style={styles.image} />
//               </>
//             ) : (
//               <Text>No data</Text>
//             )}

//             <Pressable
//               style={[styles.buttonm, styles.buttonClosem]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStylem}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.buttonText}>show data</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   buttonm: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpenm: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClosem: {
//     backgroundColor: '#2196F3',
//   },
//   textStylem: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalTextm: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });

// export default HomePage;










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
import { useFormDataState } from '../../hooks/useFormState';


const HomePage = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const {formData} = useFormDataState();
  const [modalVisible, setModalVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.title}>Home</Text>

      {/* Navigation Buttons */}
      <View style={styles.navButtonsContainer}>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => navigation.navigate('TaskPage')}>
          <Text style={styles.pageButtonText}>Task Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => navigation.navigate('PaginationPage')}>
          <Text style={styles.pageButtonText}>Pagination Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => navigation.navigate('FormPage')}>
          <Text style={styles.pageButtonText}>Form Page</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Displaying Data */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {formData?.name && formData?.email && formData?.imageUri ? (
              <>
                <Text style={styles.modalText}>{`Name: ${formData.name}`}</Text>
                <Text
                  style={styles.modalText}>{`Email: ${formData.email}`}</Text>
                <Image
                  source={{uri: formData.imageUri}}
                  style={styles.modalImage}
                />
              </>
            ) : (
              <Text style={styles.modalText}>No data available</Text>
            )}
            <Pressable
              style={[styles.modalButton, styles.modalCloseButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalButtonText}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Show Data Button */}
      <TouchableOpacity
        style={styles.showDataButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.showDataButtonText}>Show Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  navButtonsContainer: {
    width: '100%',
    marginBottom: 40,
  },
  pageButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  pageButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  showDataButton: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  showDataButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
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
    color: '#333',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  modalButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
  },
  modalCloseButton: {
    backgroundColor: '#DC3545',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomePage;

