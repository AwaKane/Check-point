function password(length) {
  var generator = require("generate-password");

  var password = generator.generate({
    length: length,
    numbers: true,
  });

  console.log(password);
}
