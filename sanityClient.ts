// sanityClient.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "tifevy4o", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "skJDk7nyR1GRa1RlaxBks1Wm6w5YCNCR098lIN3J9LcdhSEBM9EX4JrcKZnlQ3tAlwcLn0gsVBH92NmW7HG1moGYdot6sZFeKiYKpqiSZLQbNn2RpJPIUr3IWOlCcR2CiaLWheNm2gC0qXC87Ifdq6GIhvm5cDqZn62Z1jdjaQ2fBtpnVYao",
});

export default client


// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.client = void 0;
// // sanityClient.ts
// var client_1 = require("@sanity/client");
// exports.client = (0, client_1.createClient)({
//     projectId: "tifevy4o", // Replace with your project ID
//     dataset: 'production', // Or your dataset name
//     apiVersion: '2024-01-04', // Today's date or latest API version
//     useCdn: false, // Disable CDN for real-time updates
//     token: "skJDk7nyR1GRa1RlaxBks1Wm6w5YCNCR098lIN3J9LcdhSEBM9EX4JrcKZnlQ3tAlwcLn0gsVBH92NmW7HG1moGYdot6sZFeKiYKpqiSZLQbNn2RpJPIUr3IWOlCcR2CiaLWheNm2gC0qXC87Ifdq6GIhvm5cDqZn62Z1jdjaQ2fBtpnVYao",
// });
