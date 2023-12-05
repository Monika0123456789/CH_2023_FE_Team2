import { useEffect } from "react";
import style from "../admin-styles/adminLanding.module.css";
import { HeaderComp } from "../../header/components/header";
export let AdminLanding = () => {

    // obtaining the customer hotel booking details object from the local storage
    var booking_details = JSON.parse(localStorage.getItem("Booking Details"));

    return <div>
        <HeaderComp />

        {/* table containing the customer hotel booking details */}
        <table className={style.customer_table}>
            <thead>
                <tr className={style.heading_row}>
                    <th>Booking Id</th>
                    <th>Booked by</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Guest</th>
                    <th>Amount</th>
                </tr>
            </thead>
                
            <tbody>
                {/* loop through the array of objects containing the customer hotel booking details */}
                {booking_details.bookingData.map((dataObj, index) => (
                // alert(dataObj.data.address);
                
                <tr key={index}>
                    <td>{dataObj.id}</td>
                    <td>{dataObj.data.fullName}</td>
                    <td>{dataObj.data.checkin}</td>
                    <td>{dataObj.data.checkout}</td>
                    <td>{dataObj.data.numberOfTravellers}</td>
                    <td className={style.amount}>${dataObj.data.price}</td>
                </tr>
                ))}
                
            </tbody>
            
        </table>
        
        
    </div>
}