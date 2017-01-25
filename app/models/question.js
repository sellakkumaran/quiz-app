import DS from 'ember-data';

var Post =  DS.Model.extend({
  Question: DS.attr('string'),
  Option1: DS.attr('string'),
  Option2: DS.attr('string'),
  Option3: DS.attr('string'),
  Option4: DS.attr('string'),
  Answer: DS.attr('number'),
  Weight: DS.attr('number')
});

Post.reopenClass({
  FIXTURES:[
    {
      id:1,
      Question:'Find the odd one out?', Option1:'MS-Word', Option2: 'Windows XP', Option3: 'linux', Option4: 'DOS',
      Answer:1, Weight:1
    },
    {
      id:2,
      Question:'what are the two kinds of main memory?', Option1: 'Primary and Secondary', Option2: 'Random and Sequential',
      Option3: 'ROM and RAM', Option4: 'All of the above',
      Answer:3, Weight:1
    },
    {
      id:3,
      Question:'which of the following is not an input device?', Option1: 'OCR', Option2: 'Optical Scanner',
      Option3: 'voice recognition device', Option4: 'COM(Computer Output to Microfilm)',
      Answer:4, Weight:1
    },
    {
      id:4,
      Question:'A computer consists of?', Option1: 'a CPU', Option2: 'a memory', Option3: 'Input and Output Unit', Option4: 'All of the above',
      Answer:4, Weight:1
    },
    {
      id:5,
      Question:'_____ bits equal one byte', Option1: 'Eight', Option2: 'Two', Option3: 'One Thousand', Option4: 'One Million',
      Answer:1, Weight:1
    }
  ]
});

export default Post;
