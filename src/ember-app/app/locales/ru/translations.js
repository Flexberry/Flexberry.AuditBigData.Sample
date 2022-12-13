import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
import EmberFlexberrySecurityTranslations from 'ember-flexberry-security/locales/ru/translations';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations, EmberFlexberrySecurityTranslations);

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
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
        'application-name': 'Flexberry sample audit big data',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberry sample audit big data',
          title: 'Flexberry sample audit big data'
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
