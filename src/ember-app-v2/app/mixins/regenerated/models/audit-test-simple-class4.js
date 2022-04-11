import Ember from 'ember';
import DS from 'ember-data';
import { attr } from 'ember-flexberry-data/utils/attributes';

export let Model = Ember.Mixin.create({
  field41: DS.attr('string'),
  field42: DS.attr('string'),
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
  modelClass.defineProjection('AuditView', 'audit-test-simple-class4', {
    field41: attr('Field41', { index: 0 }),
    field42: attr('Field42', { index: 1 }),
    createTime: attr('', { index: 2 }),
    creator: attr('', { index: 3 }),
    editTime: attr('', { index: 4 }),
    editor: attr('', { index: 5 })
  });

  modelClass.defineProjection('Class4E', 'audit-test-simple-class4', {
    field41: attr('Поле41', { index: 0 }),
    field42: attr('Поле42', { index: 1 })
  });

  modelClass.defineProjection('Class4L', 'audit-test-simple-class4', {
    field41: attr('Поле41', { index: 0 }),
    field42: attr('Поле42', { index: 1 })
  });
};
