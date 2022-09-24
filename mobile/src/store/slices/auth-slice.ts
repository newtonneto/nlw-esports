import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../models/auth";

import { RootState } from "../index";

const authSlice = createSlice({
  name: "authslice",
  initialState: {
    discordAuth: {
      token: "",
      username: "",
      avatar: "",
      id: "",
      discriminator: "",
    },
  },
  reducers: {
    setDiscordAuth: {
      reducer: (state, action: PayloadAction<auth>) => {
        state.discordAuth = action.payload;
      },
      prepare: (value: auth) => {
        return {
          payload: value,
        };
      },
    },
  },
});

const authSelectors = {
  stateDiscordAuth: (state: RootState) => state.authReducer.discordAuth,
};

export const { stateDiscordAuth } = authSelectors;
export const { setDiscordAuth } = authSlice.actions;
export default authSlice.reducer;
