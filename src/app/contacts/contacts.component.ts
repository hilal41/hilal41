import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CONTACTS, Contact } from './contacts-data';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, TableModule, PaginatorModule, SplitButtonModule, DialogModule, FormsModule, DropdownModule, ButtonModule, TooltipModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  countryCodes = [
    { label: '+1 (USA)', value: '+1' },
    { label: '+44 (UK)', value: '+44' },
    { label: '+91 (India)', value: '+91' },
    { label: '+81 (Japan)', value: '+81' },
    { label: '+61 (Australia)', value: '+61' },
    { label: '+49 (Germany)', value: '+49' },
    { label: '+33 (France)', value: '+33' },
    { label: '+39 (Italy)', value: '+39' },
    { label: '+7 (Russia)', value: '+7' },
    { label: '+86 (China)', value: '+86' },
    { label: '+971 (UAE)', value: '+971' },
    { label: '+966 (Saudi Arabia)', value: '+966' },
  ];
  contacts: Contact[] = CONTACTS;
  rows = 5;
  first = 0;

  displayEditDialog = false;
  editableContact: Contact | null = null;
  isAddMode = false;

  displayDeleteDialog = false;
  selectedContactToDelete: Contact | null = null;

  get paginatedContacts(): Contact[] {
    return this.contacts.slice(this.first, this.first + this.rows);
  }

  getActions(contact: Contact) {
    return [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editContact(contact)
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.deleteContact(contact)
      }
    ];
  }

  editContact(contact: Contact) {
    // Open dialog with a copy of the contact
    this.editableContact = { ...contact };
    this.isAddMode = false;
    this.displayEditDialog = true;
  }

  addContact() {
    // Open dialog for new contact
    this.editableContact = {
      id: this.getNextId(),
      fullName: '',
      email: '',
      countryCode: '',
      contactNumber: ''
    };
    this.isAddMode = true;
    this.displayEditDialog = true;
  }

  saveContact() {
    if (this.editableContact) {
      if (this.isAddMode) {
        this.contacts = [...this.contacts, { ...this.editableContact }];
      } else {
        const idx = this.contacts.findIndex(c => c.id === this.editableContact!.id);
        if (idx !== -1) {
          this.contacts[idx] = { ...this.editableContact };
        }
      }
    }
    this.displayEditDialog = false;
    this.editableContact = null;
    this.isAddMode = false;
  }

  cancelEdit() {
    this.displayEditDialog = false;
    this.editableContact = null;
    this.isAddMode = false;
  }

  getNextId(): number {
    return this.contacts.length ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
  }

  deleteContact(contact: Contact) {
    this.selectedContactToDelete = contact;
    this.displayDeleteDialog = true;
  }

  openDeleteFromDialog() {
    if (this.editableContact) {
      this.selectedContactToDelete = this.editableContact;
      this.displayDeleteDialog = true;
    }
  }

  confirmDelete() {
    if (this.selectedContactToDelete) {
      this.contacts = this.contacts.filter(c => c.id !== this.selectedContactToDelete!.id);
      // Close edit dialog if deleting the currently edited contact
      if (this.editableContact && this.selectedContactToDelete.id === this.editableContact.id) {
        this.displayEditDialog = false;
        this.editableContact = null;
        this.isAddMode = false;
      }
    }
    this.displayDeleteDialog = false;
    this.selectedContactToDelete = null;
  }

  cancelDelete() {
    this.displayDeleteDialog = false;
    this.selectedContactToDelete = null;
  }

  onPage(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
