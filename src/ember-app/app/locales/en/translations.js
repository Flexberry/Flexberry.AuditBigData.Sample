import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import FlexberrySampleAuditBigDataClass1LForm from './forms/flexberry-sample-audit-big-data-class1-l';
import FlexberrySampleAuditBigDataClass2LForm from './forms/flexberry-sample-audit-big-data-class2-l';
import FlexberrySampleAuditBigDataClass4LForm from './forms/flexberry-sample-audit-big-data-class4-l';
import FlexberrySampleAuditBigDataClass1EForm from './forms/flexberry-sample-audit-big-data-class1-e';
import FlexberrySampleAuditBigDataClass2EForm from './forms/flexberry-sample-audit-big-data-class2-e';
import FlexberrySampleAuditBigDataClass4EForm from './forms/flexberry-sample-audit-big-data-class4-e';
import FlexberrySampleAuditBigDataClass1Model from './models/flexberry-sample-audit-big-data-class1';
import FlexberrySampleAuditBigDataClass2Model from './models/flexberry-sample-audit-big-data-class2';
import FlexberrySampleAuditBigDataClass3Model from './models/flexberry-sample-audit-big-data-class3';
import FlexberrySampleAuditBigDataClass4Model from './models/flexberry-sample-audit-big-data-class4';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'flexberry-sample-audit-big-data-class1': FlexberrySampleAuditBigDataClass1Model,
    'flexberry-sample-audit-big-data-class2': FlexberrySampleAuditBigDataClass2Model,
    'flexberry-sample-audit-big-data-class3': FlexberrySampleAuditBigDataClass3Model,
    'flexberry-sample-audit-big-data-class4': FlexberrySampleAuditBigDataClass4Model
  },

  'application-name': 'Flexberry sample audit big data',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
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
        'application-name': 'Flexberry sample audit big data',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberry sample audit big data',
          title: 'Flexberry sample audit big data'
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
        'flexberry-sample-audit-big-data': {
          caption: 'FlexberrySampleAuditBigData',
          title: 'FlexberrySampleAuditBigData',
          'flexberry-sample-audit-big-data-class4-l': {
            caption: 'Class4',
            title: ''
          },
          'flexberry-sample-audit-big-data-class1-l': {
            caption: 'Class1',
            title: ''
          },
          'flexberry-sample-audit-big-data-class2-l': {
            caption: 'Class2',
            title: ''
          }
        }
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
    'flexberry-sample-audit-big-data-class1-l': FlexberrySampleAuditBigDataClass1LForm,
    'flexberry-sample-audit-big-data-class2-l': FlexberrySampleAuditBigDataClass2LForm,
    'flexberry-sample-audit-big-data-class4-l': FlexberrySampleAuditBigDataClass4LForm,
    'flexberry-sample-audit-big-data-class1-e': FlexberrySampleAuditBigDataClass1EForm,
    'flexberry-sample-audit-big-data-class2-e': FlexberrySampleAuditBigDataClass2EForm,
    'flexberry-sample-audit-big-data-class4-e': FlexberrySampleAuditBigDataClass4EForm
  },

});

export default translations;
