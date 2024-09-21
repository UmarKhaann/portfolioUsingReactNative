import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "@/app/home";
import AboutMe from "./about";
import Services from "./services";
import PreviousWork from "./previous_work";
import CustomCard from "@/components/CustomCard";



export default function Index() {



  const components = [
    { id: '1', component: <Home /> },
    { id: '2', component: <AboutMe /> },
    { id: '3', component: <Services /> },
    { id: '4', component: <PreviousWork /> },
  ];


  return (
    <SafeAreaView style={style.container}>
      <FlatList data={components} keyExtractor={(item) => item.id} renderItem={({ item }) => item.component} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

});
