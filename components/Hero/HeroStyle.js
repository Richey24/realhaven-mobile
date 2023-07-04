import { StyleSheet } from "react-native";

const heroStyle = StyleSheet.create({
    container: {
        backgroundColor: "#2E7DD7",
        width: "100%",
        paddingTop: 40,
    },
    mainText: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        fontFamily: "Switzer",
        fontWeight: 600,
    },
    mainTextBlack: {
        color: "black",
    },
    desc: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Switzer",
        fontWeight: 400,
        marginTop: 15
    },
    textView: {
        marginTop: 80,
        paddingLeft: 30,
        paddingRight: 30
    },
    searchContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    searchDiv: {
        width: "100%",
        height: 360,
        marginTop: -50,
        backgroundColor: "white",
        borderRadius: 4,
        shadowOffset: {
            width: -8,
            height: 8
        },
        shadowOpacity: 1,
        elevation: 1,
        shadowRadius: 1,
        shadowColor: "#000000",
        padding: 20
    },
    searchBox: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "#F3F4F6",
        borderBottomWidth: 2,
        height: 40,
        alignItems: "center",
        columnGap: 8,
        padding: 1
    },
    searchInput: {
        width: "90%"
    },
    filterBox: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "#F3F4F6",
        borderBottomWidth: 2,
        height: 40,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25
    },
    filterBoxText: {
        fontSize: 16,
        fontFamily: "Switzer",
        fontWeight: 400,
        color: "#374151"
    },
    searchBtn: {
        width: "100%",
        display: "flex",
        backgroundColor: "#2E7DD7",
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 32
    },
    searchBtnText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Switzer",
        fontWeight: 400,
    }
})

export default heroStyle