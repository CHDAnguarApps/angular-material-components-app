import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Simple autocomplete
 */
@Component({
	selector: 'app-simple-autocomplete',
	templateUrl: './simple-autocomplete.component.html',
	styleUrls: ['./simple-autocomplete.component.css'],
})
export class SimpleAutocompleteComponent {
	myControl = new FormControl('');
	options: string[] = ['One', 'Two', 'Three'];
	showForm = false;
}
