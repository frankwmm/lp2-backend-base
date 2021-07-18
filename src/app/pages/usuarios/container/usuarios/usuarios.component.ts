import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios';
import { UserService } from 'src/providers/users/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  error: string; 
  usuarios: Usuario[];
  usuario: Usuario;


  constructor(private usuarioService :UserService) { }

  ngOnInit(): void {

    this.getUsuarios();

  }


  getUsuarios(): void{ 
    this.usuarioService.getUsuarios(). subscribe( response=>{
        this.usuarios = response.data;
        console.log(this.usuarios);
    }, error => {
      this.error = error; 
  
    });
  }

  public actualizaState(id: number): void {
    this.usuarioService.actualizaEstadoUsuario(id).subscribe(response => {
      if (response.success) {
        this.getUsuarios();
      }
    }, error => {
      this.error = error;
    });
  }
  


}