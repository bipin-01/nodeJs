const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
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
        res.status(200);
        res.sendFile(path.join(__dirname, "/login.html"));
    } else {
        console.log("fail");
        res.send("fail")
    }

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