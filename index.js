const input  = process.argv[2] || "index.html"
const output = process.argv[3] || "output.html"
const html_onefile = require("./html-onefile")
html_onefile(input, output)
