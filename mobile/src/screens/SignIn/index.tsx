import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as AuthSession from "expo-auth-session";
import { GameController } from "phosphor-react-native";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import Heading from "../../components/Heading";
import Background from "../../components/Background";
import { THEME } from "../../theme";
import { discordDto } from "../../models/discord.dto";
import { useAppDispatch } from "../../store";
import { setDiscordAuth } from "../../store/slices/auth-slice";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleDiscordSignIn = async () => {
    const response: AuthSession.AuthSessionResult =
      await AuthSession.startAsync({
        authUrl:
          "https://discord.com/api/oauth2/authorize?client_id=1022868152423551016&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40izzy_new2%2Fmobile&response_type=token&scope=identify",
      });

    if (response.type === "success") {
      fetch("https://discord.com/api/users/@me", {
        headers: { authorization: `Bearer ${response.params.access_token}` },
      })
        .then((response) => response.json())
        .then((data: discordDto) => {
          dispatch(
            setDiscordAuth({
              token: response.params.access_token,
              username: data.username,
              avatar: data.avatar,
              id: data.id,
            })
          );
          console.log("data: ", data);
        });
    } else {
      Alert.alert("Erro no login");
    }
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title="Entrar" subtitle="Encontre o seu duo e bora jogar." />

        <TouchableOpacity style={styles.button} onPress={handleDiscordSignIn}>
          <GameController color={THEME.COLORS.TEXT} size={20} />

          <Text style={styles.buttonTitle}>Entrar com Discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
};

export default Home;
