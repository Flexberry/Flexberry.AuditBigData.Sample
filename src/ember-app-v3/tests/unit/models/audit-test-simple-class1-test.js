import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-test-simple-class1', 'Unit | Model | audit-test-simple-class1', {
  // Specify the other units that are required for this test.
  needs: [
    'model:audit-test-simple-class1',
    'model:audit-test-simple-class2',
    'model:audit-test-simple-class3',
    'model:audit-test-simple-class4',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
