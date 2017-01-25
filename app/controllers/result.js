import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
	stats: storageFor('stats'),
  //displayResult:Ember.observer('stats.answeredQuestions','stats.totalMarks',function(){
  //  this.questionsAnswered = this.get('stats.answeredQuestions');
  //  this.score = this.get('stats.totalMarks');
  //}),
  resetStorageVariables()
  {
    this.set('stats.answeredQuestions',0);
    this.set('stats.totalMarks',0);
  },
  actions:{
    sessionClear(){
      this.set('stats.user','');
      this.resetStorageVariables();
      this.transitionToRoute('welcome');
    },
    sessionRestart(){
      this.resetStorageVariables();
      this.transitionToRoute('question',1);
    }
  }

});
