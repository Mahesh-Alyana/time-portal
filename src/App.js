import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen.js";
import { CursorProvider } from "react-cursor-custom";
import { useState, useEffect } from "react";
import { db } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import SlideShow from "./screens/initialslides/slides.js";
function App() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "dummy");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  });

  return (
    <CursorProvider color="yellow" transitionTime="100ms">
      {/* <SlideShow></SlideShow> */}
      <Routes>
        <Route path="/" exact element={<SlideShow />}></Route>
        <Route path="startGame" element={<HomeScreen />}></Route>
      </Routes>
    </CursorProvider>
  );
}

export default App;
