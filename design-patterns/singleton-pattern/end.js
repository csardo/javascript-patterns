let instance;

class DBConnection {
    constructor(uri) {
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        
        this.uri = uri;
        instance = this;
    }

    connect() {
        console.log(`DB ${this.uri} has been connected!`);
    }

    disconnect() {
        console.log('DB disconnected');
    }
}
  
const connection = Object.freeze(new DBConnection('mongodb://...'));

export default connection;
  