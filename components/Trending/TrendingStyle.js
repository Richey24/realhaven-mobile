import { StyleSheet } from "react-native";


const trendingStyle = StyleSheet.create({
    trendingMain: {
        paddingTop: 40,
        paddingBottom: 120,
        paddingLeft: 20,
        paddingRight: 20,
    },

    trendingImageDiv: {
        marginTop: 64,
        position: "relative",
        height: 300
    },

    trendingImage: {
        width: "100%",
        borderRadius: 12
    },

    trendText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Switzer",
        fontWeight: 400,
        position: "absolute",
        bottom: 20,
        left: 16
    },

    hoverView: {
        width: "100%",
        height: 300,
        backgroundColor: "rgba(46, 125, 215, 0.60)",
        position: "absolute",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    hideHoverView: {
        display: "none"
    },

    hoverBigText: {
        color: "white",
        fontSize: 20,
        fontFamily: "Switzer",
        fontWeight: 600,
    },

    hoverSmallText: {
        color: "white",
        fontSize: 14,
        fontFamily: "Switzer",
        fontWeight: 400,
        marginTop: 8
    },

    seeMoreButton: {
        marginTop: 80,
        height: 54,
        width: 205,
        borderColor: "#2E7DD7",
        borderWidth: 1,
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    seeMoreDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    seeMoreText: {
        color: "#2E7DD7",
        fontSize: 16,
        fontFamily: "Switzer",
        fontWeight: 400,

    }
})

export default trendingStyle