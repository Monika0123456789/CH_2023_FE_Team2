import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //Common styles across roomOverview ------- start ------------------
  heading1: {
    fontSize: 32,
    margin: 16,
    fontWeight: "bold",
  },
  heading2: {
    fontSize: 28,
    margin: 12,
  },
  heading3: {
    fontSize: 24,
    margin: 8,
  },
  parah: {
    fontSize: 16,
    margin: 8,
  },
  //Common styles across roomOverview ------- end ------------------

  // styles from container containing room images
  roomImageContainer: {
    height: 360,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  // styles for enlarged image
  enlargedImageStyles: {
    borderRadius: 20,
    width: 360,
    height: 360,
  },

  // styles for smaller images container
  smallImagesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 280,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 10,
  },
  // styles for small images
  smallImageStyles: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 5,
  },

  //styles for Icon Container
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    color: "rgba(43,39,241,0.777)",
    borderRadius: 2,
    backgroundColor: "rgba(192, 192, 192, 0.4)",
  },
});
