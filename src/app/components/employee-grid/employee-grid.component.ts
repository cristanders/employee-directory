import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-grid',
  standalone: false,
  templateUrl: './employee-grid.component.html',
  styleUrl: './employee-grid.component.scss'
})
export class EmployeeGridComponent {
  employees = [
    { name: 'Jaime Gerardo Martinez Gomez', role: 'Director of Operations', email: 'jaime.martinez@company.com', department: 'Management' },
    { name: 'Brayan Oswaldo Campa Fuentes', role: 'Full Stack Developer', email: 'brayan.campa@company.com', department: 'Engineering' },
    { name: 'Cristian Alexander Pérez Alfaro', role: 'Cybersecurity Specialist', email: 'cristian.perez@company.com', department: 'Security' },
    { name: 'Juan Pablo Cajchun Polanco', role: 'UI/UX Designer', email: 'juan.cajchun@company.com', department: 'Design' }
  ];
}