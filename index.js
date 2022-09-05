const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json());

app.listen(port, () =>
    console.log(`server is listening on ${port}`)
)

app.get('/login', (req, res) => {

    var opts = {
        name: "Ian",
    };

    res.cookie('json', opts);
    res.end();
})

app.get('/hello', (req, res) => {
    res.status(200).send(`Hello, ${req.cookies.json.name}`);
})