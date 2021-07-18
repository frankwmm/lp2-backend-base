import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { Materia } from '../../../models/materias';

@Component({
  selector: 'app-materiaslista',
  templateUrl: './materiaslista.component.html',
  styleUrls: ['./materiaslista.component.css']
})
export class MateriaslistaComponent implements OnInit {
@Input() materias: Materia[];
@Output() onDelete: EventEmitter<number> = new EventEmitter();
@Output() onNew: EventEmitter<boolean> = new EventEmitter();
@Output() onEdit: EventEmitter<number> = new EventEmitter();
  constructor() { }
q
  ngOnInit(): void {
  }

  public delete(id: number): void {
    this.onDelete.emit(id);
  }

  public newMateria(): void {
    this.onNew.emit(true);
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }

}
