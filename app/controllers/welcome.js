import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  stats: storageFor('stats'),
  actions: {
    storeUser(){
      let usr = this.get('username');
      console.log(usr);
      if (usr) {
        this.set('stats.user',usr);
        this.set('username',null);
        this.transitionToRoute('question', 1);
      }
      else{
        alert('Enter name');
        this.set('stats.user','');
      }
    }
  }
});
