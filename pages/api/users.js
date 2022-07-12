const fs = require("fs");

export default async function handler(req, res) {
  const data = fs.readFileSync("./data/users/list.json", "utf8");
  console.log(data);
  res.status(200).end(data);
}
