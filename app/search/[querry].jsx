import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Search = () => {
    const { querry } = useLocalSearchParams();
    return (
        <SafeAreaView 
        className="bg-primary h-full">
            <Text className="text-3xl text-white">{querry}</Text>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({})