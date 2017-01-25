import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
	queryParams: ['score','count'],
	score:null,
  count:0,
	stats: storageFor('stats'),
  actions:{
    sessionClear(){
      this.set('stats.user','');
      console.log('user cleared');
      console.log(this.get('stats.user'));
      this.transitionToRoute('welcome');
    },
    sessionRestart(){
      this.transitionToRoute('question',1);
      console.log('redirected again to question');
    }
  }

});
