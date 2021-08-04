import { debounceTime } from 'rxjs/operators';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  debounce: Subject<string> = new Subject<string>();
  @Output() onTyping = new EventEmitter<string>();

  @Input() value:string=''

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filter=>this.onTyping.emit(filter));
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
