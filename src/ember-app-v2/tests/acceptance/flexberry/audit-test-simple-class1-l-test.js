import { test } from 'qunit';

import moduleForAcceptance from 'ember-app-v2/tests/helpers/module-for-acceptance';

moduleForAcceptance('[AGAT] Acceptance | audit test simple class1 l');

test('testing audit-test-simple-class1-l', function(assert) {
  visit('/audit-test-simple-class1-l');

  checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, [
    'refreshButton',
    'createNewButton',
    'colsConfigButton',
  ]);

  andThen(() => {
    const listNotEmpty = find('.object-list-view-helper-column').length > 0;

    if (listNotEmpty) {
      checkOlvSortOnAllColumns('[data-test-component=flexberry-objectlistview]', null, assert);
    }

    const controller = this.application.__container__.lookup('controller:' + currentRouteName());
    const newFormRoute = controller.get('editFormRoute') + '.new';
    goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);
    checkLookupDialogs();

    click('.close-button');

    if (listNotEmpty) {
      click('[data-test-component=flexberry-objectlistview] td.field:first');
      checkLookupDialogs();
    }
  });
});
