import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function AddScreen({ navigation }) {
  const [text, setText] = useState("");

  return (
    // Title txt 
    <View style={[styles.container, { backgroundColor: "#0511F2" }]}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#F2F2F2'}}>What do you want to do?</Text>
    
    {/* Input field */}
      <TextInput style={[styles.textInput, { color: "#F2F2F2" }]} value={text} onChangeText={(input) => setText(input)} />
      
      <View style={styles.buttonContainer}>
    
    {/* Save button */}
        <TouchableOpacity style={[styles.button, {backgroundColor:"#F2F2F2"} ]} onPress={() => navigation.navigate("Notes", { text })}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
    
    {/* Cancel Button */}
        <TouchableOpacity style={[styles.button, {backgroundColor:"#777DF2"} ]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    borderColor: "#F2F2F2",
    borderRadius: 0,
    borderWidth: 1,
    width: "80%",
    padding: 15,
    marginTop: 10,
  },
  
  button: {
    padding: 10,
    backgroundColor: "#36403E",
    borderRadius: 0,
    borderColor: "#734136",
    margin: 10,
    marginTop: 20,
    width: 140,
  },
  
  buttonText: {
    color: "#0511F2",
    fontWeight: "500",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
});
