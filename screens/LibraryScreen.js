import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import data from '../datas/books.json';
import { ListItem } from 'react-native-elements'
import axios from 'axios';

const LibraryScreen = ({navigation, route}) => {

    const list = data;

    const [value, onChangeText] = React.useState('');

    const [books,setBooks]= useState([
        {items: []},
    ]) 

    //https://www.googleapis.com/books/v1/volumes/1MpLAAAAcAAJ

    function getBook () {    
        const newBooks = [...books];
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
        .then(res => {
            console.log(res.data)
            setBooks({
                items: res.data
            }) 
        setBooks(newBooks);
        }) 
    }
    console.log(setBooks);

    return(
        <View style={styles.container}>
            
            <View style={styles.searchBooks}>

            <TextInput
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.search}
            />
            <Button
            onPress={() => getBook()}
            style={styles.button}
            />

            </View>

        {
        list.map((l, i) => (
        <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.image } }}
        title= {l.title}
        bottomDivider
        onPress={() => navigation.navigate("book", data[i])}
        />
        ))
        }
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
    books: {
        marginTop: 15,
    },
    search: {
        borderColor: "#3F3E3E",
        paddingVertical: 6,
        borderWidth: 2,
        height: 30,
        marginRight: 15,
    },
    searchBooks: {
        flexDirection: "row",
        padding: 20,
    },
});
  

export default LibraryScreen;