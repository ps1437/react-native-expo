import React from "react";
import { StyleSheet } from "react-native";

import TextField from "../TextField";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <TextField style={styles.error}>{error}</TextField>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
