const express = require("express");
const {SERVER_PORT} = process.env

const express = require('express');

    const app = express();

    const port = 3000;

    app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
    });


app.get('http://cqm-sandbox.alphora.com/cqf-ruler-r4/fhir/Patient/denom-EXM104-FHIR4')