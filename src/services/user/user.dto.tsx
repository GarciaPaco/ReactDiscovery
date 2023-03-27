export class User {
    public constructor(
        public id?: number | string,
        public email?: string,
        public first_name?: string,
        public last_name?: string,
        public avatar?: string
    ) {
    }
}