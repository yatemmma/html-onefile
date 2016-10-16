'use strict'

function html_onefile(input, output) {
  const cheerio = require("cheerio")
  const fs = require("fs")
  const path = require('path')

  const $ = cheerio.load(fs.readFileSync(input))
  const dir = path.dirname(input)

  $("script").each(function(index, element) {
    if (this.attribs.src !== undefined) {
      const script = fs.readFileSync(`${dir}/${this.attribs.src}`, "utf-8")
      $(this).replaceWith(`<script>${script}</script>`)
    }
  })

  $("link").each(function(index, element) {
    if (this.attribs.rel === "stylesheet") {
      const stylesheet = fs.readFileSync(`${dir}/${this.attribs.href}`, "utf-8")
      $(this).replaceWith(`<style>${stylesheet}</style>`)
    }
  })

  fs.writeFileSync(output, $.html())
}

module.exports = html_onefile
