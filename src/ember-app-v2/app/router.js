import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
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
  // Аудит BigData.
  this.route('new-platform-flexberry-audit-big-data-audit-record-l');
  this.route('new-platform-flexberry-audit-big-data-audit-record-e',
    { path: 'new-platform-flexberry-audit-big-data-audit-record-e/:id' });
});

export default Router;
