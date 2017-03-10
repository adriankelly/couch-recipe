import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cr-star',
  moduleId: module.id,
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent {
  private ratingRange: number[] = [1, 2, 3, 4, 5]

  @Input() starRating: number

  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  onClick(starIndex: number) {
    this.notify.emit(starIndex + 1);
  }
}