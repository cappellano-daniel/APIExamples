import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  musicLyricsSearch(artist: string = "the cure", title: string = "pictures of you") {
    return this.http.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  }
}
