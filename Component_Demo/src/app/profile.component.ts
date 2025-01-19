import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-profile-test',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent{
    isactive = true;
    activeC1 = true;
}