import Ember from 'ember';
import DS from 'ember-data';
import { attr } from 'ember-flexberry-data/utils/attributes';

export let Model = Ember.Mixin.create({
  field11: DS.attr('string'),
  field12: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
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
  modelClass.defineProjection('AuditView', 'audit-test-simple-class1', {
    field11: attr('', { index: 0 }),
    field12: attr('', { index: 1 }),
    createTime: attr('', { index: 2 }),
    creator: attr('', { index: 3 }),
    editTime: attr('', { index: 4 }),
    editor: attr('', { index: 5 })
  });

  modelClass.defineProjection('Class1E', 'audit-test-simple-class1', {
    field11: attr('Поле11', { index: 0 }),
    field12: attr('Поле12', { index: 1 })
  });

  modelClass.defineProjection('Class1L', 'audit-test-simple-class1', {
    field11: attr('Поле11', { index: 0 }),
    field12: attr('Поле12', { index: 1 })
  });
};
