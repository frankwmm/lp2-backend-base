import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { Usuario } from '../../../models/usuarios';
@Component({
  selector: 'app-usuarioslista',
  templateUrl: './usuarioslista.component.html',
  styleUrls: ['./usuarioslista.component.css']
})
export class UsuarioslistaComponent implements OnInit {
  @Input() usuarios: Usuario[];
  @Output() onEdit: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }

}
