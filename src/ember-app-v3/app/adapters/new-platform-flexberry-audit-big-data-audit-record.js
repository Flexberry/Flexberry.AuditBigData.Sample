import AdapterMixin from 'ember-flexberry-data/mixins/adapter';
import OdataAdapter from 'ember-flexberry-data/adapters/odata';
import { getOwner } from '@ember/application';
 
export default OdataAdapter.extend(AdapterMixin, {
 
    init: function () {
      this._super(...arguments);
      const config = getOwner(this).resolveRegistration('config:environment');
      const auditBigDataOdataHost = config.APP.auditBigDataOdata || '';
      this.set('host', auditBigDataOdataHost);
    },
});
