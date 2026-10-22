
const vehicleData = [
  {
    id: 1,
    vehicleType: "Two Wheeler",
    wheels: 2,
    registrationNumber: "TS09AB1234",
    vehicleName: "Royal Enfield Classic 350",
    ownerName: "Sample User",
    licenseNumber: "SAMPLE-DL-001",
    licenseExpiryDate: "2026-10-24",

    puc: {
      certificateNumber: "PUC12345",
      expiryDate: "2026-10-25",
    },

    insurance: {
      company: "ABC Insurance",
      policyNumber: "POL123456",
      expiryDate: "2026-10-24",
    },

    challans: [
      {
        id: 1,
        date: "2026-10-20",
        reason: "Over Speeding",
        amount: 1000,
        status: "Pending",
      },
      {
        id: 2,
        date: "2026-10-15",
        reason: "No Parking",
        amount: 500,
        status: "Pending",
      },
    ],
  },

  {
    id: 2,
    vehicleType: "Three Wheeler",
    wheels: 3,
    registrationNumber: "TS10CD5678",
    vehicleName: "Passenger Auto",
    ownerName: "Sujatha",
    licenseNumber: "SAMPLE-DL-002",
    licenseExpiryDate: "2026-11-15",

    puc: {
      certificateNumber: "PUC67890",
      expiryDate: "2026-11-15",
    },

    insurance: {
      company: "XYZ Insurance",
      policyNumber: "POL67890",
      expiryDate: "2026-12-10",
    },

    challans: [],
  },

  {
    id: 3,
    vehicleType: "Four Wheeler",
    wheels: 4,
    registrationNumber: "TS07EF9012",
    vehicleName: "Hyundai Creta",
    ownerName: "Dilip",
    licenseNumber: "SAMPLE-DL-003",
    licenseExpiryDate: "2027-01-20",

    puc: {
      certificateNumber: "PUC24680",
      expiryDate: "2026-12-20",
    },

    insurance: {
      company: "ABC Insurance",
      policyNumber: "POL24680",
      expiryDate: "2027-01-15",
    },

    challans: [],
  },

  {
    id: 4,
    vehicleType: "Six or More Wheels",
    wheels: 6,
    registrationNumber: "TS08GH3456",
    vehicleName: "Commercial Truck",
    ownerName: "Kavya",
    licenseNumber: "SAMPLE-DL-004",
    licenseExpiryDate: "2027-03-15",

    puc: {
      certificateNumber: "PUC13579",
      expiryDate: "2027-01-20",
    },

    insurance: {
      company: "XYZ Insurance",
      policyNumber: "POL13579",
      expiryDate: "2027-03-15",
    },

    challans: [],
  },
];

export default vehicleData;
