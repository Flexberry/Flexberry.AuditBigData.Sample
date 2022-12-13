import {
  defineNamespace,
  defineProjections,
  Model as Class1Mixin
} from '../mixins/regenerated/models/flexberry-sample-audit-big-data-class1';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, Class1Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
