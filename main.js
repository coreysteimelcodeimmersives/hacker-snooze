// DOMs
let hackerNewsNav = document.querySelector('#navBarTitle');
let newNav = document.querySelector('#newNav');
let pastNav = document.querySelector('#pastNav');
let askNav = document.querySelector('#askNav');
let showNav = document.querySelector('#showNav');
let hackerNewsCarouselStoryOneDOM = document.querySelector("#hackerNewsCarouselStoryOne");
let hackerNewsCarouselSubTextOneDOM = document.querySelector('#hackerNewsCarouselSubTextOne');
let hackerNewsCarouselStoryTwoDOM = document.querySelector("#hackerNewsCarouselStoryTwo");
let hackerNewsCarouselSubTextTwoDOM = document.querySelector('#hackerNewsCarouselSubTexTwo');
let hackerNewsCarouselStoryThreeDOM = document.querySelector("#hackerNewsCarouselStoryThree");
let hackerNewsCarouselSubTextThreeDOM = document.querySelector('#hackerNewsCarouselSubTextThree');
let hackerNewsCarouselMoreButtonDOM = document.querySelector('#hackerNewsCarouselMoreButton');
let newCarouselStoryOneDOM = document.querySelector("#newCarouselStoryOne");
let newCarouselStoryTwoDOM = document.querySelector("#newCarouselStoryTwo");
let newCarouselStoryThreeDOM = document.querySelector("#newCarouselStoryThree");
let newCarouselMoreButtonDOM = document.querySelector('#newCarouselMoreButton');
let pastCarouselStoryOneDOM = document.querySelector("#pastCarouselStoryOne");
let pastCarouselStoryTwoDOM = document.querySelector("#pastCarouselStoryTwo");
let pastCarouselStoryThreeDOM = document.querySelector("#pastCarouselStoryThree");
let pastCarouselMoreButtonDOM = document.querySelector('#pastCarouselMoreButton');
let askCarouselStoryOneDOM = document.querySelector('#askCarouselStoryOne');
let askCarouselStoryTwoDOM = document.querySelector("#askCarouselStoryTwo");
let askCarouselStoryThreeDOM = document.querySelector("#askCarouselStoryThree");
let askCarouselMoreButtonDOM = document.querySelector('#askCarouselMoreButton');
let showCarouselStoryOneDOM = document.querySelector("#showCarouselStoryOne");
let showCarouselStoryTwoDOM = document.querySelector("#showCarouselStoryTwo");
let showCarouselStoryThreeDOM = document.querySelector("#showCarouselStoryThree");
let showCarouselMoreButtonDOM = document.querySelector('#showCarouselMoreButton');
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
let hackerNewsPodiumTitlesArray = ['Hacker News One', 'Hacker News Two', 'Hacker News Three'];
let hackerNesPodiumSubTextPointsArray = ['77', '201', '18'];
let hackerNewsPodiumSubTextAuthorArray = ['Johnny Green', 'Billy Bob', 'Buster Brown'];
let hackerNewsPodiumCommentsNumberArray = ['1', '11', '111'];
let newPodiumTitlesArray = ['News News One', 'News News Two', 'News News Three'];
let newPodiumSubTextPointsArray = ['88', '103', '47'];
let newPodiumSubTextAuthorArray = ['Gary Yellow', 'Kevin Hank', 'Yikes Spikes'];
let newPodiumCommentsNumberArray = ['2', '22', '222'];
let pastPodiumTitlesArray = ['Past One', 'Past Two', 'Past Three'];
let pastPodiumSubTextPointsArray = ['44', '307', '23'];
let pastPodiumSubTextAuthorArray = ['Britt Dawg', 'Jade Cool', 'Ari MyGirl'];
let pastPodiumCommentsNumberArray = ['3', '33', '333'];
let askPodiumTitlesArray = ['Ask One', 'Ask Two', 'Ask Three'];
let askPodiumSubTextPointsArray = ['11', '698', '71'];
let askPodiumSubTextAuthorArray = ['Reed Ster', 'Corey James', 'Riskin Nice'];
let askPodiumCommentsNumberArray = ['4', '44', '444'];
let showPodiumTitlesArray = ['Show One', 'Show Two', 'Show Three'];
let showPodiumSubTextPointsArray = ['55', '876', '21'];
let showPodiumSubTextAuthorArray = ['Shan Dawg', 'Chris Blick', 'Young Eric'];
let showCommentsNumberArray = ['5', '55', '555'];

// Click Listeners
hackerNewsNav.addEventListener('click', function () {
    updatePodium(hackerNewsPodiumTitlesArray, hackerNesPodiumSubTextPointsArray, hackerNewsPodiumSubTextAuthorArray, hackerNewsPodiumCommentsNumberArray);
});

hackerNewsCarouselMoreButtonDOM.addEventListener('click', function () {
    updatePodium(hackerNewsPodiumTitlesArray, hackerNesPodiumSubTextPointsArray, hackerNewsPodiumSubTextAuthorArray, hackerNewsPodiumCommentsNumberArray);
})

newNav.addEventListener('click', function () {
    updatePodium(newPodiumTitlesArray, newPodiumSubTextPointsArray, newPodiumSubTextAuthorArray, newPodiumCommentsNumberArray);
});

newCarouselMoreButtonDOM.addEventListener('click', function () {
    updatePodium(newPodiumTitlesArray, newPodiumSubTextPointsArray, newPodiumSubTextAuthorArray, newPodiumCommentsNumberArray);
})

pastNav.addEventListener('click', function () {
    updatePodium(pastPodiumTitlesArray, pastPodiumSubTextPointsArray, pastPodiumSubTextAuthorArray, pastPodiumCommentsNumberArray);
});

pastCarouselMoreButtonDOM.addEventListener('click', function () {
    updatePodium(pastPodiumTitlesArray, pastPodiumSubTextPointsArray, pastPodiumSubTextAuthorArray, pastPodiumCommentsNumberArray);
});

askNav.addEventListener('click', function () {
    updatePodium(askPodiumTitlesArray, askPodiumSubTextPointsArray, askPodiumSubTextAuthorArray, askPodiumCommentsNumberArray);
});

askCarouselMoreButtonDOM.addEventListener('click', function () {
    updatePodium(askPodiumTitlesArray, askPodiumSubTextPointsArray, askPodiumSubTextAuthorArray, askPodiumCommentsNumberArray);
});

showNav.addEventListener('click', function () {
    updatePodium(showPodiumTitlesArray, showPodiumSubTextPointsArray, showPodiumSubTextAuthorArray, showCommentsNumberArray);
});

showCarouselMoreButtonDOM.addEventListener('click', function () {
    updatePodium(showPodiumTitlesArray, showPodiumSubTextPointsArray, showPodiumSubTextAuthorArray, showCommentsNumberArray);
});

// Helper Functions
let setPodiumTitles = (podiumTitleDOM, podiumTitle) => {
    podiumTitleDOM.innerText = podiumTitle;
};

let setPodiumSubText = (podiumSubTextDOM, points, author) => {
    podiumSubTextDOM.innerText = `${points} points by ${author}`;
}

let setPodiumCommentsNumber = (podiumCommentsDOM, commentsNumber) => {
    podiumCommentsDOM.innerText = `${commentsNumber} Comments »`
}

let updatePodium = (podiumTitlesArray, podiumSubTextPointsArray, podiumSubTextAuthorArray, podiumCommentsNumber) => {
    for (let i = 0; i < podiumTitleDOMArray.length; i++) {
        setPodiumTitles(podiumTitleDOMArray[i], podiumTitlesArray[i]);
        setPodiumSubText(podiumSubTextDOMArray[i], podiumSubTextPointsArray[i], podiumSubTextAuthorArray[i]);
        setPodiumCommentsNumber(podiumCommentsNumberArray[i], podiumCommentsNumber[i]);
    }
}

// JQUERY
let rowNumber = 0;
let rowURL = 'https://www.w3schools.com/';
let rowTitle = 'Elizabeth Holmes didn’t exist, so it was necessary to invent: ';
let rowScore = 'Score: ';
let rowAuthor = 'Author: ';
let rowComments = 'Comments: ';
var myTable = $("#myTable > tbody");
var tableRow = $("<tr><td class='tableStories'>1</td><td class='tableStories'>Title</td><td class='tableStories'>Score</td><td> class='tableStories'Author</td><td class='tableStories'>Comments</td></tr>");
var tdRowNumber = $(`<td class='tableStories'>Number</td>`);
var tdRowTitle = $(`<td class='tableStories'><a href='https://www.w3schools.com/'>Title</a></td>`);
var tdRowScore = $(`<td class='tableStories'>Score</td>`);
var tdRowAuthor = $(`<td class='tableStories'>Author</td>`);
var tdRowComments = $(`<td class='tableStories'>Comments</td><`);

let updateTableRow = (rowNumber, rowURL, rowTitle, rowScore, rowAuthor, rowComments) => {
    for (let i = 1; i < 98; i++) {
        rowNumber = i;
        let newRowTitle = `${rowTitle} ${i}`;
        let newRowScore = `${rowScore} ${i}`;
        let newRowAuthor = `${rowAuthor} ${i}`;
        let newRowComments = `${rowComments} ${i}`;
        myTable = $("#myTable > tbody");
        tableRow = $(`<tr></tr>`);
        tdRowNumber = $(`<td class='tableStyle'>${rowNumber}</td>`);
        tdRowTitle = $(`<td class='tableStories'><a class='tableStories' href=${rowURL}>${newRowTitle}</a></td>`);
        tdRowScore = $(`<td class='tableStyle'>${newRowScore}</td>`);
        tdRowAuthor = $(`<td class='tableStyle'>${newRowAuthor}</td>`);
        tdRowComments = $(`<td class='tableStyle'>${newRowComments}</td><`);
        tableRow.append(tdRowNumber);
        tableRow.append(tdRowTitle);
        tableRow.append(tdRowScore);
        tableRow.append(tdRowAuthor);
        tableRow.append(tdRowComments);
        myTable.append(tableRow);
    }
};

updateTableRow(rowNumber, rowURL, rowTitle, rowScore, rowAuthor, rowComments);

// .css({
//     'font-size': '18 px',
//     'font-family': "Poppins",
//     'color': '#333333',
//     'font-weight': 'bold'
// });


            // 'font-family': "Poppins",
            // 'color': '#333333',


        //     tableRow = $(`<tr><td class='tableStories'>${rowNumber}</td><td class='tableStories'><a href=${rowURL}>${newRowTitle}</a></td><td class='tableStories'>${newRowScore}</td><td class='tableStories'>${newRowAuthor}</td><td class='tableStories'>${newRowComments}</td></tr>`).css({'font-weight': 'bold', 'font-size': '18 px'});
        // myTable.append(tableRow);