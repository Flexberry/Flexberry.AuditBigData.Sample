import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import AuditTestSimpleClass1LForm from './forms/audit-test-simple-class1-l';
import AuditTestSimpleClass2LForm from './forms/audit-test-simple-class2-l';
import AuditTestSimpleClass4LForm from './forms/audit-test-simple-class4-l';
import AuditTestSimpleClass1EForm from './forms/audit-test-simple-class1-e';
import AuditTestSimpleClass2EForm from './forms/audit-test-simple-class2-e';
import AuditTestSimpleClass4EForm from './forms/audit-test-simple-class4-e';
import AuditTestSimpleClass1Model from './models/audit-test-simple-class1';
import AuditTestSimpleClass2Model from './models/audit-test-simple-class2';
import AuditTestSimpleClass3Model from './models/audit-test-simple-class3';
import AuditTestSimpleClass4Model from './models/audit-test-simple-class4';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'audit-test-simple-class1': AuditTestSimpleClass1Model,
    'audit-test-simple-class2': AuditTestSimpleClass2Model,
    'audit-test-simple-class3': AuditTestSimpleClass3Model,
    'audit-test-simple-class4': AuditTestSimpleClass4Model,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'flexberry-audit-tests': {
          caption: 'flexberry-audit-tests',
          title: 'flexberry-audit-tests',
          'audit-test-simple-class4-l': {
            caption: 'audit-test-simple-class4-l',
            title: 'audit-test-simple-class4-l'
          },
          'audit-test-simple-class1-l': {
            caption: 'audit-test-simple-class1-l',
            title: 'audit-test-simple-class1-l'
          },
          'audit-test-simple-class2-l': {
            caption: 'audit-test-simple-class2-l',
            title: 'audit-test-simple-class2-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'audit-test-simple-class1-l': AuditTestSimpleClass1LForm,
    'audit-test-simple-class2-l': AuditTestSimpleClass2LForm,
    'audit-test-simple-class4-l': AuditTestSimpleClass4LForm,
    'audit-test-simple-class1-e': AuditTestSimpleClass1EForm,
    'audit-test-simple-class2-e': AuditTestSimpleClass2EForm,
    'audit-test-simple-class4-e': AuditTestSimpleClass4EForm,
  },

});

export default translations;
