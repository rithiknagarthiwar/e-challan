
function BikeCard({ vehicle }) {
  return (
    <div className="bike-card">
      <div className="bike-icon">
        {vehicle.wheels === 2
          ? "🏍️"
          : vehicle.wheels === 3
          ? "🛺"
          : vehicle.wheels === 4
          ? "🚗"
          : "🚚"}
      </div>

      <div className="bike-info">
        <h2>{vehicle.vehicleName}</h2>

        <p>Vehicle Type: {vehicle.vehicleType}</p>

        <p>Number of Wheels: {vehicle.wheels}+</p>

        <p>Registration Number</p>
        <h3>{vehicle.registrationNumber}</h3>

        <p>Owner: {vehicle.ownerName}</p>
      </div>
    </div>
  );
}

export default BikeCard;
