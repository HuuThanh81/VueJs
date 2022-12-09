import Api from '../../apis'

export default{
    login(credentials){
        return Api().post('TokenAuth/Authenticate',{
            userNameOrEmailAddress: credentials.userNameOrEmailAddress, 
            password: credentials.password, 
            rememberClient: credentials.rememberClient
        });
    }
}