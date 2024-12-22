let express = require("express");
let fileSystem = require("fs");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// Creating URL paths
// Use GET to retrieve data
// POST is used to send new data
// PUT is used to update existing data
// DELETE is used to delete data

app.get("/", (req, res) => {
  res.send("Hello, it is my first Express application");
});

app.get("/about", (req, res) => {
  res.send("This is my about page for my Express app");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.get("/GetStudents", (req, res) => {
  fs.readFile(__dirname + "/" + "student.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error reading file" });
    } else {
      res.json({
        status: true,
        StatusCode: 200,
        requestedAt: req.localtime,
        requrl: req.url,
        requestMethod: req.method,
        studentdata: JSON.parse(data),
      });
    }
  });
});

app.get("/GetStudentid/:id", (req, res) => {
  fs.readFile(__dirname + "/" + "student.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Error reading file" });
    } else {
      var students = JSON.parse(data);
      var student = students["Student" + req.params.id];
      if (student) {
        res.json(student);
      } else {
        res.json({
          status: true,
          StatusCode: 200,
          requestedAt: req.localtime,
          requrl: req.url,
          requestMethod: req.method,
          studentdata: JSON.parse(data),
        });
      }
    }
  });
});

app.get("/studentinfo", (req, res) => {
  res.sendFile("StudentInfo.html", { root: __dirname });
});

app.post("/submit-data", (req, res) => {
  var name = req.body.firstName + " " + req.body.lastName + " ";
  var Age = req.body.myAge + " Gender: " + req.body.gender + "";
  var Qual = " Qualification" + req.body.Qual;
  console.log(req.body.Qual);
  res.send({
    status: true,
    message: "Form Details",
    data: {
      name: name,
      age: Age,
      Qualification: Qual,
    },
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});