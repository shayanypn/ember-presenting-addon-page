import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('example', function() {});
  this.route('options');
  this.route('methods');
  this.route('events');
  this.route('contact');
});

export default Router;
