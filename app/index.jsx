import { Redirect } from "expo-router";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function StartPage() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Redirect href="home/home" />
      </PersistGate>
    </Provider>
  );
}
