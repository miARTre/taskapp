require("dotenv").config({ path: "./src/config/.env" });
const app = require('./app')
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server run on PORT:", process.env.PORT);
});
