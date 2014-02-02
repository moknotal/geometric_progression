			function gemProg() {
			var bn = document.getElementById("bn").value,
			res,
 			b1 = document.getElementById("b1").value, 
			q  = document.getElementById("q").value;
				for(var i=0; i<bn; i++ ) {
					if (res) {
					res = res * q;
					} else {
					res = b1 * q;
			}
			
		}
		alert('result is ' + res);
	}
