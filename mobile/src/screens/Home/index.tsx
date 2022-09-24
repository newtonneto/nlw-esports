import React, { useEffect, useState } from "react";
import { Image, FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import Heading from "../../components/Heading";
import GameCard, { GameCardProps } from "../../components/GameCard";
import Background from "../../components/Background";
import UserBanner from "../../components/UserBanner";

const Home = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.0.14:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  const handleOpenGame = ({ id, title, bannerUrl }: GameCardProps) => {
    navigation.navigate("game", { id, title, bannerUrl });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <UserBanner />

        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
};

export default Home;
