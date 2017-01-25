import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  stats: storageFor('stats'),
  resetStorageVariables()
  {
    this.set('stats.answeredQuestions',0);
    this.set('stats.totalMarks',0);
    this.set('stats.user','');
  },
  actions: {
    storeUser(){
      let usr = this.get('username');
      if (usr) {
        this.resetStorageVariables();
        this.set('stats.user',usr);
        this.set('username',null);
        this.set('startPage',this.get('stats.startPage'));
        this.set('stats.startPage',1);
        this.transitionToRoute('question',this.get('startPage'));
      }
      else{
        alert('Enter name');
        this.set('stats.user','');
      }
    }
  }
});
