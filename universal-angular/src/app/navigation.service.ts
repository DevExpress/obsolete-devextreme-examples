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
      Path: "editors",
      Name: "Editors"
    },
    {
      Path: "actions-and-lists",
      Name: "Actions and Lists"
    },
    {
      Path: "dialogs-and-notifications",
      Name: "Dialogs and Notifications"
    },
    {
      Path: "grids",
      Name: "Grids"
    },
    {
      Path: "viz",
      Name: "Charts and Gauges"
    },
    {
      Path: "navigation",
      Name: "Navigation"
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
    var path = this.location.path();
    return path && path.match(/[^/]+$/)[0].toLowerCase() || this.pages[0].Path;
  }
}
