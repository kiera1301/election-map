var createPolitician = function(name, partyColor) {

    var politician = {};
        politician.name=name;
        politician.electionResults=null;
        politician.totalVotes=0;
        politician.partyColor = partyColor;

        console.log("Hi! My name is " + name + " and I am running for president!");

        politician.tallyUpTotalVotes = function(){

        this.totalVotes = 0;

        for(var i = 0; i < this.electionResults.length; i++)
       {
        this.totalVotes += this.electionResults[i];
       }
};

        return politician;
};



var mary = createPolitician ("Mary Withers", [132, 17, 11]);
var sally = createPolitician ("Sally Loola", [245, 141, 136]);

var winner = "???";

mary.electionResults =
       [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,9,3,7,
        2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

sally.electionResults =
       [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,
        3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

mary.electionResults[9] = 1;
sally.electionResults[9] = 28;
mary.electionResults[4] = 17;
sally.electionResults[4] = 38;
mary.electionResults[43] = 11;
sally.electionResults[43] = 27;

console.log(mary.electionResults);
console.log(sally.electionResults);

var setStateResults = function(state) {
    var winner = "";
    theStates[state].winner = null;

    if(mary.electionResults[state] > sally.electionResults[state]) {
      theStates[state].winner = mary;
    } else if (sally.electionResults[state] > mary.electionResults[state]) {
      theStates[state].winner = sally;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null){
       theStates[state].rgbColor = stateWinner.partyColor;
    }
    else {
      theStates[state].rgbColor = [11, 32, 57];
    }

    var stateInfoTable = document.getElementById("stateResults");
    var header = stateInfoTable.children[0];

    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var politician1Name = body.children[0].children[0];
    var politician1Results = body.children[0].children[1];
    var politician2Name = body.children[1].children[0];
    var politician2Results = body.children[1].children[1];
    var winnerName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

    politician1Name.innerText = mary.name;
    politician2Name.innerText = sally.name;

    politician1Results.innerText = mary.electionResults[state];
    politician2Results.innerText = sally.electionResults[state];

    if(theStates[state].winner === null) {
      winnerName.innerText = "Draw";
    } else {
      winnerName.innerText = theStates[state].winner.name;
    }
};


mary.tallyUpTotalVotes();
sally.tallyUpTotalVotes();

console.log(mary.totalVotes);
console.log(sally.totalVotes);

if(mary.totalVotes < sally.totalVotes) {
  winner = sally.name;
} else if (sally.totalVotes < mary.totalVotes) {
  winner = mary.name;
} else {
  winner = "It's a draw!";
}

console.log("And the winner is..." + winner + "!!!");

var countryTable = document.getElementById("countryResults");
var row = countryTable.children[0].children[0];
row.children[0].innerText = mary.name;
row.children[1].innerText = mary.totalVotes;
row.children[2].innerText = sally.name;
row.children[3].innerText = sally.totalVotes;
row.children[5].innerText = winner;
