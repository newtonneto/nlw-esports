import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAppSelector } from "../store";
import { stateDiscordAuth } from "../store/slices/auth-slice";

const Routes = () => {
  const auth = useAppSelector((state) => stateDiscordAuth(state));

  return (
    <NavigationContainer>
      {auth.token !== "" ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
