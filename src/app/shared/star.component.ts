import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cr-star',
  moduleId: module.id,
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent {
  private ratingRange: number[] = [1, 2, 3, 4, 5]

  @Input() rating: number
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  onClick(newRating: number) {
    console.log('new Rating =>', newRating);
    this.rating = newRating;
    this.notify.emit(newRating);
  }

}