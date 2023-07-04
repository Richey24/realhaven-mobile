import { View, Text, Image, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
import bestPropStyle from '../BestProp/BestPropStyle'
import trendingStyle from './TrendingStyle'
import trendImg1 from "../../assets/images/trendImg1.png"
import trendImg2 from "../../assets/images/trendImg2.png"
import trendImg3 from "../../assets/images/trendImg3.png"
import trendImg4 from "../../assets/images/trendImg4.png"
import arrowBlue from "../../assets/images/arrowBlue.png"
import { TouchableHighlight } from 'react-native';
import { useState } from 'react';

const Trending = () => {
    const [hover, setHover] = useState(1)

    const [fontsLoaded] = useFonts({
        'Switzer': require('../../assets/fonts/Switzer-Regular.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={trendingStyle.trendingMain}>
            <Text style={bestPropStyle.bestPropHeading}>Best properties for sale</Text>
            <Text style={bestPropStyle.bestPropDesc}>Browse the website’s database to choose a  property that best fit your taste </Text>
            <TouchableHighlight underlayColor="none" onPress={() => setHover(1)}>
                <View style={trendingStyle.trendingImageDiv}>
                    <Image style={trendingStyle.trendingImage} source={trendImg1} />
                    {hover !== 1 && <Text style={trendingStyle.trendText}>Modern residential apartments</Text>}
                    <View style={[trendingStyle.hoverView, hover !== 1 && trendingStyle.hideHoverView]}>
                        <Text style={trendingStyle.hoverBigText}>Modern residential apartments</Text>
                        <Text style={trendingStyle.hoverSmallText}>View more</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="none" onPress={() => setHover(2)}>
                <View style={[trendingStyle.trendingImageDiv, { marginTop: 32 }]}>
                    <Image style={trendingStyle.trendingImage} source={trendImg2} />
                    {hover !== 2 && <Text style={trendingStyle.trendText}>Shortlet apartments</Text>}
                    <View style={[trendingStyle.hoverView, hover !== 2 && trendingStyle.hideHoverView]}>
                        <Text style={trendingStyle.hoverBigText}>Shortlet apartments</Text>
                        <Text style={trendingStyle.hoverSmallText}>View more</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="none" onPress={() => setHover(3)}>
                <View style={[trendingStyle.trendingImageDiv, { marginTop: 32 }]}>
                    <Image style={trendingStyle.trendingImage} source={trendImg3} />
                    {hover !== 3 && <Text style={trendingStyle.trendText}>Office spaces</Text>}
                    <View style={[trendingStyle.hoverView, hover !== 3 && trendingStyle.hideHoverView]}>
                        <Text style={trendingStyle.hoverBigText}>Office spaces</Text>
                        <Text style={trendingStyle.hoverSmallText}>View more</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="none" onPress={() => setHover(4)}>
                <View style={[trendingStyle.trendingImageDiv, { marginTop: 32 }]}>
                    <Image style={trendingStyle.trendingImage} source={trendImg4} />
                    {hover !== 4 && <Text style={trendingStyle.trendText}>Real estate resort</Text>}
                    <View style={[trendingStyle.hoverView, hover !== 4 && trendingStyle.hideHoverView]}>
                        <Text style={trendingStyle.hoverBigText}>Real estate resort</Text>
                        <Text style={trendingStyle.hoverSmallText}>View more</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="none" onPress={() => setHover(5)}>
                <View style={[trendingStyle.trendingImageDiv, { marginTop: 32 }]}>
                    <Image style={trendingStyle.trendingImage} source={trendImg2} />
                    {hover !== 5 && <Text style={trendingStyle.trendText}>Apartments Collections</Text>}
                    <View style={[trendingStyle.hoverView, hover !== 5 && trendingStyle.hideHoverView]}>
                        <Text style={trendingStyle.hoverBigText}>Apartments Collections</Text>
                        <Text style={trendingStyle.hoverSmallText}>View more</Text>
                    </View>
                </View>
            </TouchableHighlight>
            <View style={trendingStyle.seeMoreDiv}>
                <Pressable style={trendingStyle.seeMoreButton}>
                    <Text style={trendingStyle.seeMoreText}>See All</Text>
                    <Image source={arrowBlue} />
                </Pressable>
            </View>
        </View>
    )
}

export default Trending