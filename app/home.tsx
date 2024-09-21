import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import CustomButton from "@/components/CustomButton";

const { width, height } = Dimensions.get('window');

export default function Index() {

  return (
    <View style={style.home}>

      <View style={style.avatarContainer}>
        <Image
          source={require('@/assets/images/profile.jpeg')}
          resizeMode="cover"
          style={style.homeImage}
        />
      </View>

      <Text style={[style.welcome, style.bold]}>Welcome to my Portfolio</Text>
      <Text style={[style.name]}>I'm Muhammad Umar</Text>
      <Text style={[style.title, style.bold]}>A software Engineer</Text>
      <Text style={[style.title, style.bold]}>A Flutter Developer</Text>
      <CustomButton title="HIRE ME" />
    </View>
  );
}

const style = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  homeImage: {
    width: 130,
    height: 130,
    borderRadius: 65
  },
  avatarContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    overflow: 'hidden',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 16,
    paddingTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  title: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "500",
  },

});
