import { moduleForModel, test } from 'ember-qunit';

moduleForModel('flexberry-sample-audit-big-data-class2', 'Unit | Serializer | flexberry-sample-audit-big-data-class2', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:flexberry-sample-audit-big-data-class2',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:flexberry-sample-audit-big-data-class1',
    'model:flexberry-sample-audit-big-data-class2',
    'model:flexberry-sample-audit-big-data-class3',
    'model:flexberry-sample-audit-big-data-class4',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
