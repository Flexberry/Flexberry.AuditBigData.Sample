import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('class1', 'Class1s');
inflector.irregular('class2', 'Class2s');
inflector.irregular('class3', 'Class3s');
inflector.irregular('class4', 'Class4s');

inflector.irregular('entity', 'entitys');
inflector.irregular('field', 'fields');

inflector.irregular('access', 'accesss');
inflector.irregular('agent', 'agents');
inflector.irregular('filter', 'filters');
inflector.irregular('impersonalization', 'impersonalizations');
inflector.irregular('attribute', 'attributes');
inflector.irregular('group', 'groups');
inflector.irregular('operation', 'operations');
inflector.irregular('role', 'roles');
inflector.irregular('view', 'views');
inflector.irregular('permition', 'permitions');
inflector.irregular('session', 'sessions');
inflector.irregular('subject', 'subjects');

export default {};
