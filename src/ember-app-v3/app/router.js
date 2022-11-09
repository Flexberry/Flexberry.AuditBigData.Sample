import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-flexberry-audit-big-data-audit-record-l');
  this.route('new-platform-flexberry-audit-big-data-audit-record-e',
    { path: 'new-platform-flexberry-audit-big-data-audit-record-e/:id' });
	
  this.route('audit-test-simple-class1-l');
  this.route('audit-test-simple-class1-e',
  { path: 'audit-test-simple-class1-e/:id' });
  this.route('audit-test-simple-class1-e.new',
  { path: 'audit-test-simple-class1-e/new' });
  this.route('audit-test-simple-class2-l');
  this.route('audit-test-simple-class2-e',
  { path: 'audit-test-simple-class2-e/:id' });
  this.route('audit-test-simple-class2-e.new',
  { path: 'audit-test-simple-class2-e/new' });
  this.route('audit-test-simple-class3-l');
  this.route('audit-test-simple-class3-d',
  { path: 'audit-test-simple-class3-d/:id' });
  this.route('audit-test-simple-class3-d.new',
  { path: 'audit-test-simple-class3-d/new' });
  this.route('audit-test-simple-class4-l');
  this.route('audit-test-simple-class4-e',
  { path: 'audit-test-simple-class4-e/:id' });
  this.route('audit-test-simple-class4-e.new',
  { path: 'audit-test-simple-class4-e/new' });
});

export default Router;
