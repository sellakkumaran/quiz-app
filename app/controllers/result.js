import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
	stats: storageFor('stats'),
  resetStorageVariables()
  {
    this.set('stats.answeredQuestions',0);
    this.set('stats.totalMarks',0);
  },
  actions:{
    clearSession(){
      this.set('stats.user','');
      this.resetStorageVariables();
      this.transitionToRoute('welcome');
    },
    restartSession(){
      this.resetStorageVariables();
      this.transitionToRoute('question',1);
    }
  }

});
