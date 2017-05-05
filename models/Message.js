module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    body: {
    type: DataTypes.STRING,
    allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Message.belongsTo(models.User, {
          As: 'Author',
          foreignKey: {
            name: 'author_id',
            allowNull: false
          }
        });
        Message.belongsTo(models.Topic, {
          foreignKey: {
            name: 'topic_id',
            allowNull: false
          }
        });
      }
    }
  });

  return Message;
};