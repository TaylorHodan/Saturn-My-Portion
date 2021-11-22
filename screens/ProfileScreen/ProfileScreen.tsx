import React, { useState } from "react"; 
import { View, SafeAreaView, ScrollView, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { styles } from "./ProfileScreen.styles";

interface Props {
    navigation: StackNavigationProp<"ProfileScreen">;
    route: RouteProp<"ProfileScreen">;
}

export default function ProfileScreen( {route, navigation }: Props) {
    const { Profile } = route.params;
    const [loading, setLoading] = useState(false);

    return (
        <ScrollView>
            <SafeAreaView>
                <View>
                    <Text style = {styles.h1}>
                        Profile
                    </Text>
                    <Text style = {styles.h2}>
                        Organization Name
                    </Text>
                    <Text style = {styles.h3}>
                        {Profile.orgName}
                    </Text>
                    <Text style = {styles.h2}>
                        Category
                    </Text>
                    <Text style = {styles.h3}>
                        {Profile.category}
                    </Text>
                    <Text style = {styles.h2}>
                        Location
                    </Text>
                    <Text style = {styles.h3}>
                        {Profile.location}
                    </Text>
                    <Text style = {styles.h2}>
                        Desired Grant Amount
                    </Text>
                    <Text style = {styles.h3}>
                        {Profile.amount}
                    </Text>
                    <Button
                        mode = "contained"
                        onPress = {() => navigation.navigate("ProfileScreenCreate")}
                        style = {{ marginTop: 20 }}
                        loading = {loading}
                    >
                        Update Profile
                    </Button>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}