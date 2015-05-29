/* Simple Jemplate plugin for jQuery
 * Copyright (c) 2015 John Lifsey
 * Licensed under the MIT license.
 */
(function($) {
	$.fn.jemplate = function(tmplin, datain) {
		var data_url;
		if (typeof(tmplin) == "object") {
			datain = tmplin.stash || tmplin || {};
			tmplin = datain.jemplate || '';
		}
		if (typeof(datain) == "string") {
			data_url = datain;
			datain = {};
		}

		return this.each(function(idx, obj) {
			var $obj = $(obj);
			var data = $.extend({}, $obj.data(), datain);
			var tmpl = tmplin || data['jemplate'];
			var method = data['method'] || 'html';

			if (typeof tmpl === undefined) return this;
			if (data_url) {
				$.getJSON(data_url, function(data) {
					var output = Jemplate.process(tmpl, data);
					$obj[method](output);
				});
			} else {
				var output = Jemplate.process(tmpl, data);
				$obj[method](output);
			}
		});
	}
}(jQuery));
