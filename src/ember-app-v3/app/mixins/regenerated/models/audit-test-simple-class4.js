import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  field41: DS.attr('string'),
  field42: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string')
});

export let ValidationRules = {
  field41: {
    descriptionKey: 'models.audit-test-simple-class4.validations.field41.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field42: {
    descriptionKey: 'models.audit-test-simple-class4.validations.field42.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.audit-test-simple-class4.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.audit-test-simple-class4.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.audit-test-simple-class4.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.audit-test-simple-class4.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
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
