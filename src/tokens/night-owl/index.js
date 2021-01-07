// import theme from './theme';
import base from './base';
import application from './application';
import syntax from './syntax';

const allTokens = {
	...base,
	...application,
	...syntax
}

export { allTokens }

export default {base, application, syntax};
