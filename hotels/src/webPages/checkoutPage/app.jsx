import { CheckoutMain } from "./components/checkoutMain";
import { Provider } from "react-redux";
import dataStore from "./store";

export let App = () => {
  return (
    <>
      <Provider store={dataStore}>
        <CheckoutMain />
      </Provider>
    </>
  );
};
