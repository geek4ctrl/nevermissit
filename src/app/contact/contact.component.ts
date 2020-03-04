import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { NgForm } from '@angular/forms';
import { Email } from './../../assets/smtp';
// declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.user.name = f.form.value.name;
    this.user.email = f.form.value.email;
    this.user.suggestion = f.form.value.suggestion;

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'laurent.mb19@gmail.com',
      Password: '0CAEB7CB1238EB4B323E5D62F81D8B867951',
      To: 'laurent.mb19@gmail.com',
      From: 'laurent.mb19@gmail.com',
      Subject: 'Feedback',
      Body: `
    <i>This is sent as a feedback from my resume page.</i> <br/>
    <b>Name: </b>${this.user.name} <br />
    <b>Email: </b>${this.user.email}<br />
    <b>Subject: </b>Feedback<br /> <b>Message:</b>
    <br /> ${this.user.suggestion} <br><br> <b>~End of Message.~</b>`
    }).then(message => {
      alert(message);
      f.resetForm();
    });
  }
}
