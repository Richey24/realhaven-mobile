import { StyleSheet } from "react-native";

const NavbarStyle = StyleSheet.create({
    logo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        columnGap: 5
    },
    logoText: {
        fontSize: 18,
        fontFamily: "Switzer",
        color: "white",
        fontWeight: 600,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default NavbarStyle