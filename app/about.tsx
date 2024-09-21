import { StyleSheet, Text, View, Dimensions } from "react-native";
import CustomButton from "@/components/CustomButton";

const { width, height } = Dimensions.get('window');

export default function AboutMe() {

    return (
        <View style={style.about}>

            <Text style={[style.title, style.bold]}>ABOUT ME</Text>
            <Text style={[style.bodyText]}>Hi there! I'm Umar a Software Engineer experienced in Mobile Application Development. I specialize in creating stunning and functional mobile apps for Android, iOS, and the web using Flutter. Whether you're looking for a simple app or a complex solution, I'm here to bring your vision to life.</Text>
            <CustomButton title="DOWNLOAD CV" />
        </View>
    );
}

const style = StyleSheet.create({
    about: {
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingHorizontal: 50,
        height: height,

    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white',
    },
    bodyText: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    bold: {
        fontWeight: "500",
    },

});
