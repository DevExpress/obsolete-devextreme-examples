/// <reference path="./typings.d.ts" />

// DevExtreme Globalize integration
import 'devextreme/localization/globalize/number'
import 'devextreme/localization/globalize/date'
import 'devextreme/localization/globalize/currency'
import 'devextreme/localization/globalize/message'

// DevExtreme messages (en messages already included)
import deMessages = require('devextreme/localization/messages/de.json')

// CLDR data
import deCaGregorian = require('cldr-data/main/de/ca-gregorian.json')
import deNumbers = require('cldr-data/main/de/numbers.json')
import deCurrencies = require('cldr-data/main/de/currencies.json')

import likelySubtags = require('cldr-data/supplemental/likelySubtags.json')
import timeData = require('cldr-data/supplemental/timeData.json')
import weekData = require('cldr-data/supplemental/weekData.json')
import currencyData = require('cldr-data/supplemental/currencyData.json')
import numberingSystems = require('cldr-data/supplemental/numberingSystems.json')

import Globalize = require('globalize');

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

Globalize.loadMessages(deMessages);

Globalize.locale('de');