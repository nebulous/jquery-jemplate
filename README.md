# Jemplate for jQuery

> Render [Jemplate](http://www.jemplate.net) templates using jQuery syntax.

[![Build Status](https://travis-ci.org/nebulous/jquery-jemplate.png)](https://travis-ci.org/nebulous/jquery-jemplate)

## Getting Started

Download the [production version][min] or the [development version][max].
[min]: https://raw.githubusercontent.com/nebulous/jquery-jemplate/master/dist/jquery.jquery-jemplate.min.js
[max]: https://raw.githubusercontent.com/nebulous/jquery-jemplate/master/dist/jquery.jquery-jemplate.js

In your web page:

```html
<div id="someid"></div>

<script src="Jemplate.js"></script>
<script src="jemplates.js"></script>
<script src="jquery.js"></script>
<script src="dist/jquery-jemplate.min.js"></script>
<script>
	$('#someid').jemplate('the_template.html',{ some:"data", to:"render", in:['the','template'] });
</script>
```


## License

MIT © John Lifsey
