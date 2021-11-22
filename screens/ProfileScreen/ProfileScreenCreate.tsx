import React, { useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Button, TextInput, Snackbar } from "react-native-paper";
import firebase from "firebase";
import { Profile } from "../../profile";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./ProfileScreenCreate.styles";

interface Props {
    navigation: StackNavigationProp<"ProfileScreenCreate">;
    route: RouteProp<"ProfileScreenCreate">;
}

export default function ProfileScreenCreate( { route, navigation }: Props) {
    const [orgName, setOrgName] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState("");
    const [amount, setAmount] = useState(0o0000000);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);

    const onDismissSnackBar = () => setVisible(false);
    const showError = (error: string) => {
      setMessage(error);
      setVisible(true);
    };

    const saveProfile = async () => {
        console.log("Testing")
        if (!orgName) {
            showError("Please enter your organization's name.");
            return;
          } else if (!category) {
            showError("Please enter the category.");
            return;
          } else if (!amount) {
            showError("Please enter your target grant range.");
            return;
          } else if (!location) {
            showError("Please enter the location that you are based in.");
            return;
          } else {
            console.log("Loading");
            setLoading(true);
          }
          try {
            console.log("Sending to Database");
            /*const profileRef = firebase.firestore().collection("grants").doc();
            const doc: Profile = {
                orgName: orgName,
                category: category,
                location: location,
                amount: amount
            };
            await profileRef.set(doc);
            setLoading(false);
            navigation.navigate("PricingScreen");*/
          } catch (error) {
              console.log(error)
              setLoading(false);
              showError(error.toString());
          }
    };

    return (
        <SafeAreaView>
            <Text style={styles.h1}>
                Create Your Profile
            </Text>
            <View style = {{marginVertical: 20}}>
            </View>
            <TextInput
                label = "Organization Name"
                value = {orgName}
                onChangeText = {(name: any) => setOrgName(name)}
                style = {{ backgroundColor: "#CBC3E3", marginBottom: 10 }}
            />
            <TextInput
                label = "Category"
                value = {category}
                onChangeText = {(cat: any) => setCategory(cat)}
                style = {{ backgroundColor: "#CBC3E3", marginBottom: 10 }}
            />
            <TextInput
                label = "Location"
                value = {location}
                onChangeText = {(loc: any) => setLocation(loc)}
                style = {{ backgroundColor: "#CBC3E3", marginBottom: 10 }}
            />
            <TextInput
                label = "Minimum Grant Amount"
                value = {String(amount)}
                onChangeText = {(num: any) => setAmount(num)}
                style = {{ backgroundColor: "#CBC3E3", marginBottom: 10 }}
            />
            <Button
                mode = "contained"
                onPress={saveProfile}
                style = {{ marginTop: 20, height: 50, alignContent: "center", alignItems: "center", justifyContent: "center" }}
                loading = {loading}
            >
                Submit
            </Button>
            <Snackbar
                duration = {3000}
                visible = {visible}
                onDismiss = {onDismissSnackBar}
            >
                {message}
            </Snackbar>
        </SafeAreaView>
    )
}