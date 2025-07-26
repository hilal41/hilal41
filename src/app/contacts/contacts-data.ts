export interface Contact {
  id: number;
  fullName: string;
  email: string;
  countryCode: string;
  contactNumber: string;
}

export const CONTACTS: Contact[] = [
  { id: 1, fullName: 'Alice Smith', email: 'alice@example.com', countryCode: '+1', contactNumber: '555-1111' },
  { id: 2, fullName: 'Bob Johnson', email: 'bob@example.com', countryCode: '+44', contactNumber: '20-2222' },
  { id: 3, fullName: 'Charlie Brown', email: 'charlie@example.com', countryCode: '+91', contactNumber: '98765-3333' },
  { id: 4, fullName: 'David Lee', email: 'david@example.com', countryCode: '+81', contactNumber: '03-4444' },
  { id: 5, fullName: 'Eva Green', email: 'eva@example.com', countryCode: '+61', contactNumber: '2-5555' },
  { id: 6, fullName: 'Frank White', email: 'frank@example.com', countryCode: '+49', contactNumber: '30-6666' },
  { id: 7, fullName: 'Grace Black', email: 'grace@example.com', countryCode: '+33', contactNumber: '1-7777' },
  { id: 8, fullName: 'Hannah Blue', email: 'hannah@example.com', countryCode: '+39', contactNumber: '06-8888' },
  { id: 9, fullName: 'Ian Red', email: 'ian@example.com', countryCode: '+7', contactNumber: '495-9999' },
  { id: 10, fullName: 'Jack Orange', email: 'jack@example.com', countryCode: '+86', contactNumber: '10-0000' },
  { id: 11, fullName: 'Kate Yellow', email: 'kate@example.com', countryCode: '+971', contactNumber: '4-1010' },
  { id: 12, fullName: 'Leo Purple', email: 'leo@example.com', countryCode: '+966', contactNumber: '11-2020' }
];
