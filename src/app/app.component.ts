import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService]
})
export class AppComponent implements OnInit, OnDestroy {
  private connection;
  room = 'arena';
  messages: string[] = [];

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.connection = this.socket
      .data()
      .subscribe(data => this.messages.push(JSON.stringify(data)));
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  roll(dice: number): void {
    this.socket.roll(dice, this.room);
  }

  join(): void {
    this.socket.join(this.room);
  }
}
