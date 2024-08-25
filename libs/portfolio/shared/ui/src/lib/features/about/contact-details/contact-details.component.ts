import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetails } from '../about-template/models/about-template.types';

@Component({
  selector: 'anx-contact-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent {
  content = input.required<ContactDetails>();
}

export const ContactDetailsMocks = {
  header: {
    title: 'Contact Details',
    description: `Feel free to reach out for projects, collaborations, or just to say hello! Currently seeking new opportunities.`,
  },
  emailId: {
    label: 'Email Id: ',
    value: 'me.sathish.git@gmail.com',
  },
  phoneNumber: {
    label: 'Ph Number: ',
    value: '+91 6380891338',
  },
};
