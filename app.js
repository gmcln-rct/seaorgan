const express = require('express');


// NOTE APP.JS CURRENT NOT BEING UTILIZED

// Gives access to express methods
const app = express();
const cors = require('cors');


app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})