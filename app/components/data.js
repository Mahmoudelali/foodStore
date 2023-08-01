export const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	);
};
export const getYearsRange = () => {
	let years = [];
	for (let i = new Date().getFullYear(); i >= 1950; i--) {
		years.push(i);
	}
	return years;
};
export const getDaysRange = () => {
	let days = [];
	for (i = 1; i <= 31; i++) {
		days.push(i);
	}
	return days;
};
export const getMonthsRange = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
export const GenderLabels = [
	{
		id: '1',
		label: 'Girl',
		value: 'female',
	},
	{
		id: '2',
		label: 'Guy',
		value: 'male',
	},
];

export const checkBoxLabels = [
	{
		label: 'Sign me up for exclusively COUPWAY discounts by email and text',
		id: 1,
	},
	{ label: 'Yes, Send me updates on selective COUPWAY deals', id: 2 },
	{ label: 'Yes, I agree COUPWAY Terms and Conditions', id: 3 },
];
export const timing = ['days', 'months', 'years'];

export const formValidation = ({
	fname,
	lname,
	password,
	email,
	terms,
	handler,
}) => {
	return fname.length >= 2 &&
		lname.length >= 2 &&
		password.length > 8 &&
		email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		) &&
		terms.length === 3
		? handler(false)
		: handler(true);
};
