Vue.component("ads", {
	template: `<div> 
               <h3>Объявление</h3> 
               <slot>Здесь могла бы ваша реклама</slot>
               <footer>
                  <slot name="footer">Здесь могла бы ваша реклама</slot>
               </footer>
             </div>`,
});

new Vue({
	el: "#app",
});
