(function ($) {
  module('jQuery#jqueryJemplate', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.jqueryJemplate(), this.elems, 'should be chainable');
  });

  test('is jqueryJemplate', function () {
    expect(1);
    strictEqual(this.elems.jqueryJemplate().text(), 'jqueryJemplate0jqueryJemplate1jqueryJemplate2', 'should be jqueryJemplate');
  });

}(jQuery));
