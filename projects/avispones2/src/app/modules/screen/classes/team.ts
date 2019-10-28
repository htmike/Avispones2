export class Team {
    name: string;
    logo: string;
    score: number;

    constructor( name?: string, logo?: string ) {
        this.name = name || 'home';
        this.score = 0;
        this.logo = logo || 'https://pbs.twimg.com/profile_images/890027429535727616/jgw68TaA.jpg';
    }
}
