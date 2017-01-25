import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome');
  this.route('question',{path: '/question/:q_id'});
  this.route('result');
});

export default Router;
