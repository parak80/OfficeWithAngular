import { Component, OnInit, Input, Output, ChangeDetectionStrategy, AfterContentChecked,
  EventEmitter, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef
} from '@angular/core';
import { ColumnHeader } from './../../services/app-config.service';

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.css']
})
export class OrderByComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @ViewChild('hiddenSelectTag') hiddenElem: ElementRef;

  @Input() columns: ColumnHeader[] = [];
  @Input() enabled: boolean;
  @Input() orderColumn: string;
  @Input() reverse: boolean;

  @Output() order: EventEmitter<string> = new EventEmitter();

  clientWidth: number;

  display(prop: string) {
    const column = this.columns.find(c => c.prop === prop);
    if (column) {
      return column.title;
    }
  }
  constructor(private cd: ChangeDetectorRef, private elemRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.updateWidth();
  }

  ngAfterContentChecked() {
    this.updateWidth();
  }

  onOrderBy() {
    this.order.emit(this.orderColumn);
  }

  private updateWidth() {
    this.clientWidth = this.hiddenElem.nativeElement.clientWidth + 2;
    this.cd.detectChanges();
  }
}
