const less = require("less");

function loader(source) {
  let css;
  // render 是同步
  less.render(source, (err, result) => {
    css = result.css;
  });
  return css;
}

module.exports = loader;
