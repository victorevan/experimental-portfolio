export default function transitionHandler ({ from, to }) {
	if (to === '/contact') return {
		enter: 'move-in-halves',
		enterActive: 'move-in-halves-active',
		enterDone: '',
		exit: '',
		exitActive: '',
		exitDone: ''
	}
	if (from === '/contact') return {
		enter: '',
		enterActive: '',
		enterDone: '',
		exit: 'move-out-halves',
		exitActive: 'move-out-halves-active',
		exitDone: ''
	}

	if (
		from === '/projects/all' ||
		from === '/projects/front-end' ||
		from === '/projects/back-end'
	) {
		from = '/projects';
	}

	if (
		to === '/projects/all' ||
		to === '/projects/front-end' ||
		to === '/projects/back-end'
	) {
		to = '/projects';
	}

	console.log(`${from}-${to}`);

	switch(`${from}-${to}`) {
		case '/-/projects' :
			return 'home-to-projects';
		case '/projects-/' :
			return 'projects-to-home';
		default :
			return '';
	}
}