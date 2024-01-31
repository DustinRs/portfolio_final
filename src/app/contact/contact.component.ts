import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface OnInit {
  ngOnInit(): void
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  nameCheck = true;
  messageCheck = true;
  emailCheck = true;
  checkBoxCheck = true;

  ngOnInit() {
    this.addCheckBoxListener();
  }

  
  
  async sendMail(){
    //
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let button = (document.getElementById('Button') as HTMLButtonElement);
    
    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;
    button.classList.remove('buttonActive');
    //Animation anzeigen
    
    let fd = new FormData();
    fd.append('email', emailField.value);
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    // senden
    await fetch('https://formspree.io/f/xdoqaena',
    {
      method:'POST',
      body: fd,
      headers: {
        'Accept': 'application/json'
    }
    }
    );
    
    setTimeout(() => {
      nameField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
      emailField.disabled = false;
      window.location.href = 'successMail';
    }, 2000);
    
  }
  
  
  addNameListener(){
    let input = document.getElementById('name');
    input?.addEventListener("input", this.validateTitleInput);
  }
  addMessageListener(){
    let input = document.getElementById('message');
    input?.addEventListener("input", this.validateMessageInput);
    
  }
  addEmailListener(){
    let input = document.getElementById('email');
    input?.addEventListener("input", this.validateEmailInput);
  }
  
  addCheckBoxListener(){
    let input = document.getElementById('checkbox');
    input?.addEventListener("click", this.validateCheckboxInput);
    input?.addEventListener("click", this.enableButton);
  }
  
  validateTitleInput(){
    let name = (document.getElementById('name') as HTMLInputElement)?.value;
    let nameField = document.getElementById('name');
    let span = document.getElementById('nameRequired');
    let margin = document.getElementById('labelName');
    let icon:string | any = document.getElementById('iconName');
    if (name?.length > 0 && name?.length < 4) {
      nameField?.setAttribute('style', 'border: 2px solid red !important;');
      span?.setAttribute('style', 'display: block');
      margin?.setAttribute('style', 'margin-bottom: 0px');
      icon.src = 'assets/icons/iconError.png';
      this.nameCheck = false;
    } else if (name?.length == 0) {
      nameField?.setAttribute('style', 'border: 2px solid #e86f00 !important;');
      span?.setAttribute('style', 'display: none');
      margin?.setAttribute('style', 'margin-bottom: 25px');
      icon.src = '';
    } else {
      nameField?.setAttribute('style', 'border: 2px solid green !important;');
      span?.setAttribute('style', 'display: none');
      margin?.setAttribute('style', 'margin-bottom: 25px');
      icon.src = 'assets/icons/iconCheck.png';
    }
  }
  
  validateMessageInput(){
    let message = (document.getElementById('message') as HTMLInputElement)?.value;
    let messageField = document.getElementById('message');
    let span = document.getElementById('messageRequired');
    let margin = document.getElementById('labelMessage');
    let icon:string | any = document.getElementById('iconMessage');
    if (message?.length < 10) {
      messageField?.setAttribute('style', 'border: 2px solid red !important;');
      span?.setAttribute('style', 'display: block');
      margin?.setAttribute('style', 'margin-bottom: 0px');
      icon.src = 'assets/icons/iconError.png';
      this.messageCheck = false;
    } else if (message?.length == 0) {
      messageField?.setAttribute('style', 'border: 2px solid #e86f00 !important;');
      span?.setAttribute('style', 'display: none');
      margin?.setAttribute('style', 'margin-bottom: 25px');
      icon.src = '';
    } else {
      messageField?.setAttribute('style', 'border: 2px solid green !important;');
      span?.setAttribute('style', 'display: none');
      margin?.setAttribute('style', 'margin-bottom: 25px');
      icon.src = 'assets/icons/iconCheck.png';
    }
  }
  validateEmailInput(){
    let email = (document.getElementById('email') as HTMLInputElement)?.value;
    let emailField = document.getElementById('email');
    let span = document.getElementById('emailRequired');
    let margin = document.getElementById('labelEmail');
    let icon:string | any = document.getElementById('iconEmail');
    if (email?.includes('@')&&email?.includes('.de') || email?.includes('.com') || email?.includes('.net')) {
      emailField?.setAttribute('style', 'border: 2px solid green !important;');
      span?.setAttribute('style', 'display: none');
      margin?.setAttribute('style', 'margin-bottom: 25px');
      icon.src = 'assets/icons/iconCheck.png';
    } else if (email?.length == 0) {
      emailField?.setAttribute('style', 'border: 2px solid #e86f00 !important;');
      span?.setAttribute('style', 'display: none');
      margin?.setAttribute('style', 'margin-bottom: 25px');
      icon.src = '';
    } else {
      emailField?.setAttribute('style', 'border: 2px solid red !important;');
      span?.setAttribute('style', 'display: block');
      margin?.setAttribute('style', 'margin-bottom: 0px');
      icon.src = 'assets/icons/iconError.png';
    }
  }
  
  validateCheckboxInput() {
    let checkbox = (document.getElementById('checkbox') as HTMLInputElement);
    
    if (checkbox instanceof HTMLInputElement && checkbox.checked) {
      this.checkBoxCheck = true;
    } else {
      this.checkBoxCheck = false;
    }
  }

  enableButton() {
    let button = (document.getElementById('Button') as HTMLButtonElement);
    if (this.checkBoxCheck) {
      button.disabled = false;
      button.classList.add('buttonActive');
    } else {
      button.disabled = true;
      button.classList.remove('buttonActive');
    }
  }
}


