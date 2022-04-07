import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-test-simple-class2', 'Unit | Model | audit-test-simple-class2', {
  // Specify the other units that are required for this test.
  needs: [
    'model:audit-test-simple-class1',
    'model:audit-test-simple-class2',
    'model:audit-test-simple-class3',
    'model:audit-test-simple-class4'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
