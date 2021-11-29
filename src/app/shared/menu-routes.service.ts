import { Injectable } from '@angular/core';

@Injectable(
  // {providedIn: 'root'}
)
export class MenuRoutesService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      {
        name: 'dato-usuario',
        path: './dato-usuario',
        children: [
          {
            name: 'sentimiento',
            path: './sentimiento',
            children: [
              {
                name: 'personalidad',
                path: './personalidad',
                children: [
                  {
                    name: 'experiencia-multisensorial',
                    path: './experiencia-multisensorial',
                    children: [
                      {
                        name: 'estado-uñas',
                        path: './estado-uñas',
                        children: [
                          {
                            name: 'look',
                            path: './look',
                            children: [
                              {
                                name: 'resultado',
                                path: './resultado'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ];

    return menu;
  }
}
