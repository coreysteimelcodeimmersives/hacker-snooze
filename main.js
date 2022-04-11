// DOMs
let hackerNewsNav = document.querySelector('#navBarTitle');
let newNav = document.querySelector('#newNav');
let pastNav = document.querySelector('#pastNav');
let askNav = document.querySelector('#askNav');
let showNav = document.querySelector('#showNav');
let hackerNewsCarouselStoryOneDOM = document.querySelector("#hackerNewsCarouselStoryOne");

let hackerNewsCarouselStoryTwoDOM = document.querySelector("#hackerNewsCarouselStoryTwo");

let hackerNewsCarouselStoryThreeDOM = document.querySelector("#hackerNewsCarouselStoryThree");

let hackerNewsCarouselMoreButtonDOM = document.querySelector('#hackerNewsCarouselMoreButton');

let hackerNewsCarouselSubTextOneDOM = document.querySelector('#hackerNewsCarouselSubTextOne');
let hackerNewsCarouselSubTextTwoDOM = document.querySelector('#hackerNewsCarouselSubTextTwo');
let hackerNewsCarouselSubTextThreeDOM = document.querySelector('#hackerNewsCarouselSubTextThree');

let hackerNewsTitleDOMArray = [hackerNewsCarouselStoryOneDOM, hackerNewsCarouselStoryTwoDOM, hackerNewsCarouselStoryThreeDOM];
let hackerNewsSubTextArray = [hackerNewsCarouselSubTextOneDOM, hackerNewsCarouselSubTextTwoDOM, hackerNewsCarouselSubTextThreeDOM];

let newCarouselStoryOneDOM = document.querySelector("#newCarouselStoryOne");
let newCarouselStoryTwoDOM = document.querySelector("#newCarouselStoryTwo");
let newCarouselStoryThreeDOM = document.querySelector("#newCarouselStoryThree");

let newCarouselSubTextOneDOM = document.querySelector("#newCarouselSubTextOne");
let newCarouselSubTextTwoDOM = document.querySelector("#newCarouselSubTextTwo");
let newCarouselSubTextThreeDOM = document.querySelector("#newCarouselSubTextThree");
let newCarouselMoreButtonDOM = document.querySelector('#newCarouselMoreButton');

let newTitleArr = [newCarouselStoryOneDOM, newCarouselStoryTwoDOM, newCarouselStoryThreeDOM];
let newSubTextArr = [newCarouselSubTextOneDOM, newCarouselSubTextTwoDOM, newCarouselSubTextThreeDOM];

let pastCarouselStoryOneDOM = document.querySelector("#pastCarouselStoryOne");
let pastCarouselStoryTwoDOM = document.querySelector("#pastCarouselStoryTwo");
let pastCarouselStoryThreeDOM = document.querySelector("#pastCarouselStoryThree");

let pastCarouselSubTextOneDOM = document.querySelector("#pastCarouselSubTextOne");
let pastCarouselSubTextTwoDOM = document.querySelector("#pastCarouselSubTextTwo");
let pastCarouselSubTextThreeDOM = document.querySelector("#pastCarouselSubTextThree");
let pastCarouselMoreButtonDOM = document.querySelector('#pastCarouselMoreButton');

let pastTitleArr = [pastCarouselStoryOneDOM, pastCarouselStoryTwoDOM, pastCarouselStoryThreeDOM];
let pastSubArr = [pastCarouselSubTextOneDOM, pastCarouselSubTextTwoDOM, pastCarouselSubTextThreeDOM];

let askCarouselStoryOneDOM = document.querySelector('#askCarouselStoryOne');
let askCarouselStoryTwoDOM = document.querySelector("#askCarouselStoryTwo");
let askCarouselStoryThreeDOM = document.querySelector("#askCarouselStoryThree");

let askCarouselSubTextOneDOM = document.querySelector('#askCarouselSubTextOne');
let askCarouselSubTextTwoDOM = document.querySelector("#askCarouselSubTextTwo");
let askCarouselSubTextThreeDOM = document.querySelector("#askCarouselSubTextThree");
let askCarouselMoreButtonDOM = document.querySelector('#askCarouselMoreButton');

let askTitleArr = [askCarouselStoryOneDOM, askCarouselStoryTwoDOM, askCarouselStoryThreeDOM];
let askSubArr = [askCarouselSubTextOneDOM, askCarouselSubTextTwoDOM, askCarouselSubTextThreeDOM];

let showCarouselStoryOneDOM = document.querySelector("#showCarouselStoryOne");
let showCarouselStoryTwoDOM = document.querySelector("#showCarouselStoryTwo");
let showCarouselStoryThreeDOM = document.querySelector("#showCarouselStoryThree");

let showCarouselSubTextOneDOM = document.querySelector("#showCarouselSubTextOne");
let showCarouselSubTexTwoDOM = document.querySelector("#showCarouselSubTextTwo");
let showCarouselSubTextThreeDOM = document.querySelector("#showCarouselSubTextThree");

let showCarouselMoreButtonDOM = document.querySelector('#showCarouselMoreButton');

let showTitleArr = [showCarouselStoryOneDOM, showCarouselStoryTwoDOM, showCarouselStoryThreeDOM];
let showSubArr = [showCarouselSubTextOneDOM, showCarouselSubTexTwoDOM, showCarouselSubTextThreeDOM];
let podiumTitleOneDOM = document.querySelector('#podiumTitleOne');
let podiumTitleTwoDOM = document.querySelector('#podiumTitleTwo');
let podiumTitleThreeDOM = document.querySelector('#podiumTitleThree');
let podiumSubTextOneDOM = document.querySelector('#podiumSubTextOne');
let podiumSubTextTwoDOM = document.querySelector('#podiumSubTextTwo');
let podiumSubTextThreeDOM = document.querySelector('#podiumSubTextThree');
let podiumCommentsNumberOneDOM = document.querySelector('#podiumCommentsNumberOne');
let podiumCommentsNumberTwoDOM = document.querySelector('#podiumCommentsNumberTwo');
let podiumCommentsNumberThreeDOM = document.querySelector('#podiumCommentsNumberThree');
let podiumTitleDOMArray = [podiumTitleOneDOM, podiumTitleTwoDOM, podiumTitleThreeDOM];
let podiumSubTextDOMArray = [podiumSubTextOneDOM, podiumSubTextTwoDOM, podiumSubTextThreeDOM];
let podiumCommentsNumberArray = [podiumCommentsNumberOneDOM, podiumCommentsNumberTwoDOM, podiumCommentsNumberThreeDOM];

// Click Listeners
hackerNewsNav.addEventListener('click', function () {
    getHackerNews();
});

hackerNewsCarouselMoreButtonDOM.addEventListener('click', function () {
    getHackerNews();
})

newNav.addEventListener('click', function () {
    getNewNews();
});

newCarouselMoreButtonDOM.addEventListener('click', function () {
    getNewNews();
})

pastNav.addEventListener('click', function () {
    getPastNews();
});

pastCarouselMoreButtonDOM.addEventListener('click', function () {
    getPastNews();
});

askNav.addEventListener('click', function () {
    getAskNews();
});

askCarouselMoreButtonDOM.addEventListener('click', function () {
    getAskNews();
});

showNav.addEventListener('click', function () {
    getShowNews();
});

showCarouselMoreButtonDOM.addEventListener('click', function () {
    getShowNews();
});

// Helper Functions
let setPodiumTitles = (podiumTitleDOM, url, podiumTitle) => {
    podiumTitleDOM.setAttribute('href', url)
    podiumTitleDOM.innerText = podiumTitle;
};

let setPodiumSubText = (podiumSubTextDOM, points, author) => {
    podiumSubTextDOM.innerText = `${points} points by ${author}`;
}

let setPodiumCommentsNumber = (podiumCommentsDOM, commentsNumber) => {
    podiumCommentsDOM.innerText = `${commentsNumber} Comments »`
}

let updatePodium = (obj) => {
    for (let i = 0; i < podiumTitleDOMArray.length; i++) {
        setPodiumTitles(podiumTitleDOMArray[i], obj.url[i], obj.title[i]);
        setPodiumSubText(podiumSubTextDOMArray[i], obj.score[i], obj.by[i]);
        setPodiumCommentsNumber(podiumCommentsNumberArray[i], obj.descendants[i]);
    }
}

let setCarouselTitle = (carouselTitleDOM, url, title) => {
    carouselTitleDOM.setAttribute('href', url)
    carouselTitleDOM.innerText = title;
}

let setCarouselSubText = (carouselSubTextDOM, score, author, comments) => {
    carouselSubTextDOM.innerText = `${score} points by ${author} | ${comments} comments`
}

let updateCarousel = (titleDOMArr, subTextDOMArr, urlArr, titleArr, scoreArr, authorArr, commentsArr) => {
    for (let i = 0; i < titleDOMArr[i]; i++) {
        setCarouselTitle(titleDOMArr[i], urlArr[i], titleArr[i]);
        setCarouselSubText(subTextDOMArr[i], scoreArr[i], authorArr[i], commentsArr[i]);
    }
}

// JQUERY

// GET SOME DATA SON
let hackerNews = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
let newNews = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
let pastNews = 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty';
let askNews = 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty';
let showNews = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty';


let getPodiumNewNews = async () => {
    let httpResNews = await fetch(newNews);
    let dataNews = await httpResNews.json();
    let newNewsIdsArray = dataNews;
    for (let i = 0; i < 3; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${newNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        setCarouselTitle(newTitleArr[i], data.url, data.title);
        setCarouselSubText(newSubTextArr[i], data.score, data.by, data.descendants);
    }
}


let getPodiumPastNews = async () => {
    let httpResPast = await fetch(pastNews);
    let dataPast = await httpResPast.json();
    let pastNewsIdsArray = dataPast;
    for (let i = 0; i < 3; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${pastNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        setCarouselTitle(pastTitleArr[i], data.url, data.title);
        setCarouselSubText(pastSubArr[i], data.score, data.by, data.descendants);
    }
}


let getPodiumAskNews = async () => {
    let httpResAsk = await fetch(askNews);
    let dataAsk = await httpResAsk.json();
    let askNewsIdsArray = dataAsk;
    for (let i = 0; i < 3; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${askNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        setCarouselTitle(askTitleArr[i], data.url, data.title);
        setCarouselSubText(askSubArr[i], data.score, data.by, data.descendants);
    }

}



let getPodiumShowNews = async () => {
    let httpResShow = await fetch(showNews);
    let datahttpResShow = await httpResShow.json();
    let showNewsIdsArray = datahttpResShow;
    for (let i = 0; i < 3; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${showNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        setCarouselTitle(showTitleArr[i], data.url, data.title);
        setCarouselSubText(showSubArr[i], data.score, data.by, data.descendants);
    }
};



let getHackerNews = async () => {
    let httpRes = await fetch(hackerNews);
    let data = await httpRes.json();
    let hackerNewsIdsArray = data;
    for (let i = 0; i < 100; i++) {
        const hackerAPI = `https://hacker-news.firebaseio.com/v0/item/${hackerNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(hackerAPI);
        const data = await httpRes.json();
        if (i < 3) {
            setCarouselTitle(hackerNewsTitleDOMArray[i], data.url, data.title);
            setCarouselSubText(hackerNewsSubTextArray[i], data.score, data.by, data.descendants);
            setPodiumTitles(podiumTitleDOMArray[i], data.url, data.title);
            setPodiumSubText(podiumSubTextDOMArray[i], data.score, data.by);
            setPodiumCommentsNumber(podiumCommentsNumberArray[i], data.descendants)
        } else {
            myTable = $("#myTable > tbody");
            tableRow = $(`<tr></tr>`);
            tdRowNumber = $(`<td class='tableStyle' id=rowNumberId${i}>${i+1}</td>`);
            tdRowTitle = $(`<td class='tableStories'><a class='tableStories' id=rowTitleId${i} href=${data.url}>${data.title}</a></td>`);
            tdRowScore = $(`<td class='tableStyle' id=rowScoreId${i}>${data.score} points</td>`);
            tdRowAuthor = $(`<td class='tableStyle' id=rowAuthorId${i}>by ${data.by}</td>`);
            tdRowComments = $(`<td type="button" data-bs-toggle="modal"
        data-bs-target="#exampleModal" class='tableCommentsStyle' id=rowCommentsId${i}>${data.descendants} comments</td><`);
            tableRow.append(tdRowNumber);
            tableRow.append(tdRowTitle);
            tableRow.append(tdRowScore);
            tableRow.append(tdRowAuthor);
            tableRow.append(tdRowComments);
            myTable.append(tableRow);
        }

    }
};


let getNewNews = async () => {
    let httpRes = await fetch(newNews);
    let data = await httpRes.json();
    let newNewsIdsArray = data;
    for (let i = 0; i < 100; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${newNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        if (i < 3) {
            setCarouselTitle(newTitleArr[i], data.url, data.title);
            setCarouselSubText(newSubTextArr[i], data.score, data.by, data.descendants);
            setPodiumTitles(podiumTitleDOMArray[i], data.url, data.title);
            setPodiumSubText(podiumSubTextDOMArray[i], data.score, data.by);
            setPodiumCommentsNumber(podiumCommentsNumberArray[i], data.descendants)
        } else {
            myTable = $("#myTable > tbody");
            tableRow = $(`<tr></tr>`);
            tdRowNumber = $(`<td class='tableStyle' id=rowNumberId${i}>${i+1}</td>`);
            tdRowTitle = $(`<td class='tableStories'><a class='tableStories' id=rowTitleId${i} href=${data.url}>${data.title}</a></td>`);
            tdRowScore = $(`<td class='tableStyle' id=rowScoreId${i}>${data.score} points</td>`);
            tdRowAuthor = $(`<td class='tableStyle' id=rowAuthorId${i}>by ${data.by}</td>`);
            tdRowComments = $(`<td type="button" data-bs-toggle="modal"
        data-bs-target="#exampleModal" class='tableCommentsStyle' id=rowCommentsId${i}>${data.descendants} comments</td><`);
            tableRow.append(tdRowNumber);
            tableRow.append(tdRowTitle);
            tableRow.append(tdRowScore);
            tableRow.append(tdRowAuthor);
            tableRow.append(tdRowComments);
            myTable.append(tableRow);
        }

    }
};

let getPastNews = async () => {
    let httpRes = await fetch(pastNews);
    let data = await httpRes.json();
    pastNewsIdsArray = data;
    for (let i = 0; i < 100; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${pastNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        if (i < 3) {
            setCarouselTitle(pastTitleArr[i], data.url, data.title);
            setCarouselSubText(pastSubArr[i], data.score, data.by, data.descendants);
            setPodiumTitles(podiumTitleDOMArray[i], data.url, data.title);
            setPodiumSubText(podiumSubTextDOMArray[i], data.score, data.by);
            setPodiumCommentsNumber(podiumCommentsNumberArray[i], data.descendants)
        } else {
            myTable = $("#myTable > tbody");
            tableRow = $(`<tr></tr>`);
            tdRowNumber = $(`<td class='tableStyle' id=rowNumberId${i}>${i+1}</td>`);
            tdRowTitle = $(`<td class='tableStories'><a class='tableStories' id=rowTitleId${i} href=${data.url}>${data.title}</a></td>`);
            tdRowScore = $(`<td class='tableStyle' id=rowScoreId${i}>${data.score} points</td>`);
            tdRowAuthor = $(`<td class='tableStyle' id=rowAuthorId${i}>by ${data.by}</td>`);
            tdRowComments = $(`<td type="button" data-bs-toggle="modal"
        data-bs-target="#exampleModal" class='tableCommentsStyle' id=rowCommentsId${i}>${data.descendants} comments</td><`);
            tableRow.append(tdRowNumber);
            tableRow.append(tdRowTitle);
            tableRow.append(tdRowScore);
            tableRow.append(tdRowAuthor);
            tableRow.append(tdRowComments);
            myTable.append(tableRow);
        }

    }
};

let getAskNews = async () => {
    let httpRes = await fetch(askNews);
    let data = await httpRes.json();
    askNewsIdsArray = data;
    for (let i = 0; i < askNewsIdsArray.length; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${askNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        if (i < 3) {
            setCarouselTitle(askTitleArr[i], data.url, data.title);
            setCarouselSubText(askSubArr[i], data.score, data.by, data.descendants);
            setPodiumTitles(podiumTitleDOMArray[i], data.url, data.title);
            setPodiumSubText(podiumSubTextDOMArray[i], data.score, data.by);
            setPodiumCommentsNumber(podiumCommentsNumberArray[i], data.descendants)
        } else {
            myTable = $("#myTable > tbody");
            tableRow = $(`<tr></tr>`);
            tdRowNumber = $(`<td class='tableStyle' id=rowNumberId${i}>${i+1}</td>`);
            tdRowTitle = $(`<td class='tableStories'><a class='tableStories' id=rowTitleId${i} href=${data.url}>${data.title}</a></td>`);
            tdRowScore = $(`<td class='tableStyle' id=rowScoreId${i}>${data.score} points</td>`);
            tdRowAuthor = $(`<td class='tableStyle' id=rowAuthorId${i}>by ${data.by}</td>`);
            tdRowComments = $(`<td type="button" data-bs-toggle="modal"
        data-bs-target="#exampleModal" class='tableCommentsStyle' id=rowCommentsId${i}>${data.descendants} comments</td><`);
            tableRow.append(tdRowNumber);
            tableRow.append(tdRowTitle);
            tableRow.append(tdRowScore);
            tableRow.append(tdRowAuthor);
            tableRow.append(tdRowComments);
            myTable.append(tableRow);
        }

    }
};

let getShowNews = async () => {
    let httpRes = await fetch(showNews);
    let data = await httpRes.json();
    showNewsIdsArray = data;
    for (let i = 0; i < showNewsIdsArray.length; i++) {
        const newsAPI = `https://hacker-news.firebaseio.com/v0/item/${showNewsIdsArray[i]}.json?print=pretty`;
        const httpRes = await fetch(newsAPI);
        const data = await httpRes.json();
        if (i < 3) {
            setCarouselTitle(showTitleArr[i], data.url, data.title);
            setCarouselSubText(showSubArr[i], data.score, data.by, data.descendants);
            setPodiumTitles(podiumTitleDOMArray[i], data.url, data.title);
            setPodiumSubText(podiumSubTextDOMArray[i], data.score, data.by);
            setPodiumCommentsNumber(podiumCommentsNumberArray[i], data.descendants)
        } else {
            myTable = $("#myTable > tbody");
            tableRow = $(`<tr></tr>`);
            tdRowNumber = $(`<td class='tableStyle' id=rowNumberId${i}>${i+1}</td>`);
            tdRowTitle = $(`<td class='tableStories'><a class='tableStories' id=rowTitleId${i} href=${data.url}>${data.title}</a></td>`);
            tdRowScore = $(`<td class='tableStyle' id=rowScoreId${i}>${data.score} points</td>`);
            tdRowAuthor = $(`<td class='tableStyle' id=rowAuthorId${i}>by ${data.by}</td>`);
            tdRowComments = $(`<td type="button" data-bs-toggle="modal"
        data-bs-target="#exampleModal" class='tableCommentsStyle' id=rowCommentsId${i}>${data.descendants} comments</td><`);
            tableRow.append(tdRowNumber);
            tableRow.append(tdRowTitle);
            tableRow.append(tdRowScore);
            tableRow.append(tdRowAuthor);
            tableRow.append(tdRowComments);
            myTable.append(tableRow);
        }

    }
};

async function run_processes() {
    let res = null;
    try {
        res = await Promise.all([
            getHackerNews(),
            getPodiumShowNews(),
            getPodiumAskNews(),
            getPodiumPastNews(),
            getPodiumNewNews()
        ]);
        console.log('Success >>', res);
    } catch (err) {
        console.log('Fail >>', res, err);
    }
}

run_processes();
