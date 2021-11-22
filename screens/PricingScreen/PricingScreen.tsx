import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView, View, Image } from "react-native";
import { Button } from "react-native-paper";
import firebase from "firebase";
import { styles } from "./PricingScreen.styles";
import { PricePlan } from "../../pricePlan";

export default function PricingScreen() {
    const [pricePlan, setPricePlan] = useState("");
    
    const optionOne = () => {
        setPricePlan("Pay Plan")
        savePrice();
    }

    const optionTwo = () => {
        setPricePlan("Free Trial")
        savePrice();
    }

    const savePrice = async () => {
        try {
            console.log("Starting Save");
            const priceDoc = firebase.firestore().collection("prices").doc();
            console.log("Created Document");
            const doc: PricePlan = {
                plan: pricePlan,
            };
            await priceDoc.set(doc);
        } catch (error) {
            console.log(error.toString());
        }
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <Text style = {styles.titleText}>Unleash Your Potential</Text>
                <Text style = {styles.subtitle}>$20/Month - Access our 30,000+ Grants Today (Your First 7 Days are Free)</Text>
                <View style = {styles.container}>
                    <Button
                        mode = "contained"
                        onPress = {() => {optionOne}}
                    >
                        Start Plan
                    </Button>
                </View>
                <Text style = {styles.subtitle}>Free Trial - Access all of our grants and matching tools</Text>
                <View style = {styles.container}>
                    <Button
                        mode = "contained"
                        onPress = {() => {optionTwo}}
                    >
                        Try Free Trial
                    </Button>
                </View>
                <Image source = {require('../../assets/picMVP.png')}/>
            </SafeAreaView>
        </ScrollView>
    );
}