import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title: string = 'Card Component Title';

  text: string = 'My semple text';

  textColor: string = '';

  ngOnInit() {
  }

  getInfo(): string {
    return 'huz';
  }

  changeTitle(){
    this.title = 'New title'
  }

  inputHendler(value: any){
    // const value = event.target.value
    this.title = value
  }

  changeHandler(){
    console.log(this.title)
  }
}