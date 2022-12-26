import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  highlightColor = ''
  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.backgroundColor = "transparent"
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = "pink"

  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = "transparent"

  }
}
