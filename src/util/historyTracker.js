export default function historyTracker () {
	// private history variable
	const historyObject = {
		from: null,
		to: null
	};
	return (location) => {
		const historyArray = [];
		for (let pathname in historyObject) {
			if (historyObject[pathname]) {
				historyArray.push(historyObject[pathname])
			}
		}
		const { pathname } = location;
		switch (historyArray.length) {
			case 0 :
				historyObject.from = pathname;
				return historyObject;
			case 1 :
				if (pathname === historyObject.from) {
					return historyObject;
				} else {
					historyObject.to = pathname;
					return historyObject;
				}
			case 2 :
				if (pathname === historyObject.to) {
					return historyObject;
				} else {
					historyObject.from = historyObject.to;
					historyObject.to = pathname;
					return historyObject;
				}
			default :
				return historyObject
		}
	}
}