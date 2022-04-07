import {
  defineNamespace,
  defineProjections,
  Model as Class2Mixin
} from '../mixins/regenerated/models/audit-test-simple-class2';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Class2Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
