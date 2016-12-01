// DevExtreme Globalize integration
import 'devextreme/localization/globalize/number'
import 'devextreme/localization/globalize/date'
import 'devextreme/localization/globalize/currency'
import 'devextreme/localization/globalize/message'

// DevExtreme messages (en messages already included)
import 'devextreme/dist/js/localization/dx.all.de'

// CLDR data
import deCaGregorian from 'cldr-data/main/de/ca-gregorian.json!json'
import deNumbers from 'cldr-data/main/de/numbers.json!json'
import deCurrencies from 'cldr-data/main/de/currencies.json!json'

import likelySubtags from 'cldr-data/supplemental/likelySubtags.json!json'
import timeData from 'cldr-data/supplemental/timeData.json!json'
import weekData from 'cldr-data/supplemental/weekData.json!json'
import currencyData from 'cldr-data/supplemental/currencyData.json!json'
import numberingSystems from 'cldr-data/supplemental/numberingSystems.json!json'

import Globalize from 'globalize'

Globalize.load(
    deCaGregorian,
    deNumbers,
    deCurrencies,

    likelySubtags,
    timeData,
    weekData,
    currencyData,
    numberingSystems
);

Globalize.locale('de');