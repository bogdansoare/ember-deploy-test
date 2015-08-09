import Ember from 'ember';
import ENV from "ember-deploy-test/config/environment";

export default Ember.Route.extend({
  beforeModel() {
    console.log(ENV.shhh);
    console.log('aa');
  }
});
