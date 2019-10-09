var comment_input = function() {
}
comment_input.prototype.$ = function(id) {
	return typeof id === "string" ? document.getElementById(id) : null;
}
comment_input.prototype.crate_element = function(element_id, element_tab, innertext) {
	var element = document.createElement(element_tab);
	element.setAttribute("id", element_id)
	var node = document.createTextNode(innertext)
	element.appendChild(node);
	return element;
}
comment_input.prototype.crate_show = function() {
	var that = this;
	date.forEach(function(value, index) {
		if(index == 0) {
			document.body.appendChild(that.crate_element.apply(that, value));
		} else {
			header.appendChild(that.crate_element.apply(that, value));
		}
	})
}
comment_input.prototype.eventlistener = function(){
	function change_style(input_id, markerwords_id, marked_words, color) {
		that.$(markerwords_id).innerText = marked_words;
		that.$(markerwords_id).style.color = color;
		that.$(input_id).style.borderColor = color;
	}
	var that = this;
	that.$(date[2][0]).addEventListener("blur", function() {
		var value = this.value;
		if(value) {
			change_style.apply(this,style_date[0]);
		} else {
			change_style.apply(this,style_date[1]);
		}
	}, false)
	that.$(date[5][0]).addEventListener("blur", function() {
		var value = this.value;
		if(value) {
			change_style.apply(this,style_date[2]);
		} else {
			change_style.apply(this,style_date[3]);
		}
	}, false)
}
var comment_input1 = new comment_input();
comment_input1.crate_show();
comment_input1.eventlistener();