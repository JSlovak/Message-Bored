module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Topic, {
          foreignKey:{
            name: "created_by",
            allowNull: false
          }
        });
        User.hasMany(models.Message, {
          as: 'Author',
          foreignKey: {
            name: 'author_id',
            allowNull: false
          }
        });
      }
    }
  });

  return User;
};