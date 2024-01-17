import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // main container styles
  checkoutContainer: {
    margin: "2%",
  },
  // styles for summary container
  summaryContainer : {
    display:"flex",
    flexDirection : "row",
    justifyContent : "space-between",
    padding : 20,
    borderWidth : 1,
    borderRadius : 5,
    backgroundColor : "rgba(0,0,0,0.1)",
    margin : 10
  },
  // Styles for proceed button
  proceedButton: {
    backgroundColor: "rgba(43,39,241,0.777)",
    borderWidth : 1,
    borderRadius : 5,
    width : 100,
    padding : 10,
    display : "flex",
    alignItems : "center",
    alignSelf : "center"
  },
});
