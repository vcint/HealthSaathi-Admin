const admin = require("firebase-admin");

module.exports = function startFirebaseListener() {
  const ordersRef = admin.database().ref('orders');

  ordersRef.on('value', snapshot => {
    // Handle data changes here
    const ordersData = snapshot.val();
    // console.log(ordersData);
  }, error => {
    console.error('Error fetching data:', error);
  });
};