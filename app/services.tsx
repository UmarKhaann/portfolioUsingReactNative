import { StyleSheet, Text, View, Dimensions } from "react-native";
import CustomButton from "@/components/CustomButton";
import ServicesCard from "@/components/ServicesCard";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from '@expo/vector-icons/Feather';




const { width, height } = Dimensions.get('window');

export default function Services() {
    return (
        <View style={style.services}>
            <Text style={[style.title, style.bold]}>SERVICES THAT I OFFER</Text>
            <ServicesCard
                title="Mobile App Development for iOS and Android"
                iconComponent={Entypo}  
                iconName="mobile"          
            />            
            <ServicesCard
                title="Figma, XD design to Mobile App"
                iconComponent={Feather}  
                iconName="settings"          
            />
            <ServicesCard
                title="Fixing bugs and Errors"
                iconComponent={Entypo}  
                iconName="bug"       
            />

            <CustomButton title="HIRE ME" />
        </View>
    );
}

const style = StyleSheet.create({
    services: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: width,
        height: height,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    bold: {
        fontWeight: "500",
    },

});
