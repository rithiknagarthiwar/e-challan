
import { useState } from "react";

function ChallanList({ challans }) {
  const [order, setOrder] = useState("newest");
  const [selectedIds, setSelectedIds] = useState([]);
  const [paidIds, setPaidIds] = useState([]);

  let pendingChallans = challans.filter(function (challan) {
    return challan.status === "Pending" &&
      !paidIds.includes(challan.id);
  });

  let sortedChallans = [...pendingChallans];

  sortedChallans.sort(function (a, b) {
    if (order === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  let totalAmount = 0;
  let selectedAmount = 0;

  for (let i = 0; i < pendingChallans.length; i++) {
    totalAmount += pendingChallans[i].amount;

    if (selectedIds.includes(pendingChallans[i].id)) {
      selectedAmount += pendingChallans[i].amount;
    }
  }

  function selectChallan(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(
        selectedIds.filter(function (item) {
          return item !== id;
        })
      );
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  function payChallans() {
    let selectedChallans = pendingChallans.filter(function (challan) {
      return selectedIds.includes(challan.id);
    });

    if (selectedChallans.length === 0) {
      alert("Please select a challan.");
      return;
    }

    // Demo only: simulate a successful payment
    let paymentDate = new Date().toISOString();

    let paymentData = selectedChallans.map(function (challan) {
      return {
        ...challan,
        paymentStatus: "Paid",
        paidAmount: challan.amount,
        paymentDate: paymentDate,
        paymentId: "DEMO-" + challan.id + "-" + Date.now(),
      };
    });

    // Download the paid challans as a JSON file
    let jsonData = JSON.stringify(paymentData, null, 2);
    let file = new Blob([jsonData], {
      type: "application/json",
    });

    let fileUrl = URL.createObjectURL(file);
    let link = document.createElement("a");

    link.href = fileUrl;
    link.download = "paidChallans.json";
    link.click();

    URL.revokeObjectURL(fileUrl);

    // Update the screen
    setPaidIds([...paidIds, ...selectedIds]);
    setSelectedIds([]);

    alert(
      "Demo payment successful! Paid amount: ₹" +
        selectedAmount +
        ". Your paidChallans.json file has been downloaded."
    );
  }

  return (
    <div className="details-card">
      <h2>Pending e-Challans</h2>

      <h3>Total Pending Amount: ₹{totalAmount}</h3>
      <h3>Total Selected Amount: ₹{selectedAmount}</h3>

      <label>Sort by date: </label>

      <select
        value={order}
        onChange={function (event) {
          setOrder(event.target.value);
        }}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      {sortedChallans.length === 0 ? (
        <p>No pending challans.</p>
      ) : (
        sortedChallans.map(function (challan) {
          return (
            <div className="challan-item" key={challan.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(challan.id)}
                  onChange={function () {
                    selectChallan(challan.id);
                  }}
                />
                Select challan
              </label>

              <p>Date: {challan.date}</p>
              <p>Reason: {challan.reason}</p>
              <p>Amount: ₹{challan.amount}</p>
              <p>Status: {challan.status}</p>
            </div>
          );
        })
      )}

      <button
        onClick={payChallans}
        disabled={selectedAmount === 0}
      >
        Pay Selected Challans (₹{selectedAmount})
      </button>

      {paidIds.length > 0 && (
        <p className="success">
          Demo paid challans: {paidIds.length}
        </p>
      )}
    </div>
  );
}

export default ChallanList;
