import { moduleForModel, test } from 'ember-qunit';

moduleForModel('flexberry-sample-audit-big-data-class3', 'Unit | Model | flexberry-sample-audit-big-data-class3', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
