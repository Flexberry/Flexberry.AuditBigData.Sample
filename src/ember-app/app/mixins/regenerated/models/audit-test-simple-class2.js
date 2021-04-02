import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  field21: DS.attr('string'),
  field22: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  class1: DS.belongsTo('audit-test-simple-class1', { inverse: null, async: false }),
  class4: DS.belongsTo('audit-test-simple-class4', { inverse: null, async: false }),
  class3: DS.hasMany('audit-test-simple-class3', { inverse: 'class2', async: false })
});

export let ValidationRules = {
  field21: {
    descriptionKey: 'models.audit-test-simple-class2.validations.field21.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  field22: {
    descriptionKey: 'models.audit-test-simple-class2.validations.field22.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.audit-test-simple-class2.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.audit-test-simple-class2.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.audit-test-simple-class2.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.audit-test-simple-class2.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class1: {
    descriptionKey: 'models.audit-test-simple-class2.validations.class1.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class4: {
    descriptionKey: 'models.audit-test-simple-class2.validations.class4.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class3: {
    descriptionKey: 'models.audit-test-simple-class2.validations.class3.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'audit-test-simple-class2', {
    field21: attr('', { index: 0 }),
    field22: attr('', { index: 1 }),
    class1: belongsTo('audit-test-simple-class1', 'Class1', {
      field11: attr('', { index: 3 }),
      field12: attr('', { index: 4 })
    }, { index: 2 }),
    class4: belongsTo('audit-test-simple-class4', '', {
      field41: attr('', { index: 6 }),
      field42: attr('', { index: 7 })
    }, { index: 5 }),
    createTime: attr('', { index: 8 }),
    creator: attr('', { index: 9 }),
    editTime: attr('', { index: 10 }),
    editor: attr('', { index: 11 }),
    class3: hasMany('audit-test-simple-class3', 'Class3', {
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
    })
  });

  modelClass.defineProjection('Class2E', 'audit-test-simple-class2', {
    field21: attr('Поле21', { index: 0 }),
    field22: attr('Поле22', { index: 1 }),
    class1: belongsTo('audit-test-simple-class1', 'Class1', {
      field11: attr('Поле11', { index: 3 }),
      field12: attr('Поле12', { index: 4 })
    }, { index: 2 }),
    class4: belongsTo('audit-test-simple-class4', 'Class4', {
      field41: attr('Поле41', { index: 6 }),
      field42: attr('Поле42', { index: 7 })
    }, { index: 5 }),
    class3: hasMany('audit-test-simple-class3', 'Class3', {
      field31: attr('Поле31', { index: 0 }),
      field32: attr('Поле32', { index: 1 })
    })
  });

  modelClass.defineProjection('Class2L', 'audit-test-simple-class2', {
    field21: attr('Поле21', { index: 0 }),
    field22: attr('Поле22', { index: 1 }),
    class1: belongsTo('audit-test-simple-class1', '', {
      field11: attr('Поле11', { index: 3 }),
      field12: attr('Поле12', { index: 4 })
    }, { index: 2 })
  });
};
