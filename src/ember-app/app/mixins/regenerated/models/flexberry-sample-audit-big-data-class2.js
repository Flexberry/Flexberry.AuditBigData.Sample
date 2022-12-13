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
  field21: DS.attr('string'),
  field22: DS.attr('string'),
  class1: DS.belongsTo('flexberry-sample-audit-big-data-class1', { inverse: null, async: false }),
  class4: DS.belongsTo('flexberry-sample-audit-big-data-class4', { inverse: null, async: false }),
  class3: DS.hasMany('flexberry-sample-audit-big-data-class3', { inverse: 'class2', async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editor: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  field21: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.field21.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field22: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.field22.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class1: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.class1.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class4: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.class4.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class3: {
    descriptionKey: 'models.flexberry-sample-audit-big-data-class2.validations.class3.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'flexberry-sample-audit-big-data-class2', {
    field21: attr('Field21', { index: 0 }),
    field22: attr('Field22', { index: 1 }),
    createTime: attr('Create time', { index: 2 }),
    creator: attr('Creator', { index: 3 }),
    editTime: attr('Edit time', { index: 4 }),
    editor: attr('Editor', { index: 5 }),
    class1: belongsTo('flexberry-sample-audit-big-data-class1', 'Class1', {
      field11: attr('Field11', { index: 7 })
    }, { index: 6 }),
    class4: belongsTo('flexberry-sample-audit-big-data-class4', 'Class4', {
      field41: attr('Field41', { index: 9 })
    }, { index: 8 }),
    class3: hasMany('flexberry-sample-audit-big-data-class3', 'Class3', {
      field31: attr('Field31', { index: 0 }),
      field32: attr('Field32', { index: 1 }),
      createTime: attr('Create time', { index: 2 }),
      creator: attr('Creator', { index: 3 }),
      editTime: attr('Edit time', { index: 4 }),
      editor: attr('Editor', { index: 5 })
    })
  });

  modelClass.defineProjection('Class2E', 'flexberry-sample-audit-big-data-class2', {
    field21: attr('Field21', { index: 0 }),
    field22: attr('Field22', { index: 1 }),
    class1: belongsTo('flexberry-sample-audit-big-data-class1', 'Class1', {
      field11: attr('Field11', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'field11' }),
    class4: belongsTo('flexberry-sample-audit-big-data-class4', 'Class4', {
      field41: attr('Field41', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'field41' }),
    class3: hasMany('flexberry-sample-audit-big-data-class3', 'Class3', {
      field31: attr('Field31', { index: 0 }),
      field32: attr('Field32', { index: 1 })
    })
  });

  modelClass.defineProjection('Class2L', 'flexberry-sample-audit-big-data-class2', {
    field21: attr('Field21', { index: 0 }),
    field22: attr('Field22', { index: 1 }),
    class1: belongsTo('flexberry-sample-audit-big-data-class1', 'Field11', {
      field11: attr('Field11', { index: 2 })
    }, { index: -1, hidden: true }),
    class4: belongsTo('flexberry-sample-audit-big-data-class4', 'Field41', {
      field41: attr('Field41', { index: 3 })
    }, { index: -1, hidden: true }),
    createTime: attr('', { index: 4 }),
    creator: attr('', { index: 5 }),
    editTime: attr('', { index: 6 }),
    editor: attr('', { index: 7 })
  });
};
