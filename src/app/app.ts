import { Component } from '@angular/core';
import { UserFormComponent } from './form_test/formcomponent'; // ← path ต้องตรงกับไฟล์จริง

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserFormComponent], // ← ต้องมีตัวนี้
  templateUrl: './app.html',
  styleUrl: './form_test/form.component.scss'
})
export class App {}