import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    main_container:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:100
    },
    logo:{
        // width:"87%",
        // height:"61%"
        width:290,
        height:90
    },
    input_field:{
        height:40,
        borderWidth:1,
        padding:10,
        width:280,
        borderRadius:5
    },
    email_container:{
        margin:20
    },
    password_container:{
        margin:10
    },
    submit_button:{
        width:280,
        backgroundColor:"blue",
        borderRadius:5,
        padding:5
    },
    submit_button_text:{
        textAlign:"center",
        color:"white"
    }
})