module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'bookingSystem',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}
