class User {
    
    constructor(name, gender, birth, country, email, password, photo, admin){
        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get birth() {
        return this._birth;
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get admin() {
        return this._admin;
    }

    get register() {
        return this._register;
    }

    /**
     * Load a user from a JSON object
     * @param json
     */
    loadFromJSON(json) {
        for(let name in json){
            switch(name){
                case "_register":
                    this[name] = new Date(json[name]);
                    break;
                default:
                this[name] = json[name];
            }            
        }
    }

    /**
     * get all users form the the local storage
     * 
     * @return {User[]} users
     */
    static getUsersFromStorage() {
        let users = [];
        //if(sessionStorage.getItem("users")) users = JSON.parse(sessionStorage.getItem("users"));
        if(localStorage.getItem("users")) users = JSON.parse(localStorage.getItem("users"));

        return users;
    }

    /**
     * Generate a new id for the user based on the application id
     * 
     * @returns {number} id;
     */
    generateId() {
        if(!window.id) window.id = 0;
        id++;
        
        return id;
    }

    save() {
        let users = User.getUsersFromStorage();

        if(this.id > 0) {
            users.map(user => {
                if(user._id == this._id){
                    Object.assign(user, this);
                }

                return user;
            });
        } else {
            this._id = this.generateId();
            users.push(this);       
        }

        //sessionStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("users", JSON.stringify(users));
        
    }
}