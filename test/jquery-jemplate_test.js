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
    expect(8);
    ok($('.jemplate').jemplate('test.tt', { name:'test0' }).text().match('Hello test0'), 'multiple element render');
    ok($('#test1').jemplate('test.tt').text().match('Hello data element.'),'single element render with html data');
    ok($('#test1').jemplate('test.tt', { name:'data passed' }).text().match('Hello data passed.'),'single element render with passed data');
    ok($('#test1').jemplate({ jemplate:'test.tt', name:'as object' }).text().match('Hello as object.'),'single element render from object config');
    ok($('#test2').jemplate({ name:'data passed' }).text().match('Hello data passed.'),'template specified in html');
    ok($('#test3').jemplate().text(), 'Hello data element.','template and data specified in html');
    ok($('#test3').jemplate({ method:'append', name:'appended' }).text().match(/Hello data element\.\n?Hello appended./),'append method');
    ok($('#test4').jemplate().text().match('some default'),'argument-free render works');
  });

  asyncTest('ajax', function(assert) {
    expect(2);
    stop(1);
    $('.remote').jemplate();
    $('#luke').jemplate('test.tt','/test/luke.json');
    setTimeout(function() { //Don't get fancy. Just wait a tick for template to render
      assert.ok($('.remote').text().match('Darth Vader'),'Darth loads remotely');
      assert.ok($('#luke').text().match('Luke Skywalker'),'Luke loads remotely');
      start(2);
    },500);
  });

}(jQuery));
