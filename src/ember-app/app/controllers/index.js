import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.caption'),
          title: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.title'),
          children: [{
            link: 'flexberry-sample-audit-big-data-class4-l',
            caption: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.flexberry-sample-audit-big-data-class4-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.flexberry-sample-audit-big-data-class4-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'flexberry-sample-audit-big-data-class1-l',
            caption: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.flexberry-sample-audit-big-data-class1-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.flexberry-sample-audit-big-data-class1-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'flexberry-sample-audit-big-data-class2-l',
            caption: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.flexberry-sample-audit-big-data-class2-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-sample-audit-big-data.flexberry-sample-audit-big-data-class2-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})