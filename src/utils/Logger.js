class Logger {
    static log(message) {
      console.log(`[${new Date().toISOString()}] ${message}`);
    }
  }
  
  module.exports = Logger;
  