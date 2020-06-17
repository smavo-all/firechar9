##Configuracion dentro del Proyecto para usar Firebase

### 1
Recomiendo crear de antemano el API o aplicación de firebase asi como los objetos o listas que se muestran en el video, es decir lo correspondiente a la plataforma de firebase.

### 2
Al crear el proyecto de angular antes de ejecutarlo se instalan las paqueterias necesarias para trabajar con angular

* npm i @angular/fire
* ng add @angular/fire@next
* npm install firebase @angular/fire --save

sinceramente no se como trabaja cada comando pero les puedo decir que en el primero se instala obviamenete el angular fire, en el segundo se reparan las libreiras o instalan extras dependiento de la primer instalación además de que se valida mediante un toquen que se genera al redireccionarte a tu cuenta de firebase y por ultimo se selecciona la aplicación o api que creamos previamente para trabajar con ella. En el ultimo comando se instala firebase para poder trabajar con su base de datos es decir la que ocuparemos en el firechat ya que en la mayoria de los errores que presenta en este paso de instalación es que no puede encontrar los modulos de firestore.

### 3
Como siguiente paso se procede a realizar los pasos de la guía rapida de angularfire (en el video esta en su version beta pero en la actualidad ya no es angularfire2 si no que ocupa los mismos repositorios de angular fire actualizados)

4° para configurar la variable enviroments recomiendo que copien directamente los datos de firebase ya que utilizan dos campos o variables más que no se muestran ni el el video ni en la guía de inicio rapido, la forma en como ingresen los datos en el archivo enviroments.ts es opcional si deciden hacerlo dentro de la variable ya definida o crear otra solo recuerdenlo al momento de utilizarla.

### 4 - RUTA: src/environments/ environment.ts
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBI5TDTVz5uvXwr4_v8hhyyGhLkkeRlemo",
    authDomain: "firechat9-637ce.firebaseapp.com",
    databaseURL: "https://firechat9-637ce.firebaseio.com",
    projectId: "firechat9-637ce",
    storageBucket: "firechat9-637ce.appspot.com",
    messagingSenderId: "97577839547",
    appId: "1:97577839547:web:594199d9809a0ac85d729e",
    measurementId: "G-YGJVHTXGWT"
  }
};



### 5
En el archivo de app.module.ts debe de importarse los siguientes modulos


// importaciones para angularfire
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
dentro de los imports anotan la siguiente linea

AngularFireModule.initializeApp(environment.firebase)



### 6
Lo siguiente es configurar el archivo app.component.ts pa ello se importa lo siguiente

// importaciones para angularfire
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

y se añaden las siguientes lineas dentro de la clase, donde la palabra chats que se encuentra dentro del contructor entre comillas corresponde al nombre con el que llamamos a nuestras listas en firebase y la variable chats de tipo Observable  es la usaremos en nuestro app.component.html

chats: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.chats = firestore.collection('chats').valueChanges();
  }



### 7
Ya por ultimo queda visualizar el arreglo en el app.component.html

<ul>
    <li class="text" *ngFor="let chat of chats | async">
        {‌{chat | json }}
    </li>
</ul>

donde chats es la variable (Observable) que declaramos en el app.componente.ts y el json es un pipe para poder visualizar el arreglo ya que de otra forma solo mostrara objetos vacios.

espero que les sirva y les repito unicamente es en los primeros pasos de instalación para poder seguir trabajando con el curso



### ADICIONAL EN FIREBASE 
01 En el proyecto Firechar9 / database / cloud firestore

02 crear la base de datos en modo produccion

03 creada la base de datos : modificar la regla de false a tre.

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
