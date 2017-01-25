import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  stats: storageFor('stats'),
  beforeModel(transition){
    console.log(transition.params.q_id);
    let usr = this.get('stats.user');
    console.log(`username :${usr}`);
    if (usr === ""){
      this.transitionTo('welcome');
      console.log('redirected');
    }else{
      this.controllerFor('question').setTimerLimit();
    }
  },
  model(params){
    return this.get('store').find('question',params.q_id);
  }
});
