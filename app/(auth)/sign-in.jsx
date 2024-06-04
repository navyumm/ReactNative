import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import FontField from '../../components/FontField';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '../../lib/appwrite';

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)


    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill in all the fields")
        }

        setIsSubmitting(true);

        try {
            await signIn(form.email, form.password)

            // set it to global state...
            
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)
            
        }finally {
            setIsSubmitting(false);
        }
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

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

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
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gap4">
                    <Text className="text-gray-100 text-[16px] font-pregular">Don't have an account? </Text>
                    
                    <Link href="/sign-up"
                    className="text-[16px] font-psemibold text-secondary-100">
                    Sign up
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

export default SignIn

const styles = StyleSheet.create({})