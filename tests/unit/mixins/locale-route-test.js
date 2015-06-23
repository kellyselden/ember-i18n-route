import Ember from 'ember';
import LocaleRouteMixin from '../../../mixins/locale-route';
import { module, test } from 'qunit';

module('Unit | Mixin | locale route');

// Replace this with your real tests.
test('it works', function(assert) {
  var LocaleRouteObject = Ember.Object.extend(LocaleRouteMixin);
  var subject = LocaleRouteObject.create();
  assert.ok(subject);
});
