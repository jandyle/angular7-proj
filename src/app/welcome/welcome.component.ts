import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'You can now start deleting ' + this.route.snapshot.params['name'];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message);
  }

}
