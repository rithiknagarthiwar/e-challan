
import { useState } from "react";
import "./App.css";

import vehicleData from "./data/vehicleData";
import BikeCard from "./components/BikeCard";
import PUCDetails from "./components/PUCDetails";
import InsuranceDetails from "./components/InsuranceDetails";
import DrivingLicenseDetails from "./components/DrivingLicenseDetails";
import ChallanList from "./components/ChallanList";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [message, setMessage] = useState("");

  function searchVehicle() {
    let foundVehicle = null;
    let enteredNumber = registrationNumber.trim().toUpperCase();

    if (enteredNumber === "") {
      setSelectedVehicle(null);
      setMessage("Please enter a registration number.");
      return;
    }

    for (let i = 0; i < vehicleData.length; i++) {
      if (
        vehicleData[i].registrationNumber.toUpperCase() === enteredNumber
      ) {
        foundVehicle = vehicleData[i];
        break;
      }
    }

    if (foundVehicle !== null) {
      setSelectedVehicle(foundVehicle);
      setMessage("");
    } else {
      setSelectedVehicle(null);
      setMessage("Vehicle not found in sample data.");
    }
  }

  return (
    <div>
      <h1>e-Challan Vehicle Dashboard</h1>

      <h2>Enter Vehicle Registration Number</h2>

      <input
        type="text"
        placeholder="Example: TS09AB1234"
        value={registrationNumber}
        onChange={function (event) {
          setRegistrationNumber(event.target.value);
        }}
      />

      <button onClick={searchVehicle}>Search Vehicle</button>

      <p>{message}</p>

      {selectedVehicle !== null && (
        <div>
          <BikeCard vehicle={selectedVehicle} />

          <PUCDetails puc={selectedVehicle.puc} />

          <InsuranceDetails insurance={selectedVehicle.insurance} />

          <DrivingLicenseDetails vehicle={selectedVehicle} />

          <ChallanList challans={selectedVehicle.challans} />
        </div>
      )}
    </div>
  );
}

export default App;
