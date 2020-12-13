import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import SimpleSelectButton from 'react-native-simple-select-button';

export default function App() {

  const [choice, setChoice] = useState('');

  const button_list = [
    { label: "Button 1", value: "1" },
    { label: "Button 2", value: "2" },
    { label: "Button 3", value: "3" },
    { label: "Custom Button", value: "4" },
  ];
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <View style={{
        marginVertical: 5,
        width: (Dimensions.get('screen').width - 65),
      }}>
        <FlatList
          data={button_list}
          keyExtractor={item => item.value}
          extraData={choice}
          renderItem={
            ({ item }) => 
              <SimpleSelectButton
                onPress={() => setChoice(item.value)}
                isChecked={choice === item.value}
                text={item.label}
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
              />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
