// creates the user table
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Associating User with multiple Confessions
  // When User is deleted, deleted any associated confessions
  User.associate = function(models) {
    User.hasMany(models.Confession, {
      onDelete: "cascade"
    });
  };

  // Associating User with multiple Votes
  // When User is deleted, deleted any associated votes
  User.associate = function(models) {
    User.hasMany(models.Vote, {
      onDelete: "cascade"
    });
  };

  return User;
};