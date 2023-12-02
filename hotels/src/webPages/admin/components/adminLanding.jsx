import style from "../admin-styles/adminLanding.module.css";
export let AdminLanding = () => {
    return <div>
        <table className={style.customer_table}>
            <thead>
                <tr className={style.heading_row}>
                    <th>Booked by</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Guest</th>
                    <th>Amount</th>
                </tr>
            </thead>
                
            <tbody>
                <tr>
                    <td>Lori Stevens</td>
                    <td>18 Dec 2022</td>
                    <td>22 Dec 2022</td>
                    <td>04</td>
                    <td className={style.amount}>$1025</td>
                </tr>
                
            </tbody>
            
        </table>
        
        
    </div>
}