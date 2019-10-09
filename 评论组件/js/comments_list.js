var comment_list = function() {
}
comment_list.prototype.$ = function(id) {
	return typeof id === "string" ? document.getElementById(id) : null;
}
comment_list.prototype.crate_element = function(element_id, element_tab) {
	var element = document.createElement(element_tab);
	element.setAttribute("id", element_id);
	return element;
}
comment_list.prototype.crate_show = function() {
	document.body.appendChild(this.crate_element("comment_box", "div"))
	comment_box.appendChild(this.crate_element("ul", "ul"))
}
comment_list.prototype.eventlistener = function() {
	function return_style(input_id, markerwords_id) {
		that.$(input_id).value = "";
		that.$(input_id).style.borderColor = "#CCCCCC";
		that.$(markerwords_id).innerText = "";
	}
	var that = this;
	this.$(date[7][0]).addEventListener("click", function() {
		if(that.$(date[2][0]).value && that.$(date[5][0]).value) {
			var li=that.crate_element("li", "li");
			ul.insertBefore(li, that.$('ul').children[0]);
			var name=that.crate_element("name", "span");
			var list=that.crate_element("list", "span");
			li.appendChild(name)
			li.appendChild(list)
			var person = {};
			person.name = that.$(date[2][0]).value;
			person.comments = that.$(date[5][0]).value;
			new_arry.push(person);
			name.innerText = person.name;
			list.innerText = ":"+person.comments;
			return_style(date[2][0],date[3][0]);
			return_style(date[5][0],date[6][0]);
		} else {
			alert("还未正确输入")
		}
	}, false)	
}
var comment_list1 = new comment_list();
comment_list1.crate_show();
comment_list1.eventlistener();
