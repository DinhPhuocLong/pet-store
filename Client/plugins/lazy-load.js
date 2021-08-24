import Vue from 'vue';
import Lazyload from 'vue-lazyload';

const loadimage = require('@/assets/loading.gif');

Vue.use(Lazyload, {
	preLoad: 1.3,
	error: '/404.png',
	loading: loadimage,
	attempt: 3,
	listenEvents: [ 'scroll', 'touchmove', 'transitionend' ]
})