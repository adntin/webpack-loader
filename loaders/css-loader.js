function loader(source) {
  const reg = /url\((.+?)\)/g;
  let pos = 0; // 查找的起始位置
  let current = [];
  const arr = ["const list = [];"]; // 拼接代码片段
  while ((current = reg.exec(source))) {
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
    // match: 正则匹配的全部字符串, url("./google.png")
    // capture: 括号中的分组捕获, reg中(.+?), "./google.png"
    // console.log(current);
    const [match, capture] = current;
    const part1LastIndex = reg.lastIndex - match.length; // url之前的代码片段, 不包括url
    const part1 = JSON.stringify(source.slice(pos, part1LastIndex));
    arr.push(`list.push(${part1});`); // 添加第1部分
    const part2 = `'url(' + require(${capture}) + ')'`; // 注意: 要把`url()`当成字符串
    arr.push(`list.push(${part2});`); // 添加第2部分
    pos = reg.lastIndex;
  }
  const part3 = JSON.stringify(source.slice(pos));
  arr.push(`list.push(${part3});`); // 添加第3部分
  arr.push(`module.exports = list.join('');`);
  const result = arr.join(`\r\n`);
  // console.log(result);
  return result;
}

module.exports = loader;
