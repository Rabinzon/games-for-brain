import readlineSync from 'readline-sync';

const getName = () => {
	const name = readlineSync.question('May I have your name? ');
	if (name.trim() === '') {
		return getName();
	}
	return name;
};

export default () => {
	const name = getName();
	console.log(`Hi ${name}!`);
};
