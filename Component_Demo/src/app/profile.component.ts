import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-profile-test',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent{
    author="Dama";
    age=23;
    date = new Date().toLocaleDateString();
    time:string = new Date().toLocaleTimeString();
    getAge() {
        return this.age;
    }
    isdisabled = false;
    // isdisabled = true;
}