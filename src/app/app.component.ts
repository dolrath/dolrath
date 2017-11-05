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
  messages: string[] = [];

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.connection = this.socket
      .data()
      .subscribe(msg => this.messages.push(msg));
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  roll(dice: number): void {
    this.socket.roll(dice);
  }
}
