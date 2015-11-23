Intl = require('intl');

require('intl/locale-data/jsonp/en');
require('intl/locale-data/jsonp/ru');

ReactIntl = require('react-intl');
ReactIntl.addLocaleData(require('react-intl/dist/locale-data/ru'));
