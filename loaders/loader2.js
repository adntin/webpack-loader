function loader(source) {
  console.log("loader2");
  return source;
}

loader.pitch = function() {
  console.log("loader2", "pitch");
  // return "123";
};

module.exports = loader;
