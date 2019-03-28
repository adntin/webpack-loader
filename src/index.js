console.log("index");

// 1. 行内loader, 执行顺序如下(第二次, 全部执行)
// loader1
// loader2
// loader3
// loader1
// loader2
// inline-loader
// loader3
// const str = require("inline-loader!./a.js");

// 2. 行内loader, 执行顺序如下(第二次, 没有 normal)
// loader1
// loader2
// loader3
// loader1
// inline-loader
// loader3
// const str = require("!inline-loader!./a.js");

// 3. 行内loader, 执行顺序如下(第二次, 没有 pre + normal)
// loader1
// loader2
// loader3
// inline-loader
// loader3
// const str = require("-!inline-loader!./a.js");

// 4. 行内loader, 执行顺序如下(第二次, 没有 pre + normal + post)
// loader1
// loader2
// loader3
// inline-loader
// const str = require("!!inline-loader!./a.js");
