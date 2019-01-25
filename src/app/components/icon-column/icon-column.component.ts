import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

const ICONS = {
  CASE: 'icon-case-black.svg',
  FOLDER: 'icon-folder-black.svg',
  DOC: 'icon-document-text.svg',
  DOCX: 'icon-document-text.svg',
  PNG: 'icon-document-image.svg',
  JPG: 'icon-document-image.svg',
  BMP: 'icon-document-image.svg',
  XLS: 'icon-document-kalkyl.svg',
  XLSX: 'icon-document-kalkyl.svg',
  XLC: 'icon-document-kalkyl.svg',
  MSG: 'icon-document-mail.svg',
  MP4: 'icon-document-movie.svg',
  ZIP: 'icon-document-packed.svg',
  PDF: 'icon-document-pdf.svg',
  PPT: 'icon-document-presentation.svg',
  PPTX: 'icon-document-presentation.svg',
  PPS: 'icon-document-presentation.svg',
  PPSX: 'icon-document-presentation.svg',
  TXT: 'icon-document-pure-text.svg',
  DOCUMENT: 'icon-document-generic.svg'
};

@Component({
  selector: 'app-icon-column',
  templateUrl: './icon-column.component.html',
  styleUrls: ['./icon-column.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconColumnComponent implements OnInit {

  private assets = 'assets/images/';
  iconPath: string;

  @Input() extension: string;
  @Input() documentIcon: boolean;

  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const iconName = this.extension ? this.getIconFromExtension(this.extension) : (this.documentIcon ? ICONS.DOCUMENT : ICONS.CASE);
    this.iconPath = this.assets + iconName;
  }
  getIconFromExtension(extension: string) {
    const result = ICONS[extension.toUpperCase().replace('.', '')];
    return result ? result : ICONS.DOCUMENT;
  }

  selected(event) {
    this.click.emit();
  }
}
