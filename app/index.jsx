import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="w-full justify-center items-center min-h-[95vh] px-4">

                    <Image
                        source={images.logo}
                        className="w-[130px] h-[40px]"
                        resizeMode="contain"
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[298px]"
                        resizeMode="contain"
                    />

                    <View>
                        <Text className="text-white text-3xl font-bold text-center">Discover Endless Posibilities with
                            <Text className="text-secondary-200"> Aora</Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[130px] h-[15px] absolute -bottom-1 -right-8"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless
                        Exploration with Aora
                    </Text>

                    <CustomButton 
                        title="Continue with Email"
                        handlePress={()=> router.push('./sign-in')}
                        containerStyles="w-full mt-7"
                    />

                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622"
            style="light"
            />

        </SafeAreaView>
    );
}


