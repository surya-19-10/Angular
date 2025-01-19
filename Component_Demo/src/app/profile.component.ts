import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-profile-test',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent{
    myStyle = {
        backgroundColor:'orangered',
        padding: '10px',
        color: 'white',
        borderRadius: '10px'
    }
}