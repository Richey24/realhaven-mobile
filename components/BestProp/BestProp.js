import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import bestPropStyle from './BestPropStyle'
import bestPropImg1 from "../../assets/images/bestPropImg1.png"
import bestPropImg2 from "../../assets/images/bestPropImg2.png"
import bestPropImg3 from "../../assets/images/bestPropImg3.png"
import arrowBlue from "../../assets/images/arrowBlue.png"
import arrowDarkBlue from "../../assets/images/arrowDarkBlue.png"
import arrowPink from "../../assets/images/arrowPink.png"

const BestProp = () => {

    const [fontsLoaded] = useFonts({
        'Switzer': require('../../assets/fonts/Switzer-Regular.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={bestPropStyle.bestPropMain}>
            <Text style={bestPropStyle.bestPropHeading}>Best properties for sale</Text>
            <Text style={bestPropStyle.bestPropDesc}>Browse the website’s database to choose a  property that best fit your taste </Text>
            <View style={bestPropStyle.bestPropCard}>
                <Image style={bestPropStyle.bestPropCardImage} source={bestPropImg1} />
                <Text style={bestPropStyle.bestPropHeading}>Buy Properties</Text>
                <Text style={[bestPropStyle.bestPropDesc, { marginTop: 10 }]}>Browse the website’s database to choose a  property that best fit your taste in Nigeria.</Text>
                <View style={bestPropStyle.bestPropCardLink}>
                    <Text style={[bestPropStyle.bestPropHeading, { color: "#2E7DD7", fontSize: 20 }]}>Discover properties</Text>
                    <Image style={{ marginTop: 2 }} source={arrowBlue} />
                </View>
            </View>
            <View style={bestPropStyle.bestPropCard}>
                <Image style={bestPropStyle.bestPropCardImage} source={bestPropImg2} />
                <Text style={bestPropStyle.bestPropHeading}>Sell Properties</Text>
                <Text style={[bestPropStyle.bestPropDesc, { marginTop: 10 }]}>Put your properties in front of millions of Nigerians and get the best deal in days not months.</Text>
                <View style={bestPropStyle.bestPropCardLink}>
                    <Text style={[bestPropStyle.bestPropHeading, { color: "#306584", fontSize: 20 }]}>Sell properties</Text>
                    <Image style={{ marginTop: 2 }} source={arrowDarkBlue} />
                </View>
            </View>
            <View style={bestPropStyle.bestPropCard}>
                <Image style={bestPropStyle.bestPropCardImage} source={bestPropImg3} />
                <Text style={bestPropStyle.bestPropHeading}>Become an Agent</Text>
                <Text style={[bestPropStyle.bestPropDesc, { marginTop: 10 }]}>Create an account and join us to become an agent. Get all the tools your Real estate agency needs.</Text>
                <View style={bestPropStyle.bestPropCardLink}>
                    <Text style={[bestPropStyle.bestPropHeading, { color: "#BF5E65", fontSize: 20 }]}>Join us now</Text>
                    <Image style={{ marginTop: 2 }} source={arrowPink} />
                </View>
            </View>
        </View>
    )
}

export default BestProp