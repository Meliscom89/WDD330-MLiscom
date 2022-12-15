function fetchSpells (url){
    fetch(url)
    .then(response =>response.json())
    .then(spellData => {
      let spellsContainer = document.getElementById('spellsContainer');
      
     
  
      for (let i = 0; i < spellData.results.length; i++) {
      let title = document.createElement('h3');
      spellsContainer.appendChild(title);
      let titleText = document.createTextNode(spellData.results[i].name);
      title.appendChild(titleText);
      let addSpellButton = document.createElement('button');
      title.appendChild(addSpellButton);
      addSpellButton.innerText = "Add Spell";
    
      // let descriptionURL = "https://www.dnd5eapi.co" + spellData.results[i].url;
  
      // function fetchdescription (descriptionurl){
      //   fetch(descriptionurl)
      //   .then(response =>response.json())
      //   .then(descriptionData => {
  
      // for (let i = 0; i < descriptionData.index.length; i++) {
      //   let descIndex = spellData.results[i].index;
      //   let descriptionText = (descriptionData[descIndex]);
      //   console.log(descriptionText);
        
      // }
      
          
      // })};
      // fetchdescription(descriptionURL);
  }})
  
  };
  
  
  fetchSpells("https://www.dnd5eapi.co/api/spells");
    