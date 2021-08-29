export default {
    addToCart({ state, commit }, product) {
        const cartItem = state.cart.find(item => {
            return item.id === product.id;
        }); 
        if(!cartItem) {
            commit('CART_PUSH', product)
        } else {
            commit('INCREASE_CART_QUANTITY', { cartItem, product });
        }
        commit('SET_CART_TO_LOCALSTORAGE');
    },
    getLocalStorageCart({ commit }) {
        commit("SET_CART", JSON.parse(localStorage.getItem("cart")));
    },
    updateCart({ state, commit }, { id, quantity }) {
        const cartItem = state.cart.find(item => item.id === id);
        commit('UPDATE_CART', { cartItem, quantity });
    },
    clearCart({ commit }) {
        commit('CLEAR_CART');
        commit('UNSET_LOCALSTORAGE_CART');
    },
    deleteCart({ commit }, deleteId) {
        commit('DELETE_CART', deleteId);
        commit('SET_CART_TO_LOCALSTORAGE');
    }
}