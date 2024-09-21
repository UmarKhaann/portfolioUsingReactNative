import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

type CustomCard = {
    title: string;
    description: string;
    imageUrl: any;
};

export default function CustomCard(props: CustomCard) {
    const { title, description, imageUrl } = props;

    return (
        <View style={style.customCard}>
            <Image source={imageUrl} style={style.image} resizeMode="cover"/>
            <Text style={style.cardText}>{title}</Text>
            <Text style={style.cardDescription}>{description}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: 260,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    customCard: {
        width: '100%',
        height: 360,
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
        // borderColor: 'black',
        margin: 8,
    },
    cardText: {
        paddingTop: 10,
        fontSize: 16,
        marginLeft: 19,
        color: 'black',
        fontWeight: 'bold',
    },
    cardDescription: {
        paddingHorizontal: 20,
    }
});
