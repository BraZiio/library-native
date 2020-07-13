import React, {useState} from 'react';
import {Keyboard, Button, StyleSheet, Text, TouchableWithoutFeedback, Modal, View} from 'react-native';

function HomeScreen({navigation, route}) {
    function navigateToLibrary() {
        navigation.reset({            
            index: 0,
            routes: [
                {name: "library"}
            ]
        });
    }
    function closekeyboard() {
        Keyboard.dismiss();
    }
    return(

        <TouchableWithoutFeedback onPress={closekeyboard}>
            <View style={styles.container}>
                <Text>Bienvenue dans ma page d'accueil!</Text>
                <Button title="Voir des détails!" onPress={navigateToLibrary} />
                
                {/* <Button title="Show modal"/>
                
                <Modal visible={modalVisible}>
                    <Text>COUCOU</Text>
                </Modal> */}
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default HomeScreen;