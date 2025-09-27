import { Text, View } from "react-native";
import React, { Component } from "react";

export default class movie extends Component {
  render() {
    return (
      <View
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "#ccc" }}
      >
        <Text>movie</Text>
      </View>
    );
  }
}
