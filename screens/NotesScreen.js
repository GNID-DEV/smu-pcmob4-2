import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import firebase from "../database/firebaseDB";



const db = firebase.firestore().collection("todos");

export default function NotesScreen({ navigation, route }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const updatedNotes = collection.docs.map((doc) => {
        const noteObject = {
          ...doc.data(),
          id: doc.id,
        };
        console.log(noteObject);
        return noteObject;
      });
      setNotes(updatedNotes);
    });

    return () => unsubscribe();
  }, []);

  // This is to set up the top right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addNote}>
          <Ionicons
            name="add-circle"
            size={30}
            // Got issue when park fontSize under styles 
            style={{
              color: "#F2F2F2",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
  });

  // Monitor route.params for changes and add items to the database
  useEffect(() => {
    if (route.params?.text) {
      const newNote = {
        title: route.params.text,
        done: false,
      };
      firebase.firestore().collection("todos").add(newNote);
    }
  }, [route.params?.text]);

  function addNote() {
    navigation.navigate("Add Screen");
  }

  // This deletes an individual note
  function deleteNote(id) {
    console.log("Deleting " + id);
    // To delete that item, we filter out the item we don't want
    db.doc(id).delete();
  }

  // The function to render each row in our FlatList
  function renderItem({ item }) {
    return (
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#BBBDF2",
          borderBottomWidth: 0.3,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{fontSize: 14, color:"#0511F2",}}>{item.title}</Text>
        
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
          <Ionicons name="backspace" style={{fontSize: 24, color: "#0511F2", marginRight: 5,}}/>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        style={{ width: "100%"}}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
});