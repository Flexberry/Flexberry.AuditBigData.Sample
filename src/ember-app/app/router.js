import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-flexberry-audit-big-data-audit-record-l');
  this.route('new-platform-flexberry-audit-big-data-audit-record-e',
    { path: 'new-platform-flexberry-audit-big-data-audit-record-e/:id' });

  this.route('flexberry-sample-audit-big-data-class1-l');
  this.route('flexberry-sample-audit-big-data-class1-e',
  { path: 'flexberry-sample-audit-big-data-class1-e/:id' });
  this.route('flexberry-sample-audit-big-data-class1-e.new',
  { path: 'flexberry-sample-audit-big-data-class1-e/new' });
  this.route('flexberry-sample-audit-big-data-class2-l');
  this.route('flexberry-sample-audit-big-data-class2-e',
  { path: 'flexberry-sample-audit-big-data-class2-e/:id' });
  this.route('flexberry-sample-audit-big-data-class2-e.new',
  { path: 'flexberry-sample-audit-big-data-class2-e/new' });
  this.route('flexberry-sample-audit-big-data-class4-l');
  this.route('flexberry-sample-audit-big-data-class4-e',
  { path: 'flexberry-sample-audit-big-data-class4-e/:id' });
  this.route('flexberry-sample-audit-big-data-class4-e.new',
  { path: 'flexberry-sample-audit-big-data-class4-e/new' });
});

export default Router;
