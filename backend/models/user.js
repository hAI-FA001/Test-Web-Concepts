class User {
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    toString() {
        return `User ${this.username} ${this.password}`;
    }
}

module.exports = User;