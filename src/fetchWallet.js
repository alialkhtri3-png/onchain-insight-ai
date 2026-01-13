
import fetch from "node-fetch";

/*
 * Simple script to fetch wallet transactions from BscScan
 * Replace YOUR_API_KEY_HERE with your real API key
 */

const API_KEY = "YOUR_API_KEY_HERE"; // 🔐 ضع مفتاحك هنا
const WALLET = "0x0000000000000000000000000000000000000000"; // Example wallet

async function fetchWalletTxs(wallet) {
  const url = `https://api.bscscan.com/api?module=account&action=txlist&address=${wallet}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "1") {
      console.log("Transactions:", data.result);
    } else {
      console.error("Error:", data.message);
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

fetchWalletTxs(WALLET);
