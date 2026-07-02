import * as THREE from "three";

export class Chunk{

    constructor(scene){

        this.scene = scene;

        this.size = 16;

        this.height = 32;

        this.data = [];

        for(let x=0;x<this.size;x++){

            this.data[x]=[];

            for(let y=0;y<this.height;y++){

                this.data[x][y]=[];

                for(let z=0;z<this.size;z++){

                    this.data[x][y][z]=0;

                }

            }

        }

    }

}