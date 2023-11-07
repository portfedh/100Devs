// Function to create a unique ID
// ******************************

function generateUniqueID(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let uniqueID = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueID += characters.charAt(randomIndex);
  }
  // console.log(uniqueID);
  return uniqueID;
}

// Export person schema
module.exports = { generateUniqueID };
