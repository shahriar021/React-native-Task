

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useTheme } from '../../hooks/useThemeContext';

const PaginationPage = () => {
   const {theme, toggleTheme} = useTheme(); // Get the current theme and toggle function
  
    const isDarkMode = theme === 'dark'; 
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const POSTS_PER_PAGE = 10;

  const fetchPosts = async (pageNumber = 1) => {
    try {
      if (pageNumber === 1) {
        setLoading(true);
      } else {
        setIsMoreLoading(true);
      }

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${POSTS_PER_PAGE}`,
      );
      const data = await response.json();

      setPosts(prevPosts =>
        pageNumber === 1 ? data : [...prevPosts, ...data],
      );
      setHasMore(data.length > 0);
      setLoading(false);
      setIsMoreLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
      setIsMoreLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1); // Fetch the first page of posts
  }, []);

  const loadMorePosts = () => {
    if (!isMoreLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchPosts(nextPage);
    }
  };

  const renderPost = ({item}) => (
    <TouchableOpacity
      style={[
        styles.postContainer,
        {backgroundColor: isDarkMode ? '#333333' : '#ffffff'},
      ]}
      onPress={() => navigation.navigate('PostDetailPage', {post: item})}>
      <Text
        style={[styles.postTitle, {color: isDarkMode ? '#f8f9fa' : '#495057'}]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderFooter = () =>
    isMoreLoading ? (
      <ActivityIndicator size="small" color="#007bff" style={styles.loader} />
    ) : null;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#121212' : '#f8f9fa'},
      ]}>
      <Text
        style={[styles.header, {color: isDarkMode ? '#f8f9fa' : '#343a40'}]}>
        Posts
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPost}
          onEndReached={loadMorePosts}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#343a40',
  },
  postContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#495057',
  },
  loader: {
    marginVertical: 16,
  },
});

export default PaginationPage;
