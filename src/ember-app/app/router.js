import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e',
    { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e/:id' });

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
  this.route('audit-test-simple-class4-l');
  this.route('audit-test-simple-class4-e',
  { path: 'audit-test-simple-class4-e/:id' });
  this.route('audit-test-simple-class4-e.new',
  { path: 'audit-test-simple-class4-e/new' });
  this.route('login');
});

export default Router;
