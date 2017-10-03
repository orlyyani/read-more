export default {
	twoWay: true,
	bind: function(el, bind, vn) {
		let __val_container = bind.value;
		
		if(bind.value.length > bind.arg){

			vn.elm.textContent = bind.value.substring(0,bind.arg)
			let __read_more = document.createElement('a');
	    __read_more.href = '#';
	    __read_more.text = 'read more';

	    let __read_less = document.createElement('a');
	    __read_less.href = '#';
	    __read_less.text = 'read less';

		  vn.elm.append(' ', __read_more);

			__read_more.addEventListener("click", function(){ 
				vn.elm.textContent = __val_container;
				vn.elm.append(' ', __read_less);
			});

			__read_less.addEventListener("click", function(){ 
				vn.elm.textContent = bind.value.substring(0,bind.arg)
				vn.elm.append(' ', __read_more);
			});

		}else{
			vn.elm.textContent = bind.value
		}


	},
	update: function (newValue) {
    // console.log('eyyow');
  },
}