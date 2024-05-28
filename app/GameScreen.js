import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  useColorScheme,
  View,
  Pressable,
} from "react-native";

function GameScreen() {
  /* Colour Scheme detector and setter, which will later facilitate user input too */
  const deviceColorScheme = useColorScheme();
  const [appColorScheme, setAppColorScheme] = useState("light");
  useEffect(() => {
    if (deviceColorScheme === "light") {
      setAppColorScheme("light");
    } else {
      setAppColorScheme("dark");
    }
  }, [deviceColorScheme]);
  /* Colour Scheme end */

  /* Storing the state of the tiles */
  const board = [
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
    { x: false, o: false, winner: false },
  ];

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: appColorScheme === "light" ? "#87BFFF" : "#120d31",
        },
      ]}
    >
      <View>
        {/* Player 2 - on top of the screen */}
        <Text style={{ color: "white" }}>Player 2</Text>
      </View>

      <View style={styles.boardContainer}>
        {/* Gameboard */}
        <View style={styles.boardRow}>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[0].x || board[0].o ? (board[0].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[1].x || board[1].o ? (board[1].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[2].x || board[2].o ? (board[2].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
        </View>
        <View style={styles.boardRow}>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[3].x || board[3].o ? (board[3].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[4].x || board[4].o ? (board[4].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[5].x || board[5].o ? (board[5].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
        </View>
        <View style={styles.boardRow}>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[6].x || board[6].o ? (board[6].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[7].x || board[7].o ? (board[7].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
          <Pressable style={styles.boardTile}>
            <Text style={styles.char}>
              {board[8].x || board[8].o ? (board[8].x ? "X" : "0") : ""}
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        {/* Player 1 - on the bottom of the screen */}
        <Text style={{ color: "white" }}>Player 1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});

export default GameScreen;
