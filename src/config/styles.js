import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  selfStrech: {
    marginBottom: 20,
  },
});
