class DBConnection {
    constructor(uri) {
      this.uri = uri;
    }
  
    connect() {
      console.log(`DB ${this.uri} has been connected!`);
    }
  
    disconnect() {
      console.log('DB disconnected');
    }
  }
  
  const connection = new DBConnection('mongodb://...');
  