import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const App: () => Node = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello World!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;
