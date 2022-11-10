module.exports = (sequelize, DataTypes) =>
{
    return sequelize.define('Participant',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom:
        {
            type: DataTypes.STRING,
            allowNull: true,
        },
        prenom:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sexe:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        espece:
        {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}