import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

class Page {
    Path: string;
    Name: string;
}

@Injectable()
export class NavigationService {
  private location: Location;
  private router: Router;

  pages: Page[] = [
    {
      Path: 'editors',
      Name: 'Editors'
    },
    {
      Path: 'actions-and-lists',
      Name: 'Actions and Lists'
    },
    {
      Path: 'grids',
      Name: 'Grids'
    },
    {
      Path: 'schedulers',
      Name: 'Schedulers'
    },
    {
      Path: 'viz',
      Name: 'Charts and Gauges'
    },
    {
      Path: 'navigation',
      Name: 'Navigation'
    },
    {
      Path: 'forms-and-multi-purpose',
      Name: 'Forms and Multi-Purpose'
    }
  ];

  constructor(location: Location, router: Router) {
    this.location = location;
    this.router = router;
  }

  navigate(page) {
    this.router.navigate([page]);
  }

  getPageName() {
    const path = this.location.path();
    return path && path.match(/[^/]+$/)[0].toLowerCase() || this.pages[0].Path;
  }
}
