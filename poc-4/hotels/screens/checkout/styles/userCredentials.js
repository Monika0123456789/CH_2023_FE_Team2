import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 10,
    width: "100%",
  },
  formLabel: {
    fontSize: 16,
    margin: 10,
    color: "rgba(0, 0, 0, 0.7)",
  },
  idInput: {
    borderWidth: 1,
    padding: 8,
    color: "white",
    backgroundColor: "rgba(43, 39, 241, 0.707)",
    textAlign: "center",
    borderRadius: 5,
    marginLeft: 60,
    width: 100,
  },
  textInput: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
    marginBottom : 10,
    width: 350,
  },
});