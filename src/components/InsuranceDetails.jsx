
function InsuranceDetails({ insurance }) {
  const today = new Date();
  const expiryDate = new Date(insurance.expiryDate);

  const daysLeft = Math.ceil(
    (expiryDate - today) / (1000 * 60 * 60 * 24)
  );

  let message = "Insurance is valid.";
  let className = "success";

  if (daysLeft < 0) {
    message = "Insurance has expired!";
    className = "warning";
  } else if (daysLeft === 0) {
    message = "Insurance expires today!";
    className = "warning";
  } else if (daysLeft <= 3) {
    message = "Insurance expires in " + daysLeft + " days!";
    className = "warning";
  }

  return (
    <div className="details-card">
      <h2>Bike Insurance</h2>

      <p>Company: {insurance.company}</p>
      <p>Policy Number: {insurance.policyNumber}</p>
      <p>Expiry Date: {insurance.expiryDate}</p>

      <p className={className}>{message}</p>
    </div>
  );
}

export default InsuranceDetails;
