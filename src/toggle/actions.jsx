//action type constant - helps prevent typos
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';

//action creator
export function toggleMessage() {
	return {
		type: 'TOGGLE_MESSAGE',
	};
}
