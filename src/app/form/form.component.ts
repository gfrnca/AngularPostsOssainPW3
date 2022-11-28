import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private http: HttpClient) {

  }

  onPostCreate(posts: {title: string, content: string}) {
    console.log(posts)
    this.http.get('https://ossainposts.free.beeceptor.com/post')
    .subscribe((res) => {
      console.log(res)
    })
  }
}
