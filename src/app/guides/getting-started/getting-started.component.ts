import { Shared } from '../../shared';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-getting-started',
	templateUrl: './getting-started.component.html'
})
export class GettingStartedComponent implements OnInit {

	constructor(private shared: Shared) { }

	ngOnInit() {
		this.shared.title = "Getting Started";
	}

}