import { Injectable } from '@angular/core';

export class Customer {
    ID: number;
    CompanyName: string;
    Address: string;
    City: string;
    State: string;
    Zipcode: number;
    Phone: string;
    Fax: string;
    Website: string;
}

export class Employee {
  ID: number;
  Head_ID: number;
  FirstName: string;
  LastName: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Title: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Email: string;
  Skype: string;
  HomePhone: string;
  DepartmentID: number;
  MobilePhone: string;
}

let сustomers: Customer[] = [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
}, {
    "ID": 2,
    "CompanyName": "K&S Music",
    "Address": "1000 Nicllet Mall",
    "City": "Minneapolis",
    "State": "Minnesota",
    "Zipcode": 55403,
    "Phone": "(612) 304-6073",
    "Fax": "(612) 304-6074",
    "Website": "http://www.nowebsitemusic.com"
}, {
    "ID": 3,
    "CompanyName": "Tom's Club",
    "Address": "999 Lake Drive",
    "City": "Issaquah",
    "State": "Washington",
    "Zipcode": 98027,
    "Phone": "(800) 955-2292",
    "Fax": "(800) 955-2293",
    "Website": "http://www.nowebsitetomsclub.com"
}, {
    "ID": 4,
    "CompanyName": "E-Mart",
    "Address": "3333 Beverly Rd",
    "City": "Hoffman Estates",
    "State": "Illinois",
    "Zipcode": 60179,
    "Phone": "(847) 286-2500",
    "Fax": "(847) 286-2501",
    "Website": "http://www.nowebsiteemart.com"
}, {
    "ID": 5,
    "CompanyName": "Walters",
    "Address": "200 Wilmot Rd",
    "City": "Deerfield",
    "State": "Illinois",
    "Zipcode": 60015,
    "Phone": "(847) 940-2500",
    "Fax": "(847) 940-2501",
    "Website": "http://www.nowebsitewalters.com"
}, {
    "ID": 6,
    "CompanyName": "StereoShack",
    "Address": "400 Commerce S",
    "City": "Fort Worth",
    "State": "Texas",
    "Zipcode": 76102,
    "Phone": "(817) 820-0741",
    "Fax": "(817) 820-0742",
    "Website": "http://www.nowebsiteshack.com"
}, {
    "ID": 7,
    "CompanyName": "Circuit Town",
    "Address": "2200 Kensington Court",
    "City": "Oak Brook",
    "State": "Illinois",
    "Zipcode": 60523,
    "Phone": "(800) 955-2929",
    "Fax": "(800) 955-9392",
    "Website": "http://www.nowebsitecircuittown.com"
}, {
    "ID": 8,
    "CompanyName": "Premier Buy",
    "Address": "7601 Penn Avenue South",
    "City": "Richfield",
    "State": "Minnesota",
    "Zipcode": 55423,
    "Phone": "(612) 291-1000",
    "Fax": "(612) 291-2001",
    "Website": "http://www.nowebsitepremierbuy.com"
}, {
    "ID": 9,
    "CompanyName": "ElectrixMax",
    "Address": "263 Shuman Blvd",
    "City": "Naperville",
    "State": "Illinois",
    "Zipcode": 60563,
    "Phone": "(630) 438-7800",
    "Fax": "(630) 438-7801",
    "Website": "http://www.nowebsiteelectrixmax.com"
}, {
    "ID": 10,
    "CompanyName": "Video Emporium",
    "Address": "1201 Elm Street",
    "City": "Dallas",
    "State": "Texas",
    "Zipcode": 75270,
    "Phone": "(214) 854-3000",
    "Fax": "(214) 854-3001",
    "Website": "http://www.nowebsitevideoemporium.com"
}, {
    "ID": 11,
    "CompanyName": "Screen Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 12,
    "CompanyName": "Braeburn",
    "Address": "1 Infinite Loop",
    "City": "Cupertino",
    "State": "California",
    "Zipcode": 95014,
    "Phone": "(408) 996-1010",
    "Fax": "(408) 996-1012",
    "Website": "http://www.nowebsitebraeburn.com"
}, {
    "ID": 13,
    "CompanyName": "PriceCo",
    "Address": "30 Hunter Lane",
    "City": "Camp Hill",
    "State": "Pennsylvania",
    "Zipcode": 17011,
    "Phone": "(717) 761-2633",
    "Fax": "(717) 761-2334",
    "Website": "http://www.nowebsitepriceco.com"
}, {
    "ID": 14,
    "CompanyName": "Ultimate Gadget",
    "Address": "1557 Watson Blvd",
    "City": "Warner Robbins",
    "State": "Georgia",
    "Zipcode": 31093,
    "Phone": "(995) 623-6785",
    "Fax": "(995) 623-6786",
    "Website": "http://www.nowebsiteultimategadget.com"
}, {
    "ID": 15,
    "CompanyName": "Electronics Depot",
    "Address": "2455 Paces Ferry Road NW",
    "City": "Atlanta",
    "State": "Georgia",
    "Zipcode": 30339,
    "Phone": "(800) 595-3232",
    "Fax": "(800) 595-3231",
    "Website": "http://www.nowebsitedepot.com"
}, {
    "ID": 16,
    "CompanyName": "EZ Stop",
    "Address": "618 Michillinda Ave.",
    "City": "Arcadia",
    "State": "California",
    "Zipcode": 91007,
    "Phone": "(626) 265-8632",
    "Fax": "(626) 265-8633",
    "Website": "http://www.nowebsiteezstop.com"
}, {
    "ID": 17,
    "CompanyName": "Clicker",
    "Address": "1100 W. Artesia Blvd.",
    "City": "Compton",
    "State": "California",
    "Zipcode": 90220,
    "Phone": "(310) 884-9000",
    "Fax": "(310) 884-9001",
    "Website": "http://www.nowebsiteclicker.com"
}, {
    "ID": 18,
    "CompanyName": "Store of America",
    "Address": "2401 Utah Ave. South",
    "City": "Seattle",
    "State": "Washington",
    "Zipcode": 98134,
    "Phone": "(206) 447-1575",
    "Fax": "(206) 447-1576",
    "Website": "http://www.nowebsiteamerica.com"
}, {
    "ID": 19,
    "CompanyName": "Zone Toys",
    "Address": "1945 S Cienega Boulevard",
    "City": "Los Angeles",
    "State": "California",
    "Zipcode": 90034,
    "Phone": "(310) 237-5642",
    "Fax": "(310) 237-5643",
    "Website": "http://www.nowebsitezonetoys.com"
}, {
    "ID": 20,
    "CompanyName": "ACME",
    "Address": "2525 E El Segundo Blvd",
    "City": "El Segundo",
    "State": "California",
    "Zipcode": 90245,
    "Phone": "(310) 536-0611",
    "Fax": "(310) 536-0612",
    "Website": "http://www.nowebsiteacme.com"
}];

let employees: Employee[] = [{
  "ID": 1,
  "Head_ID": 0,
  "FirstName": "John",
  "LastName": "Heart",
  "Position": "CEO",
  "BirthDate": "1964/03/16",
  "HireDate": "1995/01/15",
  "Title": "Mr.",
  "Address": "351 S Hill St.",
  "City": "Los Angeles",
  "State": "California",
  "Zipcode": 90013,
  "Email": "jheart@dx-email.com",
  "Skype": "jheartDXskype",
  "HomePhone": "(213) 555-9208",
  "DepartmentID": 6,
  "MobilePhone": "(213) 555-9392"
},{
  "ID": 2,
  "Head_ID": 1,
  "FirstName": "Olivia",
  "LastName": "Peyton",
  "Position": "Sales Assistant",
  "BirthDate": "1981/06/03",
  "HireDate": "2012/05/14",
  "Title": "Mrs.",
  "Address": "807 W Paseo Del Mar",
  "City": "Los Angeles",
  "State": "California",
  "Zipcode": 90036,
  "Email": "oliviap@dx-email.com",
  "Skype": "oliviapDXskype",
  "HomePhone": "(310) 555-2728",
  "DepartmentID": 5,
  "MobilePhone": "(818) 555-2387"
}, {
  "ID": 3,
  "Head_ID": 1,
  "FirstName": "Robert",
  "LastName": "Reagan",
  "Position": "CMO",
  "BirthDate": "1974/09/07",
  "HireDate": "2002/11/08",
  "Title": "Mr.",
  "Address": "4 Westmoreland Pl.",
  "City": "Bentonville",
  "State": "Arkansas",
  "Zipcode": 91103,
  "Email": "robertr@dx-email.com",
  "Skype": "robertrDXskype",
  "HomePhone": "(818) 555-2438",
  "DepartmentID": 6,
  "MobilePhone": "(818) 555-2387"
}, {
  "ID": 4,
  "Head_ID": 1,
  "FirstName": "Greta",
  "LastName": "Sims",
  "Position": "HR Manager",
  "BirthDate": "1977/11/22",
  "HireDate": "1998/04/23",
  "Title": "Ms.",
  "Address": "1700 S Grandview Dr.",
  "State": "Georgia",
  "City": "Atlanta",
  "Zipcode": 91803,
  "Email": "gretas@dx-email.com",
  "Skype": "gretasDXskype",
  "HomePhone": "(818) 555-0976",
  "DepartmentID": 5,
  "MobilePhone": "(818) 555-6546"
}, {
  "ID": 5,
  "Head_ID": 2,
  "FirstName": "Brett",
  "LastName": "Wade",
  "Position": "IT Manager",
  "BirthDate": "1968/12/01",
  "HireDate": "2009/03/06",
  "Title": "Mr.",
  "Address": "1120 Old Mill Rd.",
  "State": "Idaho",
  "City": "Boise",
  "Zipcode": 91108,
  "Email": "brettw@dx-email.com",
  "Skype": "brettwDXskype",
  "HomePhone": "(626) 555-5985",
  "DepartmentID": 7,
  "MobilePhone": "(626) 555-0358"
}, {
  "ID": 6,
  "Head_ID": 2,
  "FirstName": "Sandra",
  "LastName": "Johnson",
  "Position": "Controller",
  "BirthDate": "1974/11/15",
  "HireDate": "2005/05/11",
  "Title": "Mrs.",
  "Address": "4600 N Virginia Rd.",
  "State": "Utah",
  "City": "Beaver",
  "Zipcode": 90807,
  "Email": "sandraj@dx-email.com",
  "Skype": "sandrajDXskype",
  "HomePhone": "(562) 555-8272",
  "DepartmentID": 5,
  "MobilePhone": "(562) 555-2082"
}, {
  "ID": 7,
  "Head_ID": 3,
  "FirstName": "Kevin",
  "LastName": "Carter",
  "Position": "Shipping Manager",
  "BirthDate": "1978/01/09",
  "HireDate": "2009/08/11",
  "Title": "Mr.",
  "Address": "424 N Main St.",
  "State": "California",
  "City": "San Diego",
  "Zipcode": 90012,
  "Email": "kevinc@dx-email.com",
  "Skype": "kevincDXskype",
  "HomePhone": "(213) 555-8038",
  "DepartmentID": 3,
  "MobilePhone": "(213) 555-2840"
}, {
  "ID": 8,
  "Head_ID": 3,
  "FirstName": "Cynthia",
  "LastName": "Stanwick",
  "Position": "HR Assistant",
  "BirthDate": "1985/06/05",
  "HireDate": "2008/03/24",
  "Title": "Ms.",
  "Address": "2211 Bonita Dr.",
  "City": "Little Rock",
  "State": "Arkansas",
  "Zipcode": 90265,
  "Email": "cindys@dx-email.com",
  "Skype": "cindysDXskype",
  "HomePhone": "(818) 555-6808",
  "DepartmentID": 4,
  "MobilePhone": "(818) 555-6655"
}, {
  "ID": 9,
  "Head_ID": 3,
  "FirstName": "Kent",
  "LastName": "Samuelson",
  "Position": "Ombudsman",
  "BirthDate": "1972/09/11",
  "HireDate": "2009/04/22",
  "Title": "Dr.",
  "Address": "12100 Mora Dr",
  "City": "St. Louis",
  "State": "Missouri",
  "Zipcode": 90272,
  "Email": "kents@dx-email.com",
  "Skype": "kentsDXskype",
  "HomePhone": "(562) 555-1328",
  "DepartmentID": 26,
  "MobilePhone": "(562) 555-9282"
}, {
  "ID": 10,
  "Head_ID": 4,
  "FirstName": "Taylor",
  "LastName": "Riley",
  "Position": "Network Admin",
  "BirthDate": "1982/08/14",
  "HireDate": "2012/04/14",
  "Title": "Mr.",
  "Address": "7776 Torreyson Dr",
  "City": "San Jose",
  "State": "California",
  "Zipcode": 90012,
  "Email": "taylorr@dx-email.com",
  "Skype": "taylorrDXskype",
  "HomePhone": "(310) 555-9712",
  "DepartmentID": 5,
  "MobilePhone": "(310) 555-7276"
}, {
  "ID": 11,
  "Head_ID": 4,
  "FirstName": "Davey",
  "LastName": "Jones",
  "Position": "Network Admin",
  "BirthDate": "1982/08/14",
  "HireDate": "2012/04/14",
  "Title": "Mr.",
  "Address": "7776 Torreyson Dr",
  "City": "San Jose",
  "State": "California",
  "Zipcode": 90012,
  "Email": "taylorr@dx-email.com",
  "Skype": "taylorrDXskype",
  "HomePhone": "(310) 555-9712",
  "DepartmentID": 5,
  "MobilePhone": "(310) 555-7276"
}];

@Injectable()
export class Service {
    getCustomers(): Customer[] {
        return сustomers;
    }
    getEmployees(): Employee[] {
      return employees;
    }
}
