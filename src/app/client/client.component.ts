import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  methods = [
    "GET", "POST", "PUT", "PATCH", "DELETE"
  ];
  requestParams = [
    "Headers","Queries","Body"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
