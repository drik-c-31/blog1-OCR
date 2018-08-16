import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../post/post.module';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }
  getColor(){
	if(this.post.loveIts>0){
		return 'lightgreen';
	}else if(this.post.loveIts<0){
		return 'lightcoral';
	}else{
		return 'white';
	}
  }
  onPlusLove(){
	this.post.loveIts++;
  }
  onMoinsLove(){
	this.post.loveIts--;
  }
}
