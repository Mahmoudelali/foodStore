import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import Content from "../components/categoryContent.js";
import DrawerContent from "../components/searchCategories";
const Drawer = createDrawerNavigator();

function Search() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <DrawerContent selectedCategory={selectedCategory} />
      )}
    >
      <Drawer.Screen
        name="Home"
        options={{ headerShown: false, drawerPosition: "right" }}
      >
        {() => <Content setSelectedCategory={setSelectedCategory} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default Search;
