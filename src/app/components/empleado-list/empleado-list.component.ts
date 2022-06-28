import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
 
  listEmpleados: Empleados[] = [
    {legajo:1, nombre:'juan', apellido:'Perez', sexo:'Masculino', salario:2500},
    {legajo:2, nombre:'Erika', apellido:'Gomez', sexo:'Femenino', salario:54500},
    {legajo:3, nombre:'Erick', apellido:'Gonzales', sexo:'Masculino', salario:2278},
    {legajo:4, nombre:'Ferran', apellido:'Torrez', sexo:'Masculino', salario:55450},
    {legajo:4, nombre:'Celeste', apellido:'Anibal', sexo:'Femenino', salario:5556450},
    {legajo:4, nombre:'Celeste', apellido:'Anibal', sexo:'Femenino', salario:5556450}
  ]

  radioButonSeleccioando = "Todos";

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotal(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemenino(): number{
    return this.listEmpleados.filter(list=>list.sexo==="Femenino").length;
  }
  obtenerTotalMasculino(): number{
    return this.listEmpleados.filter(list=>list.sexo==="Masculino").length;
  }
  gsdgs(radioButonSeleccioando:string): void{
    this.radioButonSeleccioando = radioButonSeleccioando;
  }
}
