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
        case 'Community Governance Oversight':
          answer = "Fund7/Community-Governance-Oversight/";
          break;
        case 'Catalyst Audit Circle':
          answer = "Fund7/Catalyst-Audit-Circle/";
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
        case 'Remuneration':
          answer = "Remuneration/";
          break;
        case 'Comm/Org Tools':
          answer = "Comm-Org-Tools/";
          break;
        case 'Surveys':
          answer = "Surveys/";
          break;
        case 'Retrospectives':
          answer = "Retrospectives/";
          break;
        case 'Reports':
          answer = "Reports/";
          break;
        case 'Proposal':
          answer = "Proposal/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }
    //Open in a new tab
  window.open("https://github.com/treasuryguild/Community-Governance-Oversight/new/main/content/en/blog/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
