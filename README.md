html-onefile
====

Integrate the external files into one html file.

## Usage

```
$ npm install html-onefile
$ html-onefile input.html output.html
```

before
```
<html>
<head>
  <title>html-onefile</title>
  <script src="script1.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css"></link>
</head>
<body>
<script src="script2.js"></script>
<script>
  document.write(`${hoge}-${piyo}`);
</script>
</body>
</html>
```

after
```
<html>
<head>
  <title>html-onefile</title>
  <script>const hoge = "html"
</script>
  <style>body {
  background-color: lightblue;
}
</style>
</head>
<body>
<script>const piyo = "onefile"
</script>
<script>
  document.write(`${hoge}-${piyo}`);
</script>
</body>
</html>
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).

## Author

[yatemmma](https://github.com/yatemmma)
