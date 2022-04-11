import {
  defineNamespace,
  defineProjections,
  Model as Class1Mixin
} from '../mixins/regenerated/models/audit-test-simple-class1';

import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, Class1Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
