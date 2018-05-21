/// <reference path="./typings.d.ts" />

// DevExtreme Globalize integration
import 'devextreme/localization/globalize/number'
import 'devextreme/localization/globalize/date'
import 'devextreme/localization/globalize/currency'
import 'devextreme/localization/globalize/message'

// DevExtreme messages (en messages already included)
import deMessages = require('devextreme/localization/messages/de.json')

// CLDR data
import deCldrData = require('devextreme-cldr-data/de.json')
import supplementalCldrData = require('devextreme-cldr-data/supplemental.json')

import Globalize = require('globalize');

Globalize.load(
    deCldrData,
    supplementalCldrData
);

Globalize.loadMessages(deMessages);

Globalize.locale('de');