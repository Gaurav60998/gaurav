import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee!:any;
  empForm!:FormGroup;

  constructor(private es:EmployeeService,private fb:FormBuilder) {
    this.empForm=this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      salary:['',Validators.required]
  })
  }

  ngOnInit():void{
    this.es.getEmployee().subscribe((data)=>{
      this.employee=data;
    })
  }
  Add(){
    this.es.addEmployee(this.empForm.value).subscribe(()=>{
      console.log("added");
    })
  }

  deleteEmployee(id:number){
    this.es.deleteEmployee(id).subscribe(()=>{
      console.log("deleted");
    })
  }

  editEmployee(id:number,employeeData:any){
    this.es.updateEmployee(id,this.empForm.value).subscribe(()=>{
      console.log("updated");
    })
  }
}