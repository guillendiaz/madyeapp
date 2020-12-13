// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Madye',
	dialog: {
		title: 'Madye',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},

  		{
		path: '/main/',
    	url: 'main.html',
    	name: 'main',
  		},

  		{
		path: '/homep/',
    	url: 'home.html',
    	name: 'homep',
  		},

  		{
		path: '/category/',
    	url: 'category.html',
    	name: 'category',
  		},

  		{
		path: '/sport/',
    	url: 'sport.html',
    	name: 'sport',
  		},

  		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},

  		{
		path: '/cart/',
    	url: 'cart.html',
    	name: 'cart',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;

var notificationOrden = myApp.notification.create({
  icon: '<span class="material-icons">shopping_basket</span>',
  title: 'Orden de Compra',
  titleRightText: '',
  subtitle: '',
  text: 'Su orden ha sido recibida.',
  closeTimeout: 3000,
});


$$(document).on('click','#btnComprar', function (e) {
	myApp.dialog.alert('Tu compra fue realizada correctamente !');
	notificationOrden.open();
});

// Create notification with close button
var notificationWithButton = app.notification.create({
  icon: '<i class="icon demo-icon">7</i>',
  title: 'Framework7',
  subtitle: 'Notification with close button',
  text: 'Click (x) button to close me',
  closeButton: true,
});
 

