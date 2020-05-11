/**
* Copyright 2020 IBM
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
**/

const bodyParser = require("body-parser");

const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const callNLUnderstanding = require("./utils/watsonNL");
const proDataNL = require("./utils/proDataNL");
const par = require("./params.json");

const router = require("./routes/router");

var title = 'Web Gallery S3 ICOS';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
var Controller = require('./controllers/Controllers')(title);
app.use('/list', Controller.obtenerfile);


app.post("/upload-text", async (req, res) => {
    const inputText = req.body.text;
    console.log(inputText)

    try {
        if (!inputText) {
          res.send({
            status: false,
            message: "No text uploaded"
          });
        } else {
            await callNLUnderstanding(par, inputText).then(ans =>
                proDataNL(ans).then(finalRes => res.json(finalRes))
              );
          console.log("\nDone!");
        }
      } catch (err) {
        res.status(500).json({ message: "No se pudo analizar el texto ingresado" });
      }
    });



app.use(logger("dev"));
app.use(cookieParser());

app.use("/", router);

module.exports = app;
