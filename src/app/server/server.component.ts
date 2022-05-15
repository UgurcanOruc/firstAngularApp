import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColorWithClass() {
        return this.serverStatus === 'online' ? 'alert alert-success' : 'alert alert-danger';
    }

    getColorWithStyle() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}