import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    var random_name = "";
    var gender = req.body['gender'];

    if (gender === "boy") {
        random_name = Girls[Math.round(Math.random() * Girls.length)];
    } else if (gender === "girl") {
        random_name = Boys[Math.round(Math.random() * Boys.length)];

    } else {
        random_name = "none";

    }
    res.render("respond.ejs", {
        user: req.body["Email"],
        heading: "Hello Friends",
        body: "Hi this is paragraph",
        Name: `❤${random_name}❤`,
        Gender: gender,
    });
    console.log(random_name);
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);

})


const Boys = [
    "Mohamed Fazil",
    "Mohieen",
    "Mohamed Zaheer",
    "Mohamed Zammer",
    "Ash kechum",
    "Jack",
    "William",
    "Henry",
    "Alexander",
    "Ali",
    "Hasan",
    "Hussain",
    "Kareem",
    "Omar",
    "Bilal",
    "Ibrahim",
    "Youssef",
    "Malik",
    "Tariq",
    "Zayd",
    "Rafiq",
    "Hamza",
    "Nasir",
    "Khalid",
    "Amir",
    "Faris",
    "Idris",
    "Rayan",
    "Zaid"








]

const Girls = [
    "Sophia",
    "Oliver",
    "Isabella",
    "Emma",
    "Fatima",
    "Sara",
    "Linda",
    "Aisha",
    "Amelia",
    "Yasmin",
    "Zahra",
    "Amina",
    "Leila",
    "Inaya",
    "Samira",
    "Hana",
    "Mariam",
    "Rania",
    "Farah",
    "Aisha",
    "Layla",
    "Lina",
    "Sana",
    "Dalia",
    "Noura",
    "Yara",
    "Salma",
    "Jannah",
]