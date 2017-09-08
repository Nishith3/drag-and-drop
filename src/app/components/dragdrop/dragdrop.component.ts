import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {
	private itemsDropped:Array<any> = [];
	private itemsToDrop:Array<Object> = [
		{name: 'Address'},
		{name: 'Cell Phone'},
		{name: 'Email'}

	];
	private itemsToDrop2:Array<Object> = [
		{name: 'ACA status'},
		{name: 'Frequency'},
		{name: 'Manager'}

	];
	private addDropItem(event){
  	this.itemsDropped.push(event);
	}

	private addDropItem1(event){
		this.itemsToDrop.push(event);
	  }
	private addDropItem2(event){
		this.itemsToDrop2.push(event);
	  }
	private releaseDrop(event){
  	let index = this.itemsToDrop.indexOf(event);
  	if (index >= 0){
  		this.itemsToDrop.splice(index,1);
  	}
  }

  private releaseDrop1(event){
	let index = this.itemsDropped.indexOf(event);
	if (index >= 0){
		this.itemsDropped.splice(index,1);
	}
}

private releaseDrop2(event){
	let index = this.itemsToDrop2.indexOf(event);
	if (index >= 0){
		this.itemsToDrop2.splice(index,1);
	}
}
  constructor() { }

  ngOnInit() {
    
  }

}
