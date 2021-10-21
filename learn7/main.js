new Vue({
	el: "#app",
	data: {
		product: "Cat",
		description: "Lorem Ipsum dolor sit amet",
		image:
			"https://sun9-12.userapi.com/impg/jwFT66HVPhfaXQ5eNkGeRxbkOoE4g-dQZmEvVA/8CkcD6sILTs.jpg?size=1280x720&quality=96&sign=8ecd7d58ccdfa34292b7410ad5417da3&type=album",
		altText: "Konoha",
		isExist: true,
		isNaruto: true,
		places: ["Парк", "Дом Хокаге", "Лес"],
		tickets: 0,
	},
	methods: {
		addToCart() {
			++this.tickets;
		},
		deleteFromCart() {
			--this.tickets;
		},
	},
});
