//  34 	What is IndexedDB

// low-level api for client side Storage
// Another way to store data
// its the db built inside browser
// it has object store- key value store - collection
// it's client side database that we don't have access to - unlike ohther server side db like postgres

// Benifits -
// store significent amount of data
// fast
// store value by key
// works well with offline
// work well with webworkers
//with Asyncrom=nous api - less blocked ui

// usecase
// store edits without having to Sync Every Character Change Back to the Server Immediately
// - User Write - indexDb - server

// limitations
// - indexDb can block Ui

// Don't Save hube object
// only use indexDb if you actually need database

// for larger quantity data
// searchable data
