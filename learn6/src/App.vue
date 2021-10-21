<template>
	<div>
		<nav>
			<router-link to="/" exact>Home</router-link>
			<router-link to="/about/cats" exact>About</router-link>
			<router-link to="/catalog" exact>Catalog</router-link>
		</nav>
		<router-view></router-view>
		<router-view name="plus"></router-view>
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
