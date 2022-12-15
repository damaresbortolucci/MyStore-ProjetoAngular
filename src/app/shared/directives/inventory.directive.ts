import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[inventoryDirective]'
})
export class InventoryDirective implements OnInit, OnChanges{

  @Input()
  inventoryDirective: number | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.inventoryDirective == 0) 
      this.el.nativeElement.style.color= 'red';
    else 
      this.el.nativeElement.style.color = 'black';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.inventoryDirective && this.inventoryDirective <= 0) 
      this.el.nativeElement.style.color= 'red';
    else 
      this.el.nativeElement.style.color = 'black';
  } 

}
