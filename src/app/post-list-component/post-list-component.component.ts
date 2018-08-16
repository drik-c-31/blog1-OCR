import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../post/post.module';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() postslist: Array<Post>;
  constructor() { }

  ngOnInit() {
  }

}
