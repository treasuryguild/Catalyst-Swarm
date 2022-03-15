//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const budgetB = getValue('budgetB')
    const ada = getValue('ada')
    const txid = getValue('txid')
    const description = getValue('description')
    const pool = getValue('pool')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".md"
    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `---
Date: ${new Date().toUTCString()}
---

##### ${name} ${ada} ADA

| Date      | Name | Funded Proposal | Budget Item | ADA | Transaction|
| :---        | :---  | :--- | :--- | :--- | :--- |
| ${new Date().toUTCString()} | ${name} | ${pool} | ${budgetB} | ${ada} | [link](https://cardanoscan.io/transaction/${txid})|

Description: ${description}`
    
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
        case 'Stake Pool':
          answer = "Fund7/Stake-Pool/";
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
        case 'Incoming IOG':
          answer = "Incoming-IOG/";
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
        case 'Monthly Swarm Rewards':
          answer = "Monthly-Swarm-Rewards/";
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
