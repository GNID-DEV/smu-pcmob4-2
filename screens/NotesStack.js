import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotesScreen from "./NotesScreen";

const InnerStack = createStackNavigator();
export default function NotesStack() {
  return (
    <InnerStack.Navigator>
      
      <InnerStack.Screen name="Notes" component={NotesScreen}
        options={{
          title: "PCMOB 4 | DATABASE:FIREBASE",
          
          headerTitleAlign: 'left',
          
          headerStyle: {
            height: 120,
            backgroundColor: "#0511F2",
            shadowColor: "black",
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },

          headerTintColor: "#F2F2F2",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            
          },
        }}
      />
    </InnerStack.Navigator>
    
  );
}

