QUnit.test('methods.destroy: before built', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(4);

  return new Cropper(image, {
    build: function () {
      var cropper = this.cropper;

      assert.ok(typeof cropper === 'object');
      assert.notOk(util.hasClass(image, 'cropper-hidden'));

      cropper.destroy();
      assert.ok(typeof this.cropper === 'undefined');
      assert.notOk(util.hasClass(image, 'cropper-hidden'));

      done();
    }
  });
});

QUnit.test('methods.destroy: after built', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(4);

  return new Cropper(image, {
    built: function () {
      var cropper = this.cropper;

      assert.ok(typeof cropper === 'object');
      assert.ok(util.hasClass(image, 'cropper-hidden'));

      cropper.destroy();
      assert.ok(typeof this.cropper === 'undefined');
      assert.notOk(util.hasClass(image, 'cropper-hidden'));

      done();
    }
  });
});
