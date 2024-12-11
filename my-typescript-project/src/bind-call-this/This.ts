interface User {
    id: number;
    admin: boolean;
}

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

// Simulating a database
const db: DB = {
    filterUsers(filter) {
        const users: User[] = [
            { id: 1, admin: false },
            { id: 2, admin: true },
        ];

        // Correctly bind `this` context for the callback
        return users.filter(function (user) {
           
            return filter.call(user); // Pass the correct `this` context
        });
    },
};

// Filtering admin users
const admins = db.filterUsers(function (this: User) {
    return this.admin; // `this` refers to the current user object
});

console.log(admins); // Output: [{ id: 2, admin: true }]
