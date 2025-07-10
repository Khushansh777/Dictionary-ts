(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();let a="https://api.dictionaryapi.dev/api/v1/entries/en/running";const c=document.querySelector("#wordInput"),d=document.querySelector("button"),l=document.querySelector("#definitionCard"),p=async r=>{try{const t=await fetch(r);if(!t.ok)throw new Error(`API request failed with status ${t.status}`);const e=await t.json();if(console.log("API response:",e),e&&t)return e}catch(t){throw console.error("Error fetching data from API:",t),new Error("Error in API")}};d.addEventListener("click",async r=>{r.preventDefault();const t=c.value.trim();if(t!=="")try{a=`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(t)}`;const e=await p(a);e&&(l.innerHTML=`  <div class="word-main">
    <span class="word-text" id="wordText">${e[0].word}</span>
    <span class="word-phonetic" id="wordPhonetic">${e[0].phonetic?"/"+e[0].phonetic+"/":""}</span>
  </div>
  <div class="word-details">
    <span class="word-pos" id="wordPOS">${e[0].meanings?.[0]?.partOfSpeech||"N/A"}</span>
    <span class="word-example" id="wordExample">${e[0].meanings?.[0]?.definitions?.[0]?.example?'"'+e[0].meanings[0].definitions[0].example+'"':""}</span>
  </div>
  <div class="word-meaning" id="wordMeaning">
    ${e[0].meanings?.[0]?.definitions?.[0]?.definition||"No definition found."}
  </div>
  <div class="word-synonyms" id="wordSynonyms">
    <strong>Synonyms:</strong>
    ${e[0].meanings?.[0]?.definitions?.[0]?.synonyms?.length?e[0].meanings[0].definitions[0].synonyms.map(i=>`<span class="synonym-tag">${i}</span>`).join(" "):"None"}
  </div>
</section>`)}catch(e){console.error(e)}});
