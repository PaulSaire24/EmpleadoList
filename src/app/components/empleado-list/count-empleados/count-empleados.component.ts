import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; // aqui se importa EventEmitter, Input y output

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  radioButonSeleccioando = "Todos";//(i)
  @Input() todos: number;
  @Input() femenino: number;
  @Input() masculino: number;
  @Output() sdfs = new EventEmitter<string>(); // se crea una variable con nombre cualquiera

  constructor() { 
    this.todos = 0;
    this.femenino = 0;
    this.masculino = 0;
  }

  ngOnInit(): void {
  }

  radioEmit(): void{ // se crea un metedoc con nombre cualquiera para poder emitir la variable
  this.sdfs.emit(this.radioButonSeleccioando); //(i)
  }
}
