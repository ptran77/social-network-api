const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// ThoughtSchema
const ThoughtSchema = newSchema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get count of friends the user has
ThoughtSchema.virtual(reactionCount).get(function () {
  return this.reactions.length;
})