const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/login.html"));
});


router.post("/login", (req, res) => {
    const username = "abc";
    const password = "efg";

    if (req.body.username === username && req.body.password === password) {
        const data = require("./data.json");
        console.log("success");
        res.status(200).send(data);
        //res.sendFile(path.join(__dirname, "/login.html"));
    } else {
        console.log("fail");
        res.status(500).send("fail");
    }

});

router.get("/todos", (req, res) => {
    const data = fs.readFileSync("data.json");
    data = JSON.parse(data);

    res.status(200).send(data);
});

router.post("/todos", (req, res) => {
    let data = fs.readFileSync("data.json");
    data = JSON.parse(data);

    data.push({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
    });
    let newData = JSON.stringify(data);
    fs.writeFile("data.json", newData, (err) => {
        if (err) throw err;
        console.log("New data added");
    });

    res.status(200).send(data);
});

router.get("/todos", (req, res) => {
    const data = require("./data.json");
    //es.sendFile(path.join(__dirname, "/addToDO.html"));
    res.status(200).send(data);
});

router.post("/login", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

router.post("/register", (req, res) => {
    res.send("Trying to register!");
});

router.get("/logout", (req, res) => {
    res.send("Trying to logout");
});

app.use("/", router);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});