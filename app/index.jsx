import React from "react";
import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function Index() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/(tabs)" />;
}
