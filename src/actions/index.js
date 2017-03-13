
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredential){
    var self = this;
    Global.FirebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(            
        function(user_data) {
        },
        function(error) {
            self.setState({
                loaded: true
            });

            if(error){
                alert(error.message);
            }else{
                self.props.navigator.push({
                    component: Account
                });
            }
        }
    );
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(){
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(){
}

