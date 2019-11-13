
export default{
	changeCity(state,info){
		state.city = info;
		localStorage.city = info
	}
}
