import {
  defineNamespace,
  defineProjections,
  Model as Class4Mixin
} from '../mixins/regenerated/models/audit-test-simple-class4';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Class4Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
