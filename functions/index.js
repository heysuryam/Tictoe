
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onValueCreated } = require("firebase-functions/v2/database");
const { initializeApp } = require("firebase-admin/app");
const {
  getDatabase,
  ServerValue
} = require("firebase-admin/database");

initializeApp({
  databaseURL:
    "https://tictoe-1st-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = getDatabase();

exports.healthCheck = onCall(async () => {
  return {
    status: "ok",
    message: "Tictoe backend is running"
  };
});
