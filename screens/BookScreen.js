import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Image, Text} from 'react-native-elements';

const BookScreen = ({navigation, route}) => {
  const book = route.params;
    return(
        <View style={styles.container}>
          <View style={styles.book}>
            <Text style={styles.title}>{book.title}</Text>
            <Image 
            source= {{ uri: book.image }}
            style={{ width: 200, height: 200, marginTop: 30}}/>
            <Text style={styles.description}>{book.description}</Text>
            <Text style={styles.author}>{book.author}</Text>
          </View>
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    book: {
      maxWidth: "70%",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {  
      color: "#3F3E3E",
      fontSize: 30,
      marginTop: 30,
    },
    description: {
      color: "#3F3E3E",
      fontSize: 15,
      marginTop: 30,
      maxWidth: "40%",
      textAlign: "center",
    },
    author: {
      color: "#3F3E3E",
      fontSize: 20,
      marginTop: 30,
    },
  });
  

export default BookScreen;