import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../Artist';
import {Album} from '../../Album';
import {SpotifyService} from '../../services/spotify.service'


@Component({
    moduleId: module.id,
  selector: 'artist',
  templateUrl: `artist.component.html`,
})
export class ArtistComponent  { 

    id:string;
    artist:Artist[];
    albums:Album[];

    constructor(
    private _spotifyservice:SpotifyService,
    private _route:ActivatedRoute){


    }

    ngOnInit(){
        this._route.params // get the ID from the URl and pass it
            .map(params =>params ['id'])
            .subscribe((id) => {
                this._spotifyservice.getArtist(id)// recive the id from the params and pass it to getArtist function
                    .subscribe(artist => {
                        this.artist = artist;
                    })

                    this._spotifyservice.getAlbums(id)
                        .subscribe(albums =>{
                            this.albums = albums.items;
                        })
            })
    }
 }
