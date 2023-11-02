// import updated movies list
export const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
	},
};
