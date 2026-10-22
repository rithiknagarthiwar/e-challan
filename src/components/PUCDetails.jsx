
function PUCDetails({ puc }) {
  const today = new Date();
  const expiryDate = new Date(puc.expiryDate);

  const daysLeft = Math.ceil(
    (expiryDate - today) / (1000 * 60 * 60 * 24)
  );

  let message = "PUC certificate is valid.";
  let className = "success";

  if (daysLeft < 0) {
    message = "PUC certificate has expired!";
    className = "warning";
  } else if (daysLeft === 0) {
    message = "PUC expires today!";
    className = "warning";
  } else if (daysLeft <= 3) {
    message = "PUC expires in " + daysLeft + " days!";
    className = "warning";
  }

  return (
    <div className="details-card">
      <h2>PUC Certificate</h2>

      <p>Certificate Number: {puc.certificateNumber}</p>
      <p>Expiry Date: {puc.expiryDate}</p>

      <p className={className}>{message}</p>
    </div>
  );
}

export default PUCDetails;
