
import AuthService from '../../apis/modules/auth'

const state = {};
const getters ={};
const mutations = {
    setcookie(){}
};
const actions = {
    async login({commit}, credentials){
        try {
            const response = await AuthService.login(credentials);
            console.log(response.data);
            commit('setcookie');
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