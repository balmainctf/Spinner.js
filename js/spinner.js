;(function(exports){
	var document = exports.document,
		mask = createElementWithClassName('spinner-mask'),
		box = createElementWithClassName('spinner-box'),
		spinner = createElementWithClassName('spinner'),
		spinner_container_1 = createElementWithClassName('spinner-container'),
		spinner_container_2,
		spinner_container_3,
		circle_1 = createElementWithClassName('circle1'),
		circle_2 = createElementWithClassName('circle2'),
		circle_3 = createElementWithClassName('circle3'),
		circle_4 = createElementWithClassName('circle4');

	spinner_container_1.appendChild(circle_1);
	spinner_container_1.appendChild(circle_2);
	spinner_container_1.appendChild(circle_3);
	spinner_container_1.appendChild(circle_4);
	spinner_container_2 = spinner_container_1.cloneNode(true);
	spinner_container_3 = spinner_container_1.cloneNode(true);
	spinner_container_1.className += ' container1';
	spinner_container_2.className += ' container2';
	spinner_container_3.className += ' container3';
	spinner.appendChild(spinner_container_1);
	spinner.appendChild(spinner_container_2);
	spinner.appendChild(spinner_container_3);
	box.appendChild(spinner);
	document.body.appendChild(mask);
	document.body.appendChild(box);	
	
	var self = Object.create(null);
	self.show = function(){
		mask.style.display = box.style.display = 'block';
	};
	self.hide = function(){
		mask.style.display = box.style.display = 'none';
	};
	Object.seal(self);
	Object.freeze(self);
	Object.preventExtensions(self);
	exports.spinner = self;

	function createElementWithClassName(className){
		var elem = document.createElement('div');
		elem.className = className;
		return elem;
	}
})(window);