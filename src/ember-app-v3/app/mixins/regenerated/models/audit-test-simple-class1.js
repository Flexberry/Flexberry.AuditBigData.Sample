import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  field11: DS.attr('string'),
  field12: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string')
});

export let ValidationRules = {
  field11: {
    descriptionKey: 'models.audit-test-simple-class1.validations.field11.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field12: {
    descriptionKey: 'models.audit-test-simple-class1.validations.field12.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.audit-test-simple-class1.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.audit-test-simple-class1.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.audit-test-simple-class1.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.audit-test-simple-class1.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
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
