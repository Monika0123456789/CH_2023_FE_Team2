import { Alert, Button, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {styles} from "../admin-styles/admin.js";
import { useEffect, useState } from "react";


export default AdminLogin = () => {
    // setState to store the chaning email and password
    let [ adminCredentials, setAdminCredentials ] = useState({ email : "", password : "" });

    useEffect(() => {
        var adminData = {
            email : "hotel.booking.admin@gmail.com",
            password : "admin@123"
        }
        AsyncStorage.setItem(
            'adminData',
            JSON.stringify(adminData),
        );
        console.log('data inserted successfully', JSON.stringify(adminData));
    })

    const submitHandler = () => {
        console.log("submit handler invoked");
        AsyncStorage.getItem('adminData')
        .then((data) => {
            console.log(JSON.parse(data));

            // obtaining the object containing the admin email and password
            let dataObject = JSON.parse(data);

            // admin email and password matching is done here
            if(adminCredentials.email.length!==0 && adminCredentials.password.length!==0){
                if(dataObject.email === adminCredentials.email && dataObject.password === adminCredentials.password ){
                    setAdminCredentials({ email : "", password : "" });
                    console.log("logged in successfully")
                }
                else{
                    Alert.alert('Error', 'you have entered wrong credentials!',
                    [
                        {
                            text:'close',
                        }
                    ]);
                    setAdminCredentials({ email : "", password : "" });
                }
            }
            else{
                Alert.alert('Error', 'please fill all the credentials!',
                [
                    {
                        text:'close',
                    }
                ])
            }
        });
    }

    const handleEmailChange = (data) => {
        setAdminCredentials({...adminCredentials, email : data});
    }

    const handlePasswordChange = (data) => {
        setAdminCredentials({...adminCredentials, password : data});
    }

    return(
        <>
            <ScrollView>
                <KeyboardAvoidingView style={styles.main_container} behavior="padding" enabled keyboardVerticalOffset={50}>
                    <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>

                    <View style={styles.email_container}>
                        <TextInput placeholder="email" style={styles.input_field} value={adminCredentials.email} onChangeText={handleEmailChange}/>
                    </View>

                    <View style={styles.password_container}>
                        <TextInput placeholder="password" style={styles.input_field} value={adminCredentials.password} onChangeText={handlePasswordChange}/>
                    </View>

                    <Pressable style={styles.submit_button} onPress={submitHandler}>
                        <Text style={styles.submit_button_text}>Log in</Text>
                    </Pressable>
                </KeyboardAvoidingView>
            </ScrollView>

        </>
    )
}