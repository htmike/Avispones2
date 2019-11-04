export class Team {
    id: number;
    name: string;
    logo: string;
    score: number;

    constructor( id: number, name?: string, score?: number, logo?: string ) {
        this.id = id;
        this.name = name || 'home';
        this.score = score || 0;
        this.logo = logo || 'https://pbs.twimg.com/profile_images/890027429535727616/jgw68TaA.jpg';
    }
}
