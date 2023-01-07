const dbConnection = uri => Object.freeze({
    uri,
    connect: () =>  console.log(`DB ${this.uri} has been connected!`),
    disconnect: () => console.log('DB disconnected')
});

const connection = dBConnection('mongodb://...');

export default connection;