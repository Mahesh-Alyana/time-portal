import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen.js";
import { CursorProvider } from "react-cursor-custom";
import { useState, useEffect } from "react";
import { db } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import SlideShow from "./screens/initialslides/slides.js";
import StartGame from "./screens/startGame/startGame.js";
import AuthScreen from "./screens/authScreen/authScreen.js";
function App() {
  return (
    <CursorProvider color="yellow" transitionTime="100ms">
      <Routes>
        <Route path="/" exact element={<StartGame />}></Route>
        <Route path="slides" exact element={<SlideShow />}></Route>
        <Route path="auth" exact element={<AuthScreen />}></Route>
        <Route path="startGame" element={<HomeScreen />}></Route>
      </Routes>
    </CursorProvider>
  );
}

export default App;
