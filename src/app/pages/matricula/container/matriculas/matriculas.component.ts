import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Alumno } from 'src/app/pages/alumnos/models/alumnos';
import { AlumnosService } from 'src/providers/alumnos/alumnos.service';
import { MatriculasService } from 'src/providers/matricula/matriculas.service';
import { PeriodosService } from 'src/providers/periodo/periodos.service';
import { MatriculaNewComponent } from '../../components/form/matricula-new/matricula-new/matricula-new.component';
import { Periodo } from '../../models/periodos';
@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

  error: string; 
  alumnos: Alumno[];
  alumno: Alumno;

  periodos:Periodo[];

  constructor(private alumnoService : AlumnosService, 
    private periodoService : PeriodosService,  private modalService: NgbModal, private matriculasService: MatriculasService) { 

  }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(): void{ 
    this.alumnoService.getAlumnosUsuarios().subscribe( response=>{
        this.alumnos = response.data;
        console.log(this.alumnos);
    }, error => {
      this.error = error; 
  
    });
  }

  onNewMatricula(eventalumno: Alumno){
  console.log(eventalumno);   
  this.periodoService.getPeriodos().subscribe( response=>{
    
    this.periodos = response.data;

    const productForm = this.modalService.open(MatriculaNewComponent, {size: 'lg'});
    productForm.componentInstance.title = 'Nuevo Matricula';
    productForm.componentInstance.alumno= eventalumno;
    productForm.componentInstance.periodos= this.periodos;
    productForm.result.then((result) => {
      console.log(result);
      this.matriculasService.postMatricula(result).subscribe(response => {
        //if (response.success) {
          console.log(response);
        //}
      }, error => {
        this.error = error;
      });
  
    });

    
}, error => {
  this.error = error; 

});

  }

}




