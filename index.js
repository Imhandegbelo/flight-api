const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/", routes);

app.use("/delete:id", (req, res) => {
	var id = req.params.id
	var newTicket = ticket.filter( el => el.id !=id)
	flightTicket = newTicket
	res.send({
		success: true;
		message: "flight ticket successfully deleted"
	})
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
