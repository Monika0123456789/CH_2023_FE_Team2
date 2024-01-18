import { Text, TouchableOpacity, View } from "react-native";
import Traveller from "./traveller";
import { styles } from "../styles/travellerMain";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseTravellerCount, decreaseTravellerCount } from "../redux/actions/roomQuantity.actions";

export default function TravellerMain() {
  const travellerCount = useSelector((store) => store.numberOfTravellers);
  const dispatch = useDispatch();

  const [travellers, setTravellers] = useState([]);
  const addTraveller = () => {
    setTravellers([...travellers, { id: Date.now() }]);
    dispatch(increaseTravellerCount());
  };
  const removeTraveller = (id) => {
    setTravellers(travellers.filter((traveller) => traveller.id !== id));
    dispatch(decreaseTravellerCount());
  };
  const travellersCount = travellers.length;
  // console.log(travellersCount)

  return (
    <View>
      <Text style={styles.heading}>Travelers Detail</Text>
      <TouchableOpacity
        style={styles.addTravellerButton}
        onPress={addTraveller}
      >
        <Text style={{ color: "white" }}> + Add New Traveller</Text>
      </TouchableOpacity>
      {travellers.map((traveller) => (
        <Traveller
          key={traveller.id}
          id={traveller.id}
          removeTraveller={removeTraveller}
        />
      ))}
    </View>
  );
}
