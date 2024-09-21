import { Dimensions, StyleSheet, Text, View } from "react-native";

type ServicesCardProps = {
    title: string;
    iconComponent: any;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
};

const { width, height } = Dimensions.get('window');


export default function ServicesCard(props: ServicesCardProps) {
    const { iconComponent: IconComponent, iconName, iconSize = 24, iconColor = 'black', title } = props;

    return (
        <View style={style.servicesCard}>
            <IconComponent name={iconName} size={iconSize} color={iconColor} />

            <View style={style.titleContainer}>
                <Text style={style.cardText}>{title}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    servicesCard: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 15,
        borderWidth: 2,
        borderRadius: 10,
    },
    cardText: {
        fontSize: 16,
        marginLeft: 19,
        color: 'black',
    },
    titleContainer: {
        flex: 1,

    }

});
