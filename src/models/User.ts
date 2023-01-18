export class User {
    id?: number;
    username: string;
    email?: string;
    password?: string;
    token: string;
    is_active?: boolean;

    constructor() {
        this.id = 0;
        this.username = '';
        this.email = '';
        this.password = '';
        this.token = '';
        this.is_active = false;
    }
}
