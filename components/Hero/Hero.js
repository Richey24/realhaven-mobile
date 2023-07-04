import { View, Text, Image, TextInput, Button, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
import Navbar from './Navbar'
import heroStyle from './HeroStyle'
import houses from "../../assets/images/houses.png"
import search from "../../assets/images/Search.png"
import downImg from "../../assets/images/ArrowDown.png"

const Hero = () => {

    const [fontsLoaded] = useFonts({
        'Switzer': require('../../assets/fonts/Switzer-Regular.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <View style={heroStyle.container}>
                <Navbar />
                <View style={heroStyle.textView}>
                    <Text style={heroStyle.mainText}>Find Your Home, Your Safe <Text style={heroStyle.mainTextBlack}>Haven.</Text></Text>
                    <Text style={heroStyle.desc}>Haven is Nigeria's leading online real estate platform which eases the stress of finding properties online </Text>
                </View>
                <Image source={houses} />
            </View>
            <View style={heroStyle.searchContainer}>
                <View style={heroStyle.searchDiv}>
                    <View style={heroStyle.searchBox}>
                        <Image source={search} />
                        <TextInput style={heroStyle.searchInput} />
                    </View>
                    <View style={heroStyle.filterBox}>
                        <Text style={heroStyle.filterBoxText}>Location</Text>
                        <Image source={downImg} />
                    </View>
                    <View style={heroStyle.filterBox}>
                        <Text style={heroStyle.filterBoxText}>Property type</Text>
                        <Image source={downImg} />
                    </View>
                    <View style={heroStyle.filterBox}>
                        <Text style={heroStyle.filterBoxText}>Price range</Text>
                        <Image source={downImg} />
                    </View>
                    <Pressable style={heroStyle.searchBtn}>
                        <Text style={heroStyle.searchBtnText}>Search</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Hero