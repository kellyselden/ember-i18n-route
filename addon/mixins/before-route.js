import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel() {
    this.transitionToLocale(this.get('localeRoute') || 'home');

    return this._super(...arguments);
  },
  transitionToLocale(routeName) {
    this.transitionTo(routeName, this.get('i18n.locale'));
  }
});
