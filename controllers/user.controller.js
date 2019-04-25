class UserController {
    
    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit(){
        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
            let user = this.getValues();
            this.addLine(user)
        });
    }

    getValues(){
        let user = {};
        let inputs = this.formEl.elements;
        for(let i = 0; i < inputs.lenght; i++){
            if(inputs[i].name == "gender"){
                if(inputs[i].checked){
                    user[inputs[i].name] = inputs[i].value;
                }
            } else {
                user[inputs[i].name] = inputs[i].value;
            }
        }        

        return new User(
            user.name, 
            user.gender, 
            user.birth, 
            user.country, 
            user.email, 
            user.password, 
            user.photo, 
            user.admin
        );
    }

    addLine(dataUser){
        this.tableEl.innerHTML = 
        `<tr>
            <td>
            <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>`;
    }
}