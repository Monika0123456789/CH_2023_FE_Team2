import { ScrollView, Text, View } from "react-native";
import {styles} from "../admin-styles/admin.js";
export default AdminLanding = () => {
    return(
        <>
            <ScrollView>
                <View style={styles.admin_landing_main_container}>
                    <View style={styles.details_container}>
                        <Text style={styles.booking_text1}>Booking Id: </Text>
                        <Text style={styles.booking_text2}>Booked by: </Text>
                        <Text style={styles.booking_text3}>Check-in: </Text>
                        <Text style={styles.booking_text4}>Check-out: </Text>
                        <Text style={styles.booking_text5}>Guest: </Text>
                        <Text style={styles.booking_text6}>Amount: </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}