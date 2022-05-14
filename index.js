//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const budgetB = getValue('budgetB')
    const ada = getValue('ada')
    const gimb = getValue('gimb')
    const description = getValue('description')
    const pool = getValue('pool')
    const xrate = getValue('xrate')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".json"
    
    function ideascaleLink(pool) {
      var iLink = "";
      switch(pool) {
        case 'After Town Hall by Swarm':
          iLink = "https://cardano.ideascale.com/c/idea/380966";
          break;
        case 'Catalyst Swarm operations':
          iLink = "https://cardano.ideascale.com/c/idea/380972";
          break;
        case 'Challenge Fest':
          iLink = "https://cardano.ideascale.com/c/idea/381926";
          break;
        case 'Stake Pool':
          iLink = "https://adapools.org/pool/e40edb5a243c9ef00296860c6b7c8272fd5923ac52b5050d68e80d9b";
          break;
        default:
          iLink = "";
          break;
      }
      return iLink;
    }    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `{
  "id" : "${new Date().getTime().toString()}",
  "date": "${new Date().toUTCString()}",
  "project": "Catalyst Swarm",
  "pool": "${pool}",
  "ideascale": "${ideascaleLink(pool)}",
  "budget": "${budgetB}",
  "ada": "${ada}",
  "gimbals": "${gimb}",
  "exchange-rate": "${xrate} USD per ADA",
  "name": "${name}",
  "txid": "",
  "description": "${description}"
}
`
    
    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText)
  
    //Generate a github link with query parameter
    
    function githubQueryLink(pool) {
      var answer = "";
      switch(pool) {
        case 'After Town Hall by Swarm':
          answer = "Fund7/After-Town-Hall-by-Swarm/";
          break;
        case 'Catalyst Swarm operations':
          answer = "Fund7/Catalyst-Swarm-operations/";
          break;
        case 'Challenge Fest':
          answer = "Fund7/Challenge-Fest/";
          break;
        case 'Treasury Swarm pool Rewards':
          answer = "Fund7/Treasury-Swarm-pool-Rewards/";
          break;          
        default:
          answer = "";
          break;
      }
      return answer;
    }

    function githubQueryLink2(budgetB) {
      var answer = "";
      switch(budgetB) {
        case 'Incoming':
          answer = "Incoming/";
          break;
        case 'ATH  Event':
          answer = "ATH-Event/";
          break;
        case 'Marketing Campaign':
          answer = "Marketing-Campaign/";
          break;
        case 'Research & Exp on Rep & Reward systems':
          answer = "Research-and-Exp-on-Rep-and-Reward-systems/";
          break;
        case 'Event Playbooks':
          answer = "Event-Playbooks/";
          break;
        case 'The Maintainers':
          answer = "The-Maintainers/";
          break;
        case 'The Networking':
          answer = "The-Networking/";
          break;
        case 'The Incubator':
          answer = "The-Incubator/";
          break;
        case 'The Management':
          answer = "The-Management/";
          break;
        case 'The Architecture':
          answer = "The-Architecture/";
          break;
        case 'Orginizing event':
          answer = "Orginizing-event/";
          break;
        case 'Executing event':
          answer = "Executing-event/";
          break;    
        case 'Post tasks':
          answer = "Post-tasks/";
          break;               
        case 'Bounty':
          answer = "Bounty/";
          break;
        case 'Remuneration':
          answer = "Remuneration/";
          break;
        case 'Comm-Org Tools':
          answer = "Comm-Org-Tools/";
          break;
        case 'Other':
          answer = "Other/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }
    //Open in a new tab
  window.open("https://github.com/treasuryguild/Catalyst-Swarm/new/main/Transactions/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
