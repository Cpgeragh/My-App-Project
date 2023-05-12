import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../Services/remote.service';
@Component({
selector: 'app-movie',
templateUrl: './movie.page.html',
styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
movieData: any = [];
constructor(private services: RemoteService) { }

ngOnInit() {
this.services.GetMovieData().subscribe(
(data) => {
this.movieData = data.Search;
console.log(this.movieData);
});
}
}