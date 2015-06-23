import Ember from 'ember';
import BeforeRouteMixin from '../../../mixins/before-route';
import { module, test } from 'qunit';

module('Unit | Mixin | before route');

// Replace this with your real tests.
test('it works', function(assert) {
  var BeforeRouteObject = Ember.Object.extend(BeforeRouteMixin);
  var subject = BeforeRouteObject.create();
  assert.ok(subject);
});
