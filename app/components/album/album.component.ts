import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../Artist';
import {Album} from '../../Album';
import {SpotifyService} from '../../services/spotify.service'


@Component({
    moduleId: module.id,
  selector: 'album',
  templateUrl: `album.component.html`,
})
export class AlbumComponent  { 

    id:string;
    album:Album[];

    constructor(
    private _spotifyservice:SpotifyService,
    private _route:ActivatedRoute){


    }

    ngOnInit(){
        this._route.params // get the ID from the URl and pass it
            .map(params =>params ['id'])
            .subscribe((id) => {
                this._spotifyservice.getAlbum(id)// recive the id from the params and pass it to getArtist function
                    .subscribe(album => {
                        this.album = album;
                    })

            })
    }
 }
