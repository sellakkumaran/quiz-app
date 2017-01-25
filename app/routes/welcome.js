import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  stats: storageFor('stats'),
  model() {
    return this.store.findAll('question');
  },

  setupController(controller, model){
    controller.set('stats.totalQuestions', model.get('length'));
  }
});
