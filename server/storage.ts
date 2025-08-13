import type { Contact, InsertContact } from "@shared/schema";

export interface IStorage {
  getContacts(): Promise<Contact[]>;
  getContactById(id: string): Promise<Contact | null>;
  createContact(contact: InsertContact): Promise<Contact>;
}

// In-memory storage implementation
class MemStorage implements IStorage {
  private contacts: Contact[] = [];
  private idCounter = 1;

  async getContacts(): Promise<Contact[]> {
    return [...this.contacts];
  }

  async getContactById(id: string): Promise<Contact | null> {
    return this.contacts.find(contact => contact.id === id) || null;
  }

  async createContact(contactData: InsertContact): Promise<Contact> {
    const contact: Contact = {
      id: this.idCounter.toString(),
      ...contactData,
      createdAt: new Date(),
    };
    
    this.contacts.push(contact);
    this.idCounter++;
    
    return contact;
  }
}

export const storage: IStorage = new MemStorage();