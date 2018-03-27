import { Injectable } from '@angular/core';

export class Product {
    id: string;
  expanded: boolean;
  selected: boolean;
    name: string;
    iconSrc?: string;
    price?: number;
    disabled?: boolean;
    items?: Product[];
}

var products: Product[] = [{
    id: "1",
  expanded: false,
  selected: false,
    name: "Video Players",
    items: [{
        id: "1_1",
      expanded: false,
      selected: true,
        name: "HD Video Player",
        price: 220,
        iconSrc: "images/products/1.png"
    }, {
        id: "1_2",
      expanded: false,
      selected: false,
        name: "SuperHD Video Player",
        iconSrc: "images/products/2.png",
        price: 270
    }]
}, {
    id: "2",
  expanded: true,
  selected: undefined,
    name: "Televisions",
    items: [{
        id: "2_1",
      expanded: false,
      selected: true,
        name: "SuperLCD 42",
        iconSrc: "images/products/7.png",
        price: 1200
    }, {
        id: "2_2",
      expanded: false,
      selected: true,
        name: "SuperLED 42",
        iconSrc: "images/products/5.png",
        price: 1450
    }, {
      expanded: false,
      selected: true,
        id: "2_3",
        name: "SuperLED 50",
        iconSrc: "images/products/4.png",
        price: 1600
    }, {
        id: "2_4",
      expanded: false,
      selected: true,
        name: "SuperLCD 55 (Not available)",
        iconSrc: "images/products/6.png",
        price: 1350,
        disabled: true
    }, {
        id: "2_5",
      expanded: false,
      selected: true,
        name: "SuperLCD 70",
        iconSrc: "images/products/9.png",
        price: 4000
    }]
}, {
    id: "3",
  expanded: false,
  selected: false,
    name: "Monitors",
    items: [{
        id: "3_1",
      expanded: false,
      selected: false,
        name: "19\"",
        items: [{
            id: "3_1_1",
          expanded: true,
          selected: false,
            name: "DesktopLCD 19",
            iconSrc: "images/products/10.png",
            price: 160
        }]
    }, {
        id: "3_2",
      expanded: false,
      selected: false,
        name: "21\"",
        items: [{
            id: "3_2_1",
          expanded: false,
          selected: false,
            name: "DesktopLCD 21",
            iconSrc: "images/products/12.png",
            price: 170
        }, {
            id: "3_2_2",
          expanded: false,
          selected: false,
            name: "DesktopLED 21",
            iconSrc: "images/products/13.png",
            price: 175
        }]
    }]
}, {
    id: "4",
  expanded: false,
  selected: false,
    name: "Projectors",
    items: [{
        id: "4_1",
      expanded: false,
      selected: false,
        name: "Projector Plus",
        iconSrc: "images/products/14.png",
        price: 550
    }, {
        id: "4_2",
      expanded: false,
      selected: false,
        name: "Projector PlusHD",
        iconSrc: "images/products/15.png",
        price: 750
    }]
}];

@Injectable()
export class Service {
    getProducts(): Product[] {
        return products;
    }
}
