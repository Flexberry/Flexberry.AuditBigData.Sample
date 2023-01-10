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
  field41: DS.attr('string'),
  field42: DS.attr('string')
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class4.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class4.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class4.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class4.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  field41: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class4.validations.field41.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field42: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class4.validations.field42.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'flexberry-sample-audit-big-data-class4', {
    field41: attr('Field41', { index: 0 }),
    field42: attr('Field42', { index: 1 }),
    createTime: attr('Create time', { index: 2 }),
    creator: attr('Creator', { index: 3 }),
    editTime: attr('Edit time', { index: 4 }),
    editor: attr('Editor', { index: 5 })
  });

  modelClass.defineProjection('Class4E', 'flexberry-sample-audit-big-data-class4', {
    field41: attr('Field41', { index: 0 }),
    field42: attr('Field42', { index: 1 })
  });

  modelClass.defineProjection('Class4L', 'flexberry-sample-audit-big-data-class4', {
    field41: attr('Field41', { index: 0 }),
    field42: attr('Field42', { index: 1 }),
    createTime: attr('', { index: 2 }),
    creator: attr('', { index: 3 }),
    editTime: attr('', { index: 4 }),
    editor: attr('', { index: 5 })
  });
};
