// DOMs
let hackerNewsNav = document.querySelector('#navBarTitle');
let newNav = document.querySelector('#newNav');
let pastNav = document.querySelector('#pastNav');
let askNav = document.querySelector('#askNav');
let showNav = document.querySelector('#showNav');
let hackerNewsCarouselStoryOneDOM = document.querySelector("#hackerNewsCarouselStoryOne");
let hackerNewsCarouselStoryTwoDOM = document.querySelector("#hackerNewsCarouselStoryTwo");
let hackerNewsCarouselStoryThreeDOM = document.querySelector("#hackerNewsCarouselStoryThree");
let newCarouselStoryOneDOM = document.querySelector("#newCarouselStoryOne");
let newCarouselStoryTwoDOM = document.querySelector("#newCarouselStoryTwo");
let newCarouselStoryThreeDOM = document.querySelector("#newCarouselStoryThree");
let pastCarouselStoryOneDOM = document.querySelector("#pastCarouselStoryOne");
let pastCarouselStoryTwoDOM = document.querySelector("#pastCarouselStoryTwo");
let pastCarouselStoryThreeDOM = document.querySelector("#pastCarouselStoryThree");
let askCarouselStoryOneDOM = document.querySelector('#askCarouselStoryOne');
let askCarouselStoryTwoDOM = document.querySelector("#askCarouselStoryTwo");
let askCarouselStoryThreeDOM = document.querySelector("#askCarouselStoryThree");
let showCarouselStoryOneDOM = document.querySelector("#showCarouselStoryOne");
let showCarouselStoryTwoDOM = document.querySelector("#showCarouselStoryTwo");
let showCarouselStoryThreeDOM = document.querySelector("#showCarouselStoryThree");
let podiumTitleOneDOM = document.querySelector('#podiumTitleOne');
let podiumTitleTwoDOM = document.querySelector('#podiumTitleTwo');
let podiumTitleThreeDOM = document.querySelector('#podiumTitleThree');
let podiumSubTextOneDOM = document.querySelector('#podiumSubTextOne');
let podiumSubTextTwoDOM = document.querySelector('#podiumSubTextTwo');
let podiumSubTextThreeDOM = document.querySelector('#podiumSubTextThree');
let podiumTitleDOMArray = [podiumTitleOneDOM, podiumTitleTwoDOM, podiumTitleThreeDOM];
let podiumSubTextDOMArray = [podiumSubTextOneDOM, podiumSubTextTwoDOM, podiumSubTextThreeDOM];

// Click Listeners
hackerNewsNav.addEventListener('click', function(){
    let podiumTitlesArray = ['Hacker News One', 'Hacker News Two', 'Hacker News Three'];
    let podiumSubTextPointsArray = ['77', '201', '18'];
    let podiumSubTextAuthorArray = ['Johnny Green', 'Billy Bob', 'Buster Brown'];
    for (let i = 0; i < podiumTitleDOMArray.length; i++){
        setPodiumTitles(podiumTitleDOMArray[i], podiumTitlesArray[i]);
        setPodiumSubText(podiumSubTextDOMArray[i], podiumSubTextPointsArray[i], podiumSubTextAuthorArray[i]);
    }
});

newNav.addEventListener('click', function(){
    let podiumTitlesArray = ['News News One', 'News News Two', 'News News Three'];
    let podiumSubTextPointsArray = ['88', '103', '47'];
    let podiumSubTextAuthorArray = ['Gary Yellow', 'Kevin Hank', 'Yikes Spikes'];
    for (let i = 0; i < podiumTitleDOMArray.length; i++){
        setPodiumTitles(podiumTitleDOMArray[i], podiumTitlesArray[i]);
        setPodiumSubText(podiumSubTextDOMArray[i], podiumSubTextPointsArray[i], podiumSubTextAuthorArray[i]);
    }
});

pastNav.addEventListener('click', function(){
    let podiumTitlesArray = ['Past One', 'Past Two', 'Past Three'];
    let podiumSubTextPointsArray = ['44', '307', '23'];
    let podiumSubTextAuthorArray = ['Britt Dawg', 'Jade Cool', 'Ari MyGirl'];
    for (let i = 0; i < podiumTitleDOMArray.length; i++){
        setPodiumTitles(podiumTitleDOMArray[i], podiumTitlesArray[i]);
        setPodiumSubText(podiumSubTextDOMArray[i], podiumSubTextPointsArray[i], podiumSubTextAuthorArray[i]);
    }
});

askNav.addEventListener('click', function(){
    let podiumTitlesArray = ['Ask One', 'Ask Two', 'Ask Three'];
    let podiumSubTextPointsArray = ['11', '698', '71'];
    let podiumSubTextAuthorArray = ['Reed Ster', 'Corey James', 'Riskin Nice'];
    for (let i = 0; i < podiumTitleDOMArray.length; i++){
        setPodiumTitles(podiumTitleDOMArray[i], podiumTitlesArray[i]);
        setPodiumSubText(podiumSubTextDOMArray[i], podiumSubTextPointsArray[i], podiumSubTextAuthorArray[i]);
    }
});

showNav.addEventListener('click', function(){
    let podiumTitlesArray = ['Show One', 'Show Two', 'Show Three'];
    let podiumSubTextPointsArray = ['55', '876', '21'];
    let podiumSubTextAuthorArray = ['Shan Dawg', 'Chris Blick', 'Young Eric'];
    for (let i = 0; i < podiumTitleDOMArray.length; i++){
        setPodiumTitles(podiumTitleDOMArray[i], podiumTitlesArray[i]);
        setPodiumSubText(podiumSubTextDOMArray[i], podiumSubTextPointsArray[i], podiumSubTextAuthorArray[i]);
    }
});


// Helper Functions
let setPodiumTitles = (podiumTitleDOM, podiumTitle) => {
    podiumTitleDOM.innerText = podiumTitle;
};

let setPodiumSubText = (podiumSubTextDOM, points, author) => {
    podiumSubTextDOM.innerText = `${points} points by ${author}`;
}