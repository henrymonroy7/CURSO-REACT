import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { WishSpotRoutingModule } from './wish-spot-routing.module';
import { CapturaDatosUsuarioComponent } from './components/captura-datos-usuario/captura-datos-usuario.component';
import { HomeWishSpotComponent } from './pages/home-wish-spot/home-wish-spot.component';
import { SentimientosComponent } from './pages/sentimientos/sentimientos.component';
import { PersonalidadComponent } from './pages/personalidad/personalidad.component';
import { ExperienciaMultisensorialComponent } from './pages/experiencia-multisensorial/experiencia-multisensorial.component';
import { EstadoUniasComponent } from './pages/estado-unias/estado-unias.component';
import { LooksComponent } from './pages/looks/looks.component';
import { CardTestComponent } from './components/card-test/card-test.component';


@NgModule({
  declarations: [
    CapturaDatosUsuarioComponent, 
    HomeWishSpotComponent, 
    SentimientosComponent, 
    PersonalidadComponent, 
    ExperienciaMultisensorialComponent, 
    EstadoUniasComponent, 
    LooksComponent, CardTestComponent    
  ],

  imports: [
    CommonModule,   
    // BrowserModule, 
    WishSpotRoutingModule    
  ]  
})

export class WishSpotModule { }
