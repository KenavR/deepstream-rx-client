import {provide} from "angular2/core";
import {bootstrap}    from 'angular2/platform/browser'
import {App} from './App'
import {Client} from "deepstream-rx-client";

bootstrap(App, [
    provide(Client, {useValue: new Client("localhost:6020")})
]);