import Ember from 'ember';
import moment from 'moment';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  stats: storageFor('stats'),
  isLastQuestion(model){
    if (parseInt(model.get('id')) === this.get('stats.totalQuestions')) {
      this.transitionToRoute('result');
    } else {
      this.transitionToRoute('question', parseInt(model.get('id'))+1);
    }
  },
  setTimerLimit() {
    this.set('maxTime', moment().add(30, 'seconds'));
    //console.log("MAX TIME:", this.get('maxTime').seconds());
  },

  actions:{
    nextQuestion(model){
      this.set('Option',null);
      if(parseInt(model.get('Answer')) === parseInt(this.get('answer'))){
        let new_weight = this.get('stats.totalMarks') + model.get('Weight');
        this.set('stats.totalMarks',new_weight);
      }
      if(this.get('answer')){
        let count = this.get('stats.answeredQuestions')+1;
        this.set('stats.answeredQuestions',count);
      }
      this.set('answer',null);
      this.isLastQuestion(model);
    },
    skipQuestion(model){
      this.set('Option',null);
      this.set('answer',null);
      this.isLastQuestion(model);
    },
    quitQuiz(){
      this.set('answer',null);
      this.set('option',null);
      this.transitionToRoute('result');
    },
    toggleAnswer(choice){
      this.set('answer',choice);
    }
  }
});
