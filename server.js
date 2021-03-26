const express = require('express');
const app = express();
const path = require('path');


app.get('/', (request, response) => {
    response.sendFile(
        path.join(
            __dirname + '/index.html'
        )
    );
});

app.get('/:id', (request, response) => {
    const id = request.params.id;

    response.sendFile(
        path.join(
            __dirname + '/' + id
        )
    )
})

app.get('/:idd/:id', (request, response) => {
    const id = request.params.id;
    const idd = request.params.idd;

    response.sendFile(
        path.join(
            __dirname + '/' + idd + '/' + id 
        )
    );
});

app.listen(8000, (request, response) => {
    console.log("Server has started");
})

