import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  boardContainer: {
    flex: 0.8,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boardRow: {
    flexDirection: "row",
    gap: 10,
  },
  boardTile: {
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 20,
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 100,
    padding: 8,
  },
  char: {
    color: "white",
    fontWeight: "900",
    fontSize: 60,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    // darkmode: #120d31, lightmode: #87BFFF
    alignItems: "center",
    justifyContent: "center",
  },
  playerContainer: {
    flex: 0.1,
  },
  turnIndicator: {
    position: "absolute",
    bottom: 95,
    alignSelf: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 100,
    textAlign: "center",
  },
  turnIndicatorText: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
});
