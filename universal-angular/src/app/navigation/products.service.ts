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
        iconSrc: "assets/images/products/1-small.png"
    }, {
        id: "1_2",
        expanded: false,
        selected: false,
        name: "SuperHD Video Player",
        iconSrc: "assets/images/products/2-small.png",
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
        iconSrc: "assets/images/products/7-small.png",
        price: 1200
    }, {
        id: "2_2",
        expanded: false,
        selected: true,
        name: "SuperLED 42",
        iconSrc: "assets/images/products/5-small.png",
        price: 1450
    }, {
        expanded: false,
        selected: true,
        id: "2_3",
        name: "SuperLED 50",
        iconSrc: "assets/images/products/4-small.png",
        price: 1600
    }, {
        id: "2_4",
        expanded: false,
        selected: true,
        name: "SuperLCD 55 (Not available)",
        iconSrc: "assets/images/products/6-small.png",
        price: 1350,
        disabled: true
    }, {
        id: "2_5",
        expanded: false,
        selected: true,
        name: "SuperLCD 70",
        iconSrc: "assets/images/products/9-small.png",
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
            iconSrc: "assets/images/products/10-small.png",
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
            iconSrc: "assets/images/products/12-small.png",
            price: 170
        }, {
            id: "3_2_2",
            expanded: false,
            selected: false,
            name: "DesktopLED 21",
            iconSrc: "assets/images/products/13-small.png",
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
        iconSrc: "assets/images/products/14-small.png",
        price: 550
    }, {
        id: "4_2",
        expanded: false,
        selected: false,
        name: "Projector PlusHD",
        iconSrc: "assets/images/products/15-small.png",
        price: 750
    }]
}];

@Injectable()
export class Service {
    getProducts(): Product[] {
        return products;
    }
}
