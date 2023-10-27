/*
    User type
     - Email Address - Unique identifier
     - Password
 */

const users: Array<User> = [
    { email: 'nicdepartment@gmail.com', password: 'nic' },
    { email: 'passportdepartment@gmail.com', password: 'passport' },
    { email: 'drivinglicense@gmail.com', password: 'drivinglicense' },
    { email: 'university@gmail.com', password: 'ucsc' },
    
]

export default users;

interface User {
    email: string;
    password: string;
}
