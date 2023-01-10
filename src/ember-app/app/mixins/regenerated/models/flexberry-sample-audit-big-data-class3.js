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
  field31: DS.attr('string'),
  field32: DS.attr('string'),
  class2: DS.belongsTo('flexberry-sample-audit-big-data-class2', { inverse: 'class3', async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class3.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class3.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class3.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class3.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  field31: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class3.validations.field31.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field32: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class3.validations.field32.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class2: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class3.validations.class2.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'flexberry-sample-audit-big-data-class3', {
    field31: attr('Field31', { index: 0 }),
    field32: attr('Field32', { index: 1 }),
    createTime: attr('Create time', { index: 2 }),
    creator: attr('Creator', { index: 3 }),
    editTime: attr('Edit time', { index: 4 }),
    editor: attr('Editor', { index: 5 })
  });

  modelClass.defineProjection('Class3E', 'flexberry-sample-audit-big-data-class3', {
    field31: attr('Field31', { index: 0 }),
    field32: attr('Field32', { index: 1 })
  });
};
