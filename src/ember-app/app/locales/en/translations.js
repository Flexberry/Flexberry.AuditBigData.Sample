import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import AuditTestSimpleClass1LForm from './forms/audit-test-simple-class1-l';
import AuditTestSimpleClass2LForm from './forms/audit-test-simple-class2-l';
import AuditTestSimpleClass3LForm from './forms/audit-test-simple-class3-l';
import AuditTestSimpleClass4LForm from './forms/audit-test-simple-class4-l';
import AuditTestSimpleClass1EForm from './forms/audit-test-simple-class1-e';
import AuditTestSimpleClass2EForm from './forms/audit-test-simple-class2-e';
import AuditTestSimpleClass3DForm from './forms/audit-test-simple-class3-d';
import AuditTestSimpleClass4EForm from './forms/audit-test-simple-class4-e';
import AuditTestSimpleClass1Model from './models/audit-test-simple-class1';
import AuditTestSimpleClass2Model from './models/audit-test-simple-class2';
import AuditTestSimpleClass3Model from './models/audit-test-simple-class3';
import AuditTestSimpleClass4Model from './models/audit-test-simple-class4';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
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
	
	login: {
      caption: 'Login',
      logout: 'Logout',
      back: 'Back',
      login: 'Login',
      password: 'Password',
      'you-logged-as': 'You logged as: "{{login}}".',
      errors: {
        'empty-login': 'Login can not be empty.',
        'empty-password': 'Password can not be empty.',
        'server-error': 'Not response from server.',
        'incorrect-auth-data': 'Wrong login or password.',
        'login-please': 'Please, login.',
        'unknown-error': 'Oh, something went wrong...',
      },
    },

    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l': {
      caption: 'Audit entities'
    },

    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e': {
      caption: 'Audit entity',
      'objectPrimaryKey-caption': 'Object Primary Key',
      'operationTime-caption': 'Operation time',
      'operationType-caption': 'Operation type',
      'executionResult-caption': 'Execution result',
      'source-caption': 'Source',
      'createTime-caption': 'Create time',
      'creator-caption': 'Creator',
      'editTime-caption': 'Edit time',
      'editor-caption': 'Editor',
      'objectType-caption': 'Object type',
      'user-caption': 'User',
      'auditFields-caption': 'Audit fields'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
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
          },
          'audit-test-simple-class3-l': {
            caption: 'audit-test-simple-class3-l',
            title: 'audit-test-simple-class3-l'
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
    'audit-test-simple-class3-l': AuditTestSimpleClass3LForm,
    'audit-test-simple-class4-l': AuditTestSimpleClass4LForm,
    'audit-test-simple-class1-e': AuditTestSimpleClass1EForm,
    'audit-test-simple-class2-e': AuditTestSimpleClass2EForm,
    'audit-test-simple-class3-d': AuditTestSimpleClass3DForm,
    'audit-test-simple-class4-e': AuditTestSimpleClass4EForm,
  },

});

export default translations;
