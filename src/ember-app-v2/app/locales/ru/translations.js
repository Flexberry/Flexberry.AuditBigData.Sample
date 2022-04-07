import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';
import EmberFlexberrySecurityTranslations from 'ember-flexberry-security/locales/ru/translations';

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
Ember.$.extend(true, translations, EmberFlexberryTranslations, EmberFlexberrySecurityTranslations);

Ember.$.extend(true, translations, {
  models: {
    'audit-test-simple-class1': AuditTestSimpleClass1Model,
    'audit-test-simple-class2': AuditTestSimpleClass2Model,
    'audit-test-simple-class3': AuditTestSimpleClass3Model,
    'audit-test-simple-class4': AuditTestSimpleClass4Model,
  },

  'application-name': 'Tests audit flexberry',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },
    'new-platform-flexberry-audit-big-data-audit-record-l': {
      caption: 'Аудит операций пользователей'
    },
    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tests audit flexberry',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tests audit flexberry',
          title: 'Tests audit flexberry'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'flexberry-audit-tests': {
          caption: 'Flexberry.Audit.Tests',
          title: 'Flexberry.Audit.Tests',
          'audit-test-simple-class4-l': {
            caption: 'Class4',
            title: ''
          },
          'audit-test-simple-class1-l': {
            caption: 'Class1',
            title: ''
          },
          'audit-test-simple-class2-l': {
            caption: 'Class2',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
