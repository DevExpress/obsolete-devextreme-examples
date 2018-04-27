import 'core-js/client/shim.min.js';
import 'zone.js/dist/zone.js';

import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);