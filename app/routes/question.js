import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  stats: storageFor('stats'),
  model(params){
    let usr = this.get('stats.user');
    if (usr === ""){
      this.set('stats.startPage',params.q_id);
      this.transitionTo('welcome');
    }else{
      this.controllerFor('question').setTimerLimit();
    }
    return this.get('store').find('question',params.q_id);
  }
});
