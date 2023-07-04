import React from 'react'
import Hero from '../components/Hero/Hero'
import BestProp from '../components/BestProp/BestProp'
import { ScrollView } from 'react-native'
import Trending from '../components/Trending/Trending'

const HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: "#F9FAFB" }}>
            <Hero />
            <BestProp />
            <Trending />
        </ScrollView>
    )
}

export default HomeScreen