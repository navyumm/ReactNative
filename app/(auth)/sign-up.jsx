import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import FontField from '../../components/FontField';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-4 my-6">

                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[35px]"
                    />

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up in to Aora</Text>

                    <FontField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-7"
                        keyboardType="username-address"
                    />

                    <FontField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FontField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gap4">
                    <Text className="text-gray-100 text-[16px] font-pregular">Already have an account? </Text>
                    
                    <Link href="/sign-in"
                    className="text-[16px] font-psemibold text-secondary-100">
                    Sign in
                    </Link>

                    </View>

                </View>
            </ScrollView>



            <StatusBar backgroundColor="#161622"
                style="light"
            />



        </SafeAreaView>
    )
}

export default SignUp
