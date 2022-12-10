
import AuthService from '../../apis/modules/auth'

const state = {};
const getters ={};
const mutations = {
    setToken(state, token){
        localStorage.setItem('token', JSON.stringify(token));
    }
};
const actions = {
    async login({commit}, credentials){
        try {
            const response = await AuthService.login(credentials);
            if(response.data.result.accessToken){
                commit('setToken', response.data.result.accessToken);
            }            
        } catch (error) {
            console.log(error);
        }
    }
}

export default{
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}