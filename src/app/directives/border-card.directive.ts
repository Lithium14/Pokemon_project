import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive ({
  selector: '[appPkmnBorderCard]'
})
export class BorderCardDirective {
  private initialColor = '#f5f5f5';
  private defaultcolor = '#009688';
  private defaultHeight = 180;

constructor(private el: ElementRef) {
  this.setBorder(this.initialColor);
  this.setHeight(this.defaultHeight);
}
@Input ('appPkmnBorderCard') borderColor: string;

@HostListener('mouseenter') onmouseEnter() {
  this.setBorder(this.borderColor || this.defaultcolor);
}
@HostListener('mouseleave') onmouseLeave() {
  this.setBorder(this.initialColor);
}
private setBorder(color: string) {
  const border = 'solid 4px ' + color;
  this.el.nativeElement.style.border = border;
}

private setHeight(height: number) {
  this.el.nativeElement.style.height = height + 'px';
}
}
