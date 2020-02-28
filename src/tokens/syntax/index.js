import comment from './comment'
import constant from './constant'
import entity from './entity'
import invalid from './invalid'
import keyword from './keyword'
import markup from './markup'
import meta from './meta'
import punctuation from './punctuation'
import storage from './storage'
import string from './string'
import support from './support'
import variable from './variable'

export default {
	...comment,
	...constant,
	...entity,
	...invalid,
	...keyword,
	...markup,
	...meta,
	...punctuation,
	...storage,
	...string,
	...support,
	...variable
}
