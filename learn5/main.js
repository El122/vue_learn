Vue.filter("toUpper", function (val) {
	return val.toUpperCase() + "!!!";
});

new Vue({
	el: "#app",
	data: {
		value: "Somebody once told me the world is gonna roll me",
	},
});
