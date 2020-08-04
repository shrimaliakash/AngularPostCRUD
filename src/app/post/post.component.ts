import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, Routes } from "@angular/router";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public router: Router, public formBuilder: FormBuilder, public service: NotificationsService) { }

	addForm:FormGroup;
	updateForm:FormGroup;
	isSubmitted = false;
	name = '';
	description = '';
	category = '';
	status = '';
	ngOnInit() {
		this.addForm  =  new FormGroup({
			name:  new FormControl(''),
			description:  new FormControl(''),
			category:  new FormControl(''),
			status:  new FormControl('')
		});

		this.updateForm  =  new FormGroup({
			id:  new FormControl(''),
			name:  new FormControl(''),
			description:  new FormControl(''),
			category:  new FormControl(''),
			status:  new FormControl('')
		});
	}

}
