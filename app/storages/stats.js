import StorageObject from 'ember-local-storage/session/object';

const Storage = StorageObject.extend();

 Storage.reopenClass({
   initialState() {
     return {user: '',answeredQuestions: 0,totalQuestions: 0,totalMarks: 0,startPage: 1};
   }
});

export default Storage;
