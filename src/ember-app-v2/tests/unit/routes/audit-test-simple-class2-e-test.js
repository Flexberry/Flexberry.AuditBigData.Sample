import { moduleFor, test } from 'ember-qunit';

moduleFor('route:audit-test-simple-class2-e', 'Unit | Route | audit test simple class2 e', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
