import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

const PostDetailPage = ({route}) => {
  const {post} = route.params; 

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#edf2f7', 
    padding: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d3748', 
    marginBottom: 16,
    textAlign: 'center',
  },
  body: {
    fontSize: 18,
    color: '#4a5568', 
    lineHeight: 30,
    textAlign: 'justify',
  },
});

export default PostDetailPage;
