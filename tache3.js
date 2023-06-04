const fs = require("fs");

fs.writeFile("welcom.txt", "Hello World !", (err) => {
  if (err) console.log(err);
  console.log("Le fichier est crée !");
});

fs.readFile("welcom.txt", "utf8", (err, content) => {
  if (err) console.log(err);
  console.log(content);
});
