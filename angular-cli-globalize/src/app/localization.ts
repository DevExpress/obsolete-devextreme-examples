// DevExtreme Globalize integration
import 'devextreme/localization/globalize/number';
import 'devextreme/localization/globalize/date';
import 'devextreme/localization/globalize/currency';
import 'devextreme/localization/globalize/message';

// DevExtreme messages (en messages already included)
import deMessages from 'devextreme/localization/messages/de.json';

// CLDR data
import deCldrData from 'devextreme-cldr-data/de.json';
import supplementalCldrData from 'devextreme-cldr-data/supplemental.json';

import * as Globalize from 'globalize';

Globalize.load(
    deCldrData,
    supplementalCldrData
);

Globalize.loadMessages(deMessages);

Globalize.locale('de');
