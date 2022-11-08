/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

const filterParam = {};

const onSelectDriverType = async () => {
  filterParam.id_driver = document.getElementById("id_driver").value;
  console.log(filterParam);
  console.log("DATA : ", originalCars);
};

const onSelectBookingDate = () => {
  filterParam.id_date = document.getElementById("id_date").value;
  console.log(filterParam);
};

const onSelectTimeBooking = () => {
  filterParam.id_time_booking = document.getElementById("id_time_booking").value;
  console.log(filterParam);
};

const onSelectTotalPassenger = () => {
  filterParam.passengerCount = document.getElementById("passengerCount").value;
  console.log(filterParam);
};

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init().then(app.run);

// console.log(document.getElementById("id_driver").value);
