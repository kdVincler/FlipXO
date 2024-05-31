import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
// images from: https://icons.expo.fyi/Index
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

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

  /* handler of the colourscheme button */
  function handleColourChange() {
    if (appColorScheme === "light") {
      setAppColorScheme("dark");
    } else {
      setAppColorScheme("light");
    }
  }
  /* Colour Scheme end */

  /* help message handler */
  function handleHelpPress() {
    Alert.alert(
      "Welcome to FlipXO!",
      "When you are ready to play, press the controller button. \n\n To restart the game before it ends, press the restart button. \n\n You can also change into nightmode or lightmode at the press of the left button.",
      [{ text: "OK" }]
    );
  }
  /* Storing the state of the tiles */
  let [board, setBoard] = useState(
    Array(9)
      .fill()
      .map(() => ({ x: false, o: false, winner: false }))
  );

  function handleTileClick(index) {
    // console.log("handleClick was called");
    if (round === 0) {
      //   console.log("No game, started, returning");
      return;
    } else if (board[index].x || board[index].o) {
      //   console.log("Tile already used");
      return;
    } else if (round % 2 === 1) {
      //   console.log("player one if reached");
      board[index].x = true;
      //   console.log(`Now, board's ${index} index's x is ${String(board[index].x)}`);
      setRound(round + 1);
      //   console.log(round);
    } else if (round % 2 === 0) {
      //   console.log("plyer two if reached");
      board[index].o = true;
      //   console.log(`Now, board's ${index} index's o is ${board[index].o}`);
      setRound(round + 1);
      //   console.log(round);
    }
    checkEnd();
  }

  function TileTemplate({ index }) {
    return (
      <TouchableOpacity
        style={[
          styles.boardTile,
          board[index].winner ? { backgroundColor: "green" } : {},
        ]}
        onPress={() => {
          handleTileClick(index);
        }}
      >
        <Text style={styles.char}>
          {board[index].x === true ? "X" : board[index].o === true ? "O" : ""}
        </Text>
      </TouchableOpacity>
    );
  }

  /* handler and variables for game progression */
  const [round, setRound] = useState(0);

  function handleStart() {
    setRound(round + 1);
    setBoard(
      Array(9)
        .fill()
        .map(() => ({ x: false, o: false, winner: false }))
    );
    // console.log("Game started, round is", round);
  }
  /* handles reset */
  function handleReset() {
    Alert.alert("Reset game?", "Click 'Reset' to restart the game", [
      { text: "Cancel", style: "cancel" },
      {
        text: "OK",
        style: "destructive",
        onPress: () => {
          // reset round counter and board variables
          setRound(1);
          setBoard(
            Array(9)
              .fill()
              .map(() => ({ x: false, o: false, winner: false }))
          );
        },
      },
    ]);
  }

  /* check win/tie */
  function checkEnd() {
    // console.log(round);
    let won = false;
    if (
      // check horizontals
      (board[0].x && board[1].x && board[2].x) ||
      (board[0].o && board[1].o && board[2].o)
    ) {
      won = true;
      setRound(0);
      board[0].winner = true;
      board[1].winner = true;
      board[2].winner = true;
      if (board[1].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    } else if (
      (board[3].x && board[4].x && board[5].x) ||
      (board[3].o && board[4].o && board[5].o)
    ) {
      won = true;
      setRound(0);
      board[3].winner = true;
      board[4].winner = true;
      board[5].winner = true;
      if (board[4].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    } else if (
      (board[6].x && board[7].x && board[8].x) ||
      (board[6].o && board[7].o && board[8].o)
    ) {
      won = true;
      setRound(0);
      board[6].winner = true;
      board[7].winner = true;
      board[8].winner = true;
      if (board[7].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    } else if (
      // check verticals
      (board[0].x && board[3].x && board[6].x) ||
      (board[0].o && board[3].o && board[6].o)
    ) {
      won = true;
      setRound(0);
      board[0].winner = true;
      board[3].winner = true;
      board[6].winner = true;
      if (board[3].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    } else if (
      (board[1].x && board[4].x && board[7].x) ||
      (board[1].o && board[4].o && board[7].o)
    ) {
      won = true;
      setRound(0);
      board[1].winner = true;
      board[4].winner = true;
      board[7].winner = true;
      if (board[4].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    } else if (
      (board[2].x && board[5].x && board[8].x) ||
      (board[2].o && board[5].o && board[8].o)
    ) {
      won = true;
      setRound(0);
      board[2].winner = true;
      board[5].winner = true;
      board[8].winner = true;
      if (board[5].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    } else if (
      // check diagonals
      (board[0].x && board[4].x && board[8].x) ||
      (board[0].o && board[4].o && board[8].o)
    ) {
      won = true;
      setRound(0);
      board[0].winner = true;
      board[4].winner = true;
      board[8].winner = true;
      if (board[4].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    } else if (
      (board[2].x && board[4].x && board[6].x) ||
      (board[2].o && board[4].o && board[6].o)
    ) {
      won = true;
      setRound(0);
      board[2].winner = true;
      board[4].winner = true;
      board[6].winner = true;
      if (board[4].x) {
        Alert.alert("Player One (X) Wins!", "", [{ text: "OK" }]);
      } else {
        Alert.alert("Player Two (O) Wins!", "", [{ text: "OK" }]);
      }
    }

    // check for tie
    if (round > 8 && !won) {
      Alert.alert("Game ended: Tie", "", [{ text: "OK" }]);
      setRound(0);
    }
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: appColorScheme === "light" ? "#87BFFF" : "#120d31",
        },
      ]}
    >
      <View style={{ transform: [{ rotate: "180deg" }] }}>
        {/* Player 2 - on top of the screen */}
        {round % 2 === 0 && round !== 0 ? (
          <View style={styles.turnIndicator}>
            <Text style={styles.turnIndicatorText}>Player 2's (O) turn!</Text>
          </View>
        ) : (
          <View />
        )}
        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              handleColourChange();
            }}
          >
            {appColorScheme === "light" ? (
              <Feather name="moon" size={45} color="white" />
            ) : (
              <Feather name="sun" size={45} color="white" />
            )}
          </TouchableOpacity>
          {round === 0 ? (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                handleStart();
              }}
            >
              <FontAwesome name="gamepad" size={47} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                handleReset();
              }}
            >
              <Feather name="refresh-cw" size={45} color="white" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              { paddingLeft: 18, paddingRight: 18 },
            ]}
            onPress={() => {
              handleHelpPress();
            }}
          >
            <FontAwesome name="question" size={45} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boardContainer}>
        {/* Gameboard */}
        <View style={styles.boardRow}>
          <TileTemplate index={0} />
          <TileTemplate index={1} />
          <TileTemplate index={2} />
        </View>
        <View style={styles.boardRow}>
          <TileTemplate index={3} />
          <TileTemplate index={4} />
          <TileTemplate index={5} />
        </View>
        <View style={styles.boardRow}>
          <TileTemplate index={6} />
          <TileTemplate index={7} />
          <TileTemplate index={8} />
        </View>
      </View>

      <View>
        {/* Player 1 - on the bottom of the screen */}
        {/* Player 2 - on top of the screen */}
        {round % 2 === 1 && round !== 0 ? (
          <View style={styles.turnIndicator}>
            <Text style={styles.turnIndicatorText}>Player 1's (X) turn!</Text>
          </View>
        ) : (
          <View />
        )}
        <View style={{ flexDirection: "row", gap: 15 }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              handleColourChange();
            }}
          >
            {appColorScheme === "light" ? (
              <Feather name="moon" size={45} color="white" />
            ) : (
              <Feather name="sun" size={45} color="white" />
            )}
          </TouchableOpacity>
          {round === 0 ? (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                handleStart();
              }}
            >
              <FontAwesome name="gamepad" size={47} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                handleReset();
              }}
            >
              <Feather name="refresh-cw" size={45} color="white" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              { paddingLeft: 18, paddingRight: 18 },
            ]}
            onPress={() => {
              handleHelpPress();
            }}
          >
            <FontAwesome name="question" size={45} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GameScreen;
