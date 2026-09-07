// Custom logger module
function logMessage(message) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}]${message}`);
}

module.exports = logMessage;