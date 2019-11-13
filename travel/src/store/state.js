
let defaultCity = '厦门'
if(localStorage.city){
	defaultCity = localStorage.city
}

export default{
	city:defaultCity
}