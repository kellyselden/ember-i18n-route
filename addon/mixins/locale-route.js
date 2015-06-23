import Ember from 'ember';

export default Ember.Mixin.create({
  model(params, transition) {
    if (this.get('i18n.locales').indexOf(params.locale) === -1) {
      this.transitionTo(`/${this.get('i18n.locale')}${window.location.pathname}`);
    }
    if (params.locale) {
      transition.send('updateLocale', params.locale);
    }
    return this._super(...arguments);
  },
  actions: {
    updateLocale(locale) {
      Ember.run.scheduleOnce('afterRender', this, function() {
        this.set('i18n.locale', locale);
      });
    },
    changeLocale(locale, routeName, paramName) {
      var currentRouteName = this.controllerFor('application').get('currentRouteName');
      var routeModel = { };
      (routeModel[routeName || 'home'] = { })[paramName || 'locale'] = locale;
      this.transitionToDynamic(currentRouteName, routeModel);
    }
  }
});
