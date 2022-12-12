import {
  defineNamespace,
  defineProjections,
  Model as Class3Mixin
} from '../mixins/regenerated/models/flexberry-sample-audit-big-data-class3';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, Class3Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
