(function ($) {
  module('jQuery#jemplate', {
    setup: function () {
      this.elems = $('.jemplate');
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.jemplate('test.tt'), this.elems, 'should be chainable');
  });

  test('render', function () {
    expect(4);
    ok($('.jemplate').jemplate('test.tt', { name:'test0' }).text().match('Hello test0'), 'multiple element render');
    strictEqual($('#test1').jemplate('test.tt').text(), 'Hello data element.','single element render with html data');
    strictEqual($('#test1').jemplate('test.tt', { name:'data passed' }).text(), 'Hello data passed.','single element render with passed data');
    strictEqual($('#test1').jemplate({ jemplate:'test.tt', name:'as object' }).text(), 'Hello as object.','single element render from object config');
  });

}(jQuery));
