import { Component, OnInit } from '@angular/core';
import { Materia } from '../../models/materias';
import { MateriasService } from 'src/providers/materia/materias.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MateriaNewComponent} from '../../components/forms/materia-new/materia-new.component';
import {MateriaEditComponent} from '../../components/forms/materia-edit/materia-edit.component';


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  error: string; 
  materias: Materia[];
  materia: Materia;

  constructor(private matService :MateriasService , private modalService: NgbModal) { }

  ngOnInit(): void {

  this.getMateria();
  
  }

  getMateria(): void{ 
    this.matService.getMateriassss(). subscribe( response=>{
        this.materias = response.data;
        console.log(this.materias);
    }, error => {
      this.error = error; 
  
  });
}

public delete(id: number): void {
  this.matService.deleteMateriasssss(id).subscribe(response => {
    if (response.success) {
      this.getMateria();
    }
  }, error => {
    this.error = error;
  });
}


public onNewMateria($event): void {
  console.log('holass');
  if ($event) {
    const materiaForm = this.modalService.open(MateriaNewComponent, {size: 'lg'});
    materiaForm.componentInstance.title = 'Nueva Materia';
    materiaForm.result.then((result) => {
      this.matService.saveAsignatura(result).subscribe(response => {
        if (response.success) {
          this.getMateria();
        }
      }, error => {
        this.error = error;
      });

    });
  }
}

edit(id: number): void {
  this.matService.getMateriaById(id).subscribe(response => {
    this.materia = response.data;

    const materiaForm = this.modalService.open(MateriaEditComponent, {size: 'lg'});
    materiaForm.componentInstance.title = 'Editar Materia';
    materiaForm.componentInstance.materia = this.materia;
    materiaForm.result.then((result) => {
      if (result) {
        this.matService.updateAsignatura(this.materia.id, result).subscribe(resp => {
          if (resp.success) {
            this.getMateria();
          }
        }, error => {
          this.error = error;
        });
      }
      console.log(result);
    });

  }, error => {
    this.error = error;
  });
}





}
