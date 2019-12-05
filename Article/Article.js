/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function createArticle(article) {

    let div = document.createElement("div");
    div.classList.add("article");

    let headingAndCloseButtonDiv = document.createElement("div");
    headingAndCloseButtonDiv.classList.add("headingAndCloseButtonDiv");
    div.appendChild(headingAndCloseButtonDiv);

      let h2 = document.createElement("h2");
      h2.textContent = article.title;
      headingAndCloseButtonDiv.appendChild(h2);
    
      let closeButton = document.createElement("div");
      closeButton.classList.add("closeButton");
      closeButton.textContent = "X";
      headingAndCloseButtonDiv.appendChild(closeButton);

    let pDate = document.createElement("p");
    pDate.classList.add("date");
    pDate.textContent = article.date;
    div.appendChild(pDate);

    let p1 = document.createElement("p");
    p1.textContent = article.firstParagraph;
    div.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = article.secondParagraph;
    div.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = article.thirdParagraph;
    div.appendChild(p3);

    // Add event for removing article from list
    closeButton.addEventListener("click", () => {
      let articlesContainer = document.querySelector(".articles");
      articlesContainer.removeChild(div);
    })

    // Add events for opening and closing article
    let span = document.createElement("span");
    span.textContent = "\u25BC Read more... \u25BC";
    span.classList.add("expandButton");
    span.addEventListener("click", () => {

      div.classList.toggle("article-open");

      if (div.classList.contains("article-open"))
        { span.textContent = "\u25B2 Collapse \u25B2"; }
      else
      { span.textContent = "\u25BC Read more... \u25BC"; }
    
    } )
    div.appendChild(span);

    return div;

}

// add all the articles to the .articles div
let articlesContainer = document.querySelector(".articles");

let articlesHTML = data.map(article => createArticle(article));

articlesHTML.forEach(articleHTML => articlesContainer.appendChild(articleHTML));

// create a form to add a new article

let body = document.querySelector("body");
body.appendChild(postArticle());

// function to write a new article
function postArticle() {

  let div = document.createElement("div");
  div.classList.add("postArticle");

  let h2 = document.createElement("h2");
  h2.textContent = "Post a New Article";
  div.appendChild(h2);

  let form = document.createElement("form");
  div.appendChild(form);

    // create label and input field for article title
    let labelTitle = document.createElement("label");
    labelTitle.textContent = "Article Title";
    labelTitle.setAttribute("for", "inputTitle");
    form.appendChild(labelTitle);

    let inputTitle = document.createElement("input");
    inputTitle.placeholder = "Article Title";
    inputTitle.id = "inputTitle";
    form.appendChild(inputTitle);

    // create label and input field for article date
    let labelDate = document.createElement("label");
    labelDate.textContent = "Date of Publication";
    labelDate.setAttribute("for", "inputDate");
    form.appendChild(labelDate);

    let inputDate = document.createElement("input");
    inputDate.placeholder = "Date of Publication";
    inputDate.id = "inputDate";
    form.appendChild(inputDate);

    // create label and input field for paragraph 1
    let labelP1 = document.createElement("label");
    labelP1.textContent = "Paragraph 1";
    labelP1.setAttribute("for", "inputP1");
    form.appendChild(labelP1);

    let inputP1 = document.createElement("textarea");
    inputP1.placeholder = "Paragraph 1 goes here";
    inputP1.id = "inputP1";
    form.appendChild(inputP1);

    // create label and input field for paragraph 2
    let labelP2 = document.createElement("label");
    labelP2.textContent = "Paragraph 2";
    labelP2.setAttribute("for", "inputP2");
    form.appendChild(labelP2);

    let inputP2 = document.createElement("textarea");
    inputP2.placeholder = "Paragraph 2 goes here";
    inputP2.id = "inputP2";
    form.appendChild(inputP2);

    // create label and input field for paragraph 3
    let labelP3 = document.createElement("label");
    labelP3.textContent = "Paragraph 3";
    labelP3.setAttribute("for", "inputP3");
    form.appendChild(labelP3);

    let inputP3 = document.createElement("textarea");
    inputP3.placeholder = "Paragraph 3 goes here";
    inputP3.id = "inputP3";
    form.appendChild(inputP3);

    // create submit button
    let button = document.createElement("button");
    button.textContent = "Post Article";
    form.appendChild(button);

    // create events for submit button
    button.addEventListener("click", (event) => {
      event.preventDefault();

      let article = {
        title: inputTitle.value,
        date: inputDate.value,

        firstParagraph: inputP1.value,
        secondParagraph: inputP2.value,
        thirdParagraph: inputP3.value
      }

      articlesContainer.appendChild(createArticle(article));
      successMessage.classList.toggle("success");

    })

    // create success message
    let successMessage = document.createElement("p");
    successMessage.textContent = "Your article has been posted.";
    form.appendChild(successMessage);

  return div;

}