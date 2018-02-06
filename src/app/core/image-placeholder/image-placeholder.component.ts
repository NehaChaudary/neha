import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  templateUrl: './image-placeholder.component.html',
  styleUrls: ['./image-placeholder.component.css']
})
export class ImagePlaceholderComponent implements OnInit {

 
  @Input("imgurl") imgurl:string;
  @Input() height:string;
  @Input() width:string;
  constructor() { }

  ngOnInit() {
  }

}
