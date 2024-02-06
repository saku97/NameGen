const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/generateName", (req, res) => {
  const prefixes = ["John", "Jane", "Alex", "Emma", "Chris"];
  const suffixes = ["son", "daughter", "ton", "lyn", "ford"];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const generatedName = `${randomPrefix}-${randomSuffix}`;

  res.json({ name: generatedName });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
