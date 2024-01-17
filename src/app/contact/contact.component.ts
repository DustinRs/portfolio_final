import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail(){
    //
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //Animation anzeigen

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    // senden
    await fetch('https://dustin-rohrschneider.developerakademie.net/send_mail/send_mail.php',
    {
      method:'POST',
      body: fd
    }
    );
    

    //Text anzeigen: Nachricht gesendet.
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}


