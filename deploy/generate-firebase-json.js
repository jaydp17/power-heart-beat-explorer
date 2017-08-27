const fs = require('fs');
const path = require('path');

const firebaseTempl = require('../firebase-templ');
const hostingJSON = require('../hosting.json');

const firebaseConfig = firebaseTempl({ hosting: hostingJSON });
console.log('writing firebase.json');
fs.writeFileSync(path.resolve(__dirname, '../firebase.json'), JSON.stringify(firebaseConfig, null, 2), 'utf8');
