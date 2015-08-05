export const CREATE_USER = 'CREATE_USER';

export function createUser(email, password) {
    return {
        type: CREATE_USER,
        email,
        password
    };
}

