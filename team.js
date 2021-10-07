class pokemonTeam{
    constructor(teamName, trainer, roster){
    this.teamName = 'Team mlk';
    this.trainerName = 'amin';
    this.roster = [];
    }

    describe(){
        return `Team ${this.teamName} with trainer ${this.trainerName}
        has the following pokemon: ${[...this.roster]}`;
    }
}
