import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { CapturaDatosUsuarioComponent } from './wish-spot/components/captura-datos-usuario/captura-datos-usuario.component';
import { EstadoUniasComponent } from './wish-spot/pages/estado-unias/estado-unias.component';
import { ExperienciaMultisensorialComponent } from './wish-spot/pages/experiencia-multisensorial/experiencia-multisensorial.component';
import { HomeWishSpotComponent } from './wish-spot/pages/home-wish-spot/home-wish-spot.component';
import { LooksComponent } from './wish-spot/pages/looks/looks.component';
import { PersonalidadComponent } from './wish-spot/pages/personalidad/personalidad.component';
import { ResultadoComponent } from './wish-spot/pages/resultado/resultado.component';
import { SentimientosComponent } from './wish-spot/pages/sentimientos/sentimientos.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeWishSpotComponent,
        data: { breadcrumb: 'Home' },
        children: []
      },
      {
        path: 'dato-usuario',
        component: CapturaDatosUsuarioComponent,
        data: { breadcrumb: 'dato-usuario' }
      },
      {
        path: 'sentimiento',
        component: SentimientosComponent,
        data: { breadcrumb: 'sentimiento' }
      },
      {
        path: 'personalidad',
        component: PersonalidadComponent,
        data: { breadcrumb: 'personalidad' }
      },
      {
        path: 'experiencia-multisensorial',
        component: ExperienciaMultisensorialComponent,
        data: { breadcrumb: 'experiencia-multisensorial' }
      },
      {
        path: 'estado-unias',
        component: EstadoUniasComponent,
        data: { breadcrumb: 'estado-uñas' }
      },
      {
        path: 'look',
        component: LooksComponent,
        data: { breadcrumb: 'look' }
      },
      {
        path: 'resultado',
        component: ResultadoComponent,
        data: { breadcrumb: 'resultado' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
