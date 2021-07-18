import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ProductComponent} from "../../pages/product/container/product/product.component";
import {ProductNewComponent} from "../../pages/product/components/forms/product-new/product-new.component";
import {ProductEditComponent} from "../../pages/product/components/forms/product-edit/product-edit.component";
import {ProductListComponent} from "../../pages/product/components/list/product-list/product-list.component";
import {ProductsService} from "../../../providers/products/products.service";

import { AsignaturasComponent } from '../../pages/asignaturas/container/asignaturas/asignaturas.component';
import { AsignaturanuevaComponent } from '../../pages/asignaturas/components/forms/asignaturanueva/asignaturanueva.component';
import { AsignaturaactualizarComponent } from '../../pages/asignaturas/components/forms/asignaturaactualizar/asignaturaactualizar.component';
import { AsignaturalistaComponent } from '../../pages/asignaturas/components/list/asignaturalista/asignaturalista.component';
import { AsignaturasService } from 'src/providers/asignaturas/asignaturas.service';

import { MateriasComponent } from '../../pages/materias/container/materias/materias.component';
import { MateriaslistaComponent } from '../../pages/materias/components/list/materiaslista/materiaslista.component';
import { MateriasService } from 'src/providers/materia/materias.service';
import {MateriaNewComponent} from "../../pages/materias/components/forms/materia-new/materia-new.component";
import {MateriaEditComponent} from "../../pages/materias/components/forms/materia-edit/materia-edit.component";

import { UserService } from 'src/providers/users/user.service';
import { UsuariosComponent } from '../../pages/usuarios/container/usuarios/usuarios.component';
import { UsuarioslistaComponent } from '../../pages/usuarios/components/list/usuarioslista/usuarioslista.component';
// import { ToastrModule } from 'ngx-toastr';
import { AlumnosService } from 'src/providers/alumnos/alumnos.service';
import { AlumnosComponent } from '../../pages/alumnos/container/alumnos/alumnos.component';
import { AlumnoslistaComponent } from '../../pages/alumnos/components/list/alumnoslista/alumnoslista.component';

import { MatriculaNewComponent } from '../../pages/matricula/components/form/matricula-new/matricula-new/matricula-new.component';
import { MatriculasComponent } from '../../pages/matricula/container/matriculas/matriculas.component';
import { MatriculaslistaComponent } from '../../pages/matricula/components/list/matriculaslista/matriculaslista.component';
import { PeriodosService } from 'src/providers/periodo/periodos.service';
import { MatriculasService } from 'src/providers/matricula/matriculas.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,

    ProductComponent,
    ProductNewComponent,
    ProductEditComponent,
    ProductListComponent,

    AsignaturasComponent,
    AsignaturanuevaComponent,
    AsignaturaactualizarComponent,
    AsignaturalistaComponent,

    
    MateriasComponent,
    MateriaslistaComponent,       
    MateriaEditComponent,
    MateriaNewComponent,
    UsuariosComponent,
    UsuarioslistaComponent,
 
    AlumnosComponent,
    AlumnoslistaComponent,

    MatriculasComponent,
    MatriculaslistaComponent,
    MatriculaNewComponent,

  ], providers: [ProductsService, AsignaturasService, MateriasService, UserService, AlumnosService, PeriodosService, MatriculasService]
})

export class AdminLayoutModule {
}
