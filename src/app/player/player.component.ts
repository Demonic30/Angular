import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

  
  player : any;
  playerList : any;
  playerList1 : any ;

  constructor(
    private service: PlayerService
    ) {}

  ngOnInit() {
    
    this.player = {
      id : '1',
      name: 'Golf',
      birth: '17-08-1997',
      highest_score: '100',
      createdDateTime: '15-01-2020'
    }


    this.playerList = [
      {
        name: 'Golf',
        birth: '17-08-1997',
        playerId: '1',
        highestScore: '100',
        dateTime: '15-01-2020'
      },
      {
        name: 'green',
        birth: '13-08-1997',
        playerId: '2',
        highestScore: '150',
        dateTime: '16-01-2020'
      },
      {
        name: 'adam',
        birth: '20-08-1997',
        playerId: '3',
        highestScore: '90',
        dateTime: '17-01-2020'
      },
      {
        name: 'atom',
        birth: '20-08-1997',
        playerId: '4',
        highestScore: '290',
        dateTime: '17-01-2020'
      },
      {
        name: 'aam',
        birth: '20-08-1997',
        playerId: '5',
        highestScore: '190',
        dateTime: '17-01-2020'
      },
      {
        name: 'yam',
        birth: '20-08-1997',
        playerId: '6',
        highestScore: '390',
        dateTime: '17-01-2020'
      }
    ]

    
  }
  setPlayer(ply){
      return this.player = ply;
    }
0
   getPlayer(){

    this.service.loadPlayer().subscribe(data => {
      this.playerList1 = data;

  //    // Making the HTTP Request
  // //  this.http
  // //  .get('http://localhost:8080/api/player/list')
  // //  .subscribe(data => {
  //    // Read the result field from the JSON response.
  //   //  this.playerList1 = data;

  //   //  console.log(data);
  //   //  console.log(this.playerList1)
    //  })
    })
  }

}
