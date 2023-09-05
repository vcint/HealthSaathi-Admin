const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const admin = require("firebase-admin");
 const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);
 //var serviceAccount = require("../FirebaseDbKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://healthsaathi23-default-rtdb.firebaseio.com"

});
const database = admin.database();

// Reference to the "orders" node
const ordersRef = database.ref('orders');


const axios = require('axios');
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

// Listen for "value" event on the "orders" node
ordersRef.on('value', snapshot => {
  // snapshot contains the data from the "orders" node
  const ordersData = snapshot.val();
  // console.log(ordersData);
}, error => {
  console.error('Error fetching data:', error);
});

app.get('/orders', async (req, res) => {
  try {
    const ordersSnapshot = await admin.database().ref('orders').once('value');
    const orders = [];
    ordersSnapshot.forEach(orderSnapshot => {
      const order = orderSnapshot.val();
      order.orderId = orderSnapshot.key; // Adding the push ID as orderId
      console.log(order.orderId);
      orders.push(order);
    });
    res.render('orders', { orders });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/submit-order', async (req, res) => {
  //console.log(req.body); 
  try {
    const { orderId, billAmount } = req.body;

    // Get the reference to the specific order in the "orders" collection
    const orderRef = admin.database().ref('orders').child(orderId);

    // Get the order data
    const orderSnapshot = await orderRef.once('value');
    const orderData = orderSnapshot.val();

    if (!orderData) {
      console.error('Order not found');
      res.status(404).send('Order not found');
      return;
    }

    const { userId, imageUrl } = orderData;

    // Move the order to "pending orders" collection
    await admin.database().ref('pending_orders').push({
      orderId: orderId,
      userId: userId,
      imageUrl: imageUrl,
      billAmount: billAmount
    });

    // Remove the order from the "orders" collection
    await orderRef.remove();

    res.redirect('/orders');
  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/shippedOrder', async (req, res) => {
  try {
    const { orderId } = req.body;

    // Get the reference to the specific order in the "pending_orders" collection
    const pendingOrderRef = admin.database().ref('pending_orders').child(orderId);

    // Get the pending order data
    const pendingOrderSnapshot = await pendingOrderRef.once('value');
    const pendingOrderData = pendingOrderSnapshot.val();

    if (!pendingOrderData) {
      console.error('Pending order not found');
      res.status(404).send('Pending order not found');
      return;
    }

    // Move the order to "shipped orders" collection
    await admin.database().ref('shipped_orders').push(pendingOrderData);

    // Remove the order from the "pending_orders" collection
    await pendingOrderRef.remove();

    res.status(200).send('Order marked as shipped successfully');
  } catch (error) {
    console.error('Error marking order as shipped:', error);
    res.status(500).send('Internal Server Error');
  }
});




app.listen(8080, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})

const startFirebaseListener = require('./firebaseListener');
startFirebaseListener();