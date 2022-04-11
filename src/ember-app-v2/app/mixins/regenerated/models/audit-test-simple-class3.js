import Ember from 'ember';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';

export let Model = Ember.Mixin.create({
  field31: DS.attr('string'),
  field32: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  class2: DS.belongsTo('audit-test-simple-class2', { inverse: 'class3', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      class2: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineNamespace = function (modelClass) {
  modelClass.reopenClass({
    namespace: 'AuditTestSimple',
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'audit-test-simple-class3', {
    field32: attr('', { index: 0 }),
    createTime: attr('', { index: 1 }),
    creator: attr('', { index: 2 }),
    editTime: attr('', { index: 3 }),
    editor: attr('', { index: 4 }),
    class2: belongsTo('audit-test-simple-class2', '', {
      field21: attr('', { index: 6 }),
      field22: attr('', { index: 7 }),
      class1: belongsTo('audit-test-simple-class1', '', {
        field11: attr('', { index: 9 }),
        field12: attr('', { index: 10 })
      }, { index: 8 })
    }, { index: 5 })
  });

  modelClass.defineProjection('Class3E', 'audit-test-simple-class3', {
    field31: attr('Поле31', { index: 0 }),
    field32: attr('Поле32', { index: 1 })
  });
};
