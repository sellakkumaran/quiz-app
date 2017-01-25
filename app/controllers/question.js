import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  tot_questions: 6,
  answered_questions:0,
  tot_weight: 0,
  answer: null,
  init(){
    this._super(...arguments);
    this.set('q_id',1);
  },

  last_question_check(){
    console.log('last question check');
    if (this.get('q_id') === this.get('tot_questions')) {
      let temp_weight = this.get('tot_weight');
      let temp_count = this.get('answered_questions');
      this.set('tot_weight', 0);
      this.set('answered_questions',0);
      this.set('q_id',1);
      this.transitionToRoute('result', {queryParams: {'score': temp_weight, 'count': temp_count}});
    } else {
      this.transitionToRoute('question', this.get('q_id'));
    }
  },

  setTimerLimit() {
    this.set('maxTime', moment().add(30, 'seconds'));
    console.log("MAX TIME:", this.get('maxTime').seconds());
  },

  actions:{
    next_question(model){
      console.log('next question');
      this.set('Option',null);
      let new_id = this.get('q_id')+1;
      this.set('q_id', new_id);
      if(parseInt(model.get('Answer')) === parseInt(this.get('answer'))){
        let new_weight = this.get('tot_weight') + model.get('Weight');
        this.set('tot_weight',new_weight);
      }
      if(Ember.isPresent(this.get('answer'))){
        let count = this.get('answered_questions')+1;
        this.set('answered_questions',count);
      }
      this.set('answer',null);
      this.last_question_check();
    },
    skip_question(){
      console.log('skip question');
      let new_id = this.get('q_id')+1;
      this.set('q_id', new_id);
      this.set('Option',null);
      this.set('answer',null);
      this.last_question_check();
    },
    quit_question(){
      console.log('quit question');
      //if(parseInt(model.get('Answer')) === parseInt(this.get('answer'))){
        //let new_weight = this.get('tot_weight') + model.get('Weight');
        //this.set('tot_weight',new_weight);
      //}
      //counting the answered questions
      //if(Ember.isPresent(this.get('answer'))){
        //let count = this.get('answered_questions')+1;
        //this.set('answered_questions',count);
      //}
      this.set('answer',null);
      this.set('q_id',1);
      let temp_weight = this.get('tot_weight');
      let temp_count = this.get('answered_questions');
      this.set('tot_weight',0);
      this.set('answered_questions',0);
      this.transitionToRoute('result',{queryParams:{'score':temp_weight,'count': temp_count}});
    },
    answerToggled(choice){
      this.set('answer',choice);
    }
  }
});
