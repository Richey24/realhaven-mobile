import { StyleSheet } from "react-native";

const bestPropStyle = StyleSheet.create({
    bestPropMain: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white"
    },
    bestPropHeading: {
        color: "#374151",
        fontSize: 24,
        fontFamily: "Switzer",
        fontWeight: 600,
    },
    bestPropDesc: {
        color: "#6B7280",
        fontSize: 16,
        fontFamily: "Switzer",
        fontWeight: 400,
        marginTop: 7
    },
    bestPropCard: {
        marginTop: 64,
    },
    bestPropCardImage: {
        width: "100%",
        height: 238,
        marginBottom: 24
    },
    bestPropCardLink: {
        display: "flex",
        alignItems: "flex-start",
        columnGap: 10,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "flex-start"
    }
})


export default bestPropStyle