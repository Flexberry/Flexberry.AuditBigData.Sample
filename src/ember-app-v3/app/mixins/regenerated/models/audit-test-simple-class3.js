import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  field31: DS.attr('string'),
  field32: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  class2: DS.belongsTo('audit-test-simple-class2', { inverse: 'class3', async: false })
});

export let ValidationRules = {
  field31: {
    descriptionKey: 'models.audit-test-simple-class3.validations.field31.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field32: {
    descriptionKey: 'models.audit-test-simple-class3.validations.field32.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.audit-test-simple-class3.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.audit-test-simple-class3.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.audit-test-simple-class3.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.audit-test-simple-class3.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class2: {
    descriptionKey: 'models.audit-test-simple-class3.validations.class2.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
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

  modelClass.defineProjection('Class3D', 'audit-test-simple-class3', {
    field31: attr('Поле31', { index: 0 }),
    field32: attr('Поле32', { index: 1 }),
    class2: belongsTo('audit-test-simple-class2', '', {

    }, { index: 2 })
  });

  modelClass.defineProjection('Class3L', 'audit-test-simple-class3', {
    field31: attr('', { index: 0 }),
    field32: attr('', { index: 1 })
  });
};
