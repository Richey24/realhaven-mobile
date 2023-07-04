import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font';
import logo from "../../assets/images/logo.png"
import navIcon from "../../assets/images/navIcon.png"
import NavbarStyle from './NavbarStyle'

const Navbar = () => {

    const [fontsLoaded] = useFonts({
        'Switzer': require('../../assets/fonts/Switzer-Regular.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={NavbarStyle.container}>
            <View style={NavbarStyle.logo}>
                <Image source={logo} />
                <Text style={NavbarStyle.logoText}>HAVEN</Text>
            </View>
            <Image source={navIcon} />
        </View>
    )
}

export default Navbar