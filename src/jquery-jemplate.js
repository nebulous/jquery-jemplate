/* Simple Jemplate plugin for jQuery
 * Copyright (c) 2015 John Lifsey
 * Licensed under the MIT license.
 */
(function($) {
	$.fn.jemplate = function(tmplin, datain, methodin) {
		if (typeof(tmplin) === "object") {
			datain = tmplin.stash || tmplin || {};
			tmplin = datain.jemplate || '';
		}
		if (typeof(datain) === "string") {
			datain = { data_url:datain };
		}
		return this.each(function(idx, obj) {
			var $obj = $(obj);
			var data = $.extend({}, $obj.data(), datain);
			var tmpl = tmplin || data['jemplate'];
			var method = methodin || data['method'] || 'html';
			var data_url = data['data_url'];
			data = data_url || data;

			if (typeof tmpl === undefined) { return this; }
			var def = $.Deferred();
			Jemplate.process(tmpl, data, function(output) { $obj[method](output); def.resolve(output); });
			return def.promise();
		});
	};
}(jQuery));
