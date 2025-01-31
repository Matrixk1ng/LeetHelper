import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";

const signUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="white"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="white"
        keyboardType="numeric"
      />
      <Link href="/homePage" style={{ marginHorizontal: "auto" }} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50, // Adjust this value to move the content lower
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    color: "white",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    padding: 6,
  },
});
