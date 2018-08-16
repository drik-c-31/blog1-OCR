import { Component } from '@angular/core';
import { Post } from './post/post.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  postslist= [
	new Post('Une date importante','Celle de ma naissance... Sans cet évènement, vous n\'auriez pas eu ce projet à corriger. Il ne fera pas date, forcément, il fait le nécessaire, rien de plus, rien  de moins...',3,new Date(268257600000)),
	new Post('blog Angular','je ne sais pas quoi écrire de plus si ce n\'est que je pense que tout est complet dans cet exemple, et que le projet est réussi. En espérant que la correction ne mettra pas trop de temps...',-1,new Date(1532533500000)),
	new Post('et un petit troisième','Afin d\'avoir au lancement les 3 valeurs possibles pour le nb de loveIts : positif, négatif ou égal à 0...',0,new Date(1532433500000))
  ];

  

}
