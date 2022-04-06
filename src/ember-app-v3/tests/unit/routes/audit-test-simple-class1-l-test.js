import { moduleFor, test } from 'ember-qunit';

moduleFor('route:audit-test-simple-class1-l', 'Unit | Route | audit-test-simple-class1-l', {
  // Specify the other units that are required for this test.
  needs: [
    'service:cols-config-menu',
    'service:form-load-time-tracker',
    'service:objectlistview-events',
    'service:app-state',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
