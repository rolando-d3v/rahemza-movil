
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function VistaCineScreen() {
    return (
      <View style={styles.container}>
        <Text>VistaScreen</Text>
      </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});