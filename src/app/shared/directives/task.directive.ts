import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[productDirective]',
})
export class ProductDirective implements OnChanges {
  @Input()
  productDirective: boolean | undefined;

  constructor(private el: ElementRef) {
    /* console.log(this.productDirective); */
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productDirective) {
      this.el.nativeElement.style.color = 'red';
    } else {
      this.el.nativeElement.style.color = 'black';
    }
  }
}
