'use strict'

function html_onefile(input, output) {
  const cheerio = require("cheerio")
  const fs = require("fs")
  const path = require('path')

  const $ = cheerio.load(fs.readFileSync(input))
  const dir = path.dirname(input)

  $("script").each(function(index, element) {
    if (this.attribs.src !== undefined) {
      let script = ""
      if (this.attribs.src.startsWith("http")) {
        const request = require('sync-request')
        script = request('GET', this.attribs.src).getBody()
      } else {
        script = fs.readFileSync(`${dir}/${this.attribs.src}`, "utf-8")  
      }
      $(this).replaceWith(`<script>${script}</script>`)
    }
  })

  $("link").each(function(index, element) {
    if (this.attribs.rel === "stylesheet") {
      let stylesheet = ""
      if (this.attribs.href.startsWith("http")) {
        const request = require('sync-request')
        stylesheet = request('GET', this.attribs.href).getBody()
      } else {
        stylesheet = fs.readFileSync(`${dir}/${this.attribs.href}`, "utf-8")  
      }
      $(this).replaceWith(`<style>${stylesheet}</style>`)
    }
  })

  fs.writeFileSync(output, $.html())
}

module.exports = html_onefile
