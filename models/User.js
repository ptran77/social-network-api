const { Schema, model } = require('mongoose');

// UserSchema
const UserSchema = newSchema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
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
UserSchema.virtual(friendCount).get(function () {
  return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;