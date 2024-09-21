import { StyleSheet, Text, View, Dimensions} from "react-native";
import CustomCard from "@/components/CustomCard";

const { width, height } = Dimensions.get('window');

export default function PreviousWork() {

    const images = [
        {title: "E Store", imageUrl: require("../assets/images/store-min.png"), description: "Connects buyer & seller, allows to post product, create product requests, allowing sellers to connect with buyers seeking specific items."},
        {title: "Cost Calculator", imageUrl: require("../assets/images/cost.png"), description: "Allows users to efficiently manage, track resources for their projects with Pie chart visualization, generate PDF reports & share."},
        {title: "Doc Scanner", imageUrl: require("../assets/images/scanner-min.png"), description: "Simplifies document scanning with auto edge detection, document creation from gallery, easily share & download."},
        {title: "Quotes", imageUrl: require("../assets/images/quotes.png"), description: "Inspiring quotations, categorized for easy browsing. Users can mark their favorites, download & share Quotes across platforms."}
    ]


    return (
        <View style={style.previousWork}>            
            <Text style={[style.title, style.bold]}>PREVIOUS WORK</Text>
            {images.map((image, index)=>(
                <CustomCard key={index} title={image.title} imageUrl={image.imageUrl} description={image.description}/>
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    previousWork: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    bold: {
        fontWeight: "500",
    },

});
