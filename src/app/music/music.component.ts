import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { MusicService } from '../music.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs: Observable<any> | null = null;
  artist: string | null = "";
  title: string | null = "";

  constructor(private service: MusicService) { }

  ngOnInit(): void {
    this.songs = this.service.musicLyricsSearch(null, null);
  }

  artistByName() {
    this.songs = this.service.musicLyricsSearch(this.artist, this.title);
  }

}
