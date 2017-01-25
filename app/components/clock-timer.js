import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  _startCountDown: Ember.on('init', function() {
    this.set('instant', moment());
  }),
  onInstant: Ember.observer('instant', function() {
    var interval = 1000,
      currentTime = moment();

    if(this.get('instant') && !this.get('isDestroyed') && this.get('maxTime')) {
      Ember.run.later(() => {
        this.setProperties({
          timerValue: moment.duration(this.get('maxTime').diff(currentTime)).seconds(),
          instant: currentTime
        });
        //console.log("timerValue", this.get('timerValue'));
      }, interval);
    }
  }),

  onTimerValue: Ember.observer('timerValue', function() {
    if(this.get('timerValue') === 0 ) {
      this.sendAction('skip');
    }
  }),

  teardown: Ember.on('willDestroyElement', function() {
    this.setProperties({
      instant: null
    });
  })

});
