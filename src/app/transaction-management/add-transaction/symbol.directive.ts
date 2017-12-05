import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[symbolFormat]'
})
export class SymbolDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    //console.log("on Blur")
    let value : string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLocaleUpperCase();
  }
}
