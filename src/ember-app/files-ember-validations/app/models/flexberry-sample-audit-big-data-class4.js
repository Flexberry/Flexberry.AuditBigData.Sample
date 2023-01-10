import {
  defineNamespace,
  defineProjections,
  Model as Class4Mixin
} from '../mixins/regenerated/models/flexberry-sample-audit-big-data-class4';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import AuditModelMixin from 'ember-flexberry-data/mixins/audit-model'; 

let Model = EmberFlexberryDataModel.extend(AuditModelMixin, Class4Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
