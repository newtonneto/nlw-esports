import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { useAppSelector } from "../../store";
import { stateDiscordAuth } from "../../store/slices/auth-slice";

const UserBanner = () => {
  const auth = useAppSelector((state) => stateDiscordAuth(state));

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://cdn.discordapp.com/avatars/${auth.id}/${auth.avatar}.png`,
          }}
        />
        <Text style={styles.username}>{auth.username}</Text>
      </View>
    </View>
  );
};

export default UserBanner;
