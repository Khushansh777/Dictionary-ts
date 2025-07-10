let apiUrl:string =  'https://api.dictionaryapi.dev/api/v1/entries/en/running';
//initialization of variables
const inputBar = document.querySelector('#wordInput') as HTMLInputElement;
const submitBtn =  document.querySelector('button') as HTMLButtonElement;
const sectionCard = document.querySelector('#definitionCard') as HTMLElement

const fetchData = async (key:string)=> {
    try {
        const response = await fetch(key);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log('API response:', data);
        if(data && response){
            return data;
        }
     
    } catch (e) {
        console.error('Error fetching data from API:', e);
        throw new Error('Error in API');
    }
};

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputVal: string = inputBar.value.trim();
    if (inputVal !== "") {
        try {
             apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(inputVal)}`;
            const data = await fetchData(apiUrl);
            if(data){
                sectionCard.innerHTML = 
`<section class="definition-card" id="definitionCard" aria-live="polite">
  <div class="word-main">
    <span class="word-text" id="wordText">${data[0].word}</span>
    <span class="word-phonetic" id="wordPhonetic">${data[0].phonetic ? '/' + data[0].phonetic + '/' : ''}</span>
  </div>
  <div class="word-details">
    <span class="word-pos" id="wordPOS">${data[0].meanings?.[0]?.partOfSpeech || "N/A"}</span>
    <span class="word-example" id="wordExample">${data[0].meanings?.[0]?.definitions?.[0]?.example ? '"' + data[0].meanings[0].definitions[0].example + '"' : ''}</span>
  </div>
  <div class="word-meaning" id="wordMeaning">
    ${data[0].meanings?.[0]?.definitions?.[0]?.definition || "No definition found."}
  </div>
  <div class="word-synonyms" id="wordSynonyms">
    <strong>Synonyms:</strong>
    ${
      data[0].meanings?.[0]?.definitions?.[0]?.synonyms?.length
        ? data[0].meanings[0].definitions[0].synonyms.map((syn: string) => `<span class="synonym-tag">${syn}</span>`).join(' ')
        : 'None'
    }
  </div>
</section>`;
            }
            
        } catch (error) {
            console.error(error);
        }
    }
});
