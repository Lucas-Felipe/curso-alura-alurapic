import { debounceTime } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";


@Component({
  selector:'app-search',
  templateUrl:'./search.component.html'
})
export class SearchComponent implements OnInit,OnDestroy{
  debounce:Subject<string>=new Subject<string>()

  ngOnInit():void{
    this.debounce.pipe(debounceTime(300))
  }
  ngOnDestroy():void{
    this.debounce.unsubscribe()
  }
}