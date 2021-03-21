import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

  constructor() { }

  message!: string;

  private static readonly errorMessages = {
    'required': (message: string) => message,
    'minlength': (message: string) => message,
    'maxlength': (message: string) => message,
    'email': (message: string) => message,
    'pattern': (message: string) => message,
    'min': (message: string) => message,
    'notEqual': (message: string) => message,
    'age': (message: string, params: {}) => message,
  };

  @Input() private control!: AbstractControlDirective | AbstractControl;
  @Input() public RequiredMessage!: string;
  @Input() public MinMaxMessage!: string;
  @Input() public EmailMessage!: string;
  @Input() public PatternMessage!: string;
  @Input() public MinMessage!: string;
  @Input() public MaxMessage!: string;

  showErrors(): boolean | null {
    if (this.control && this.control.errors) {
      return (this.control.touched && this.control.dirty);
    } else {
      return false;
    }
  }

  errors(): ValidationErrors | {} {
    return Object.keys(this.control.errors)
    .map(field => this.getMessage(field, this.control.errors[field]), );
  }

  getMessage(type: string, params: {}) : string {

    switch (type) {
      case 'email': {
        this.message = this.EmailMessage;
        break;
      }
      case 'required': {
        this.message = this.RequiredMessage;
        break;
      }
      case 'pattern': {
        this.message = this.PatternMessage;
        break;
      }
      case 'min': {
        this.message = this.MinMessage;
        break;
      }
      case 'maxlength': {
        this.message = this.MaxMessage;
        break;
      }
      case 'notEqual': {
        this.message = this.PatternMessage;
        break;
      }
    }
    return ValidationComponent.errorMessages[type](this.message);
  }

}
