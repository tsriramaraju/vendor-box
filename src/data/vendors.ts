import { Headings, Vendor } from 'interfaces/vendor';

export const criteriaData: Headings[] = [
  {
    name: 'Product Description',
  },
  {
    name: 'Funding History',
    leaf: ['Founded', 'Key Investors', 'Founders'],
  },
  {
    name: 'Pricing',
  },
  {
    name: 'Features',
  },
  {
    name: 'Customer Case Studies',
  },
];

export const vendorData: Vendor[] = [
  {
    name: 'Dropbox',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png',
    score: 4.5,
    id: '1',
    data: [
      {
        name: 'Product Description',
        value: 'Dropbox is a file hosting service',
      },
      {
        name: 'Funding History',
        value: 'Total Funding: $1.2B',
      },
      {
        name: 'Pricing',
        value: 'www.dropbox.com/pricing',
      },
      {
        name: 'Features',
        value: '5 different features',
      },
      {
        name: 'Customer Case Studies',
        value: '4 Customer Case Studies found',
      },
    ],
  },
  {
    name: 'Google Drive',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png',
    score: 7,
    id: '2',
    data: [
      {
        name: 'Product Description',
        value: 'Google drive is a file hosting service',
      },
      {
        name: 'Funding History',
        value: 'Total Funding: $37M',
      },
      {
        name: 'Pricing',
        value: 'www.drive.google.com/pricing',
      },
      {
        name: 'Features',
        value: '3 different features',
      },
      {
        name: 'Customer Case Studies',
        value: '9 Customer Case Studies found',
      },
    ],
  },
  {
    name: 'Box',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Box%2C_Inc._logo.svg/640px-Box%2C_Inc._logo.svg.png',
    score: 5,
    id: '3',
    data: [
      {
        name: 'Product Description',
        value: 'Box is a Content Management System',
      },
      {
        name: 'Funding History',
        value: 'Total Funding: $112M',
      },
      {
        name: 'Pricing',
        value: 'www.box.com/pricing',
      },
      {
        name: 'Features',
        value: '7 different features',
      },
      {
        name: 'Customer Case Studies',
        value: '2 Customer Case Studies found',
      },
    ],
  },
];
