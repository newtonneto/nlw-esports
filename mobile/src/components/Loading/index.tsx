import React from "react";
import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../theme";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
};

export default Loading;