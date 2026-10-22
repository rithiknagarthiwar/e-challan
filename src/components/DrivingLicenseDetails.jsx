
function DrivingLicenseDetails({ vehicle }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dateParts = vehicle.licenseExpiryDate.split("-");
  const expiryDate = new Date(
    Number(dateParts[0]),
    Number(dateParts[1]) - 1,
    Number(dateParts[2])
  );

  const difference = expiryDate - today;
  const daysLeft = Math.round(
    difference / (1000 * 60 * 60 * 24)
  );

  let message = "Driving licence is valid.";
  let className = "success";

  if (daysLeft < 0) {
    message = "Driving licence has expired!";
    className = "warning";
  } else if (daysLeft === 0) {
    message = "Driving licence expires today!";
    className = "warning";
  } else if (daysLeft <= 3) {
    message =
      "Warning: Driving licence expires in " +
      daysLeft +
      " days!";
    className = "warning";
  }

  return (
    <div className="details-card">
      <h2>Driving Licence Details</h2>

      <p>Licence Holder: {vehicle.ownerName}</p>
      <p>Licence Number: {vehicle.licenseNumber}</p>
      <p>Expiry Date: {vehicle.licenseExpiryDate}</p>

      <p className={className}>{message}</p>
    </div>
  );
}

export default DrivingLicenseDetails;
