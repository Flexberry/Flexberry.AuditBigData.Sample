import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editor: DS.attr('string'),
  editTime: DS.attr('date'),
  field11: DS.attr('string'),
  field12: DS.attr('string')
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class1.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class1.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class1.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class1.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  field11: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class1.validations.field11.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field12: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class1.validations.field12.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'flexberry-sample-audit-big-data-class1', {
    field11: attr('Field11', { index: 0 }),
    field12: attr('Field12', { index: 1 }),
    createTime: attr('Create time', { index: 2 }),
    creator: attr('Creator', { index: 3 }),
    editTime: attr('Edit time', { index: 4 }),
    editor: attr('Editor', { index: 5 })
  });

  modelClass.defineProjection('Class1E', 'flexberry-sample-audit-big-data-class1', {
    field11: attr('Field11', { index: 0 }),
    field12: attr('Field12', { index: 1 })
  });

  modelClass.defineProjection('Class1L', 'flexberry-sample-audit-big-data-class1', {
    field11: attr('Field11', { index: 0 }),
    field12: attr('Field12', { index: 1 }),
    createTime: attr('', { index: 2 }),
    creator: attr('', { index: 3 }),
    editTime: attr('', { index: 4 }),
    editor: attr('', { index: 5 })
  });
};
