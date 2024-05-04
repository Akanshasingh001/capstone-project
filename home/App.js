import * as React from 'react';
import { View, Text,Image } from 'react-native';
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <Home />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
      </View>
    </>
  );
}