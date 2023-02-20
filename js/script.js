/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
{
  'use strict';

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a');
    console.log('links:', activeLinks);

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /*[DONE! :)] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */

    const linkAtr = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(linkAtr);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
  };



  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optAuthorSelector = '.post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = 5,
    optCloudClassPrefix = 'tag-size-',
    optAuthorsListSelector = '.authors.list';


  function generateTitleLinks(customSelector = ''){

    /*[DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);

    titleList.innerHTML = '';

    /*[DONE] for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for(let article of articles){

      /*[DONE] get the article id */

      const articleId = article.getAttribute('id');

      /*[DONE] find the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /*[DONE^Above] get the title from the title element */

      /*[DONE] create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /*[DONE] insert link into titleList */

      html = html + linkHTML;
    }
    titleList.innerHTML = html;
  }

  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  function calculateTagsParams(tags){
    const params = {
      max: 0,
      min: 999999,
    };
    for(let tag in tags){
      console.log(tag + ' is used ' + tags[tag] + ' times');
      if(tags[tag] > params.max){
        params.max = tags[tag];
      }
      if(tags[tag] < params.min){
        params.min = tags[tag];
      }
    }
    return params;
  }
  calculateTagsParams();

  function calculateTagClass(count,params){
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
    return optCloudClassPrefix + classNumber;

  }
  function generateTags(){
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};
    /*[DONE] find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /*[DONE] START LOOP: for every article: */


    for(article of articles){

      /*[DONE] find tags wrapper */

      const tagWrap = article.querySelector(optArticleTagsSelector);

      /*[DONE] make html variable with empty string */

      let thtml = '';

      /*[DONE] get tags from data-tags attribute */

      const tagsInner = article.getAttribute('data-tags');

      /*[DONE] split tags into array */

      const tagsArray = tagsInner.split(' ');

      /*[DONE] START LOOP: for each tag */

      for(let tag of tagsArray){

        /*[DONE] generate HTML of the link */

        const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';

        /*[DONE] add generated code to html variable */

        thtml = thtml + tagHTML;

        /* [NEW] check if this link is NOT already in allTags */

        if(!allTags[tag]){

          /* [NEW] add generated code to allTags array */

          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }
        /*[DONE] END LOOP: for each tag */
      }
      /*[DONE] insert HTML of all the links into the tags wrapper */

      tagWrap.innerHTML = thtml;

    /*[DONE] END LOOP: for every article: */
    }

    /* [NEW] find list of tags in right column */

    const tagList = document.querySelector(optTagsListSelector);

    /* [NEW] create variable for all links HTML code */

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams: ', tagsParams);
    let allTagsHTML = '';

    /*[NEW] START LOOP: for each tag in allTags: */

    for(let tag in allTags){

      /*[NEW] generate code of a lin and add it to allTagsHTML */

      allTagsHTML +='<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '">' + tag + '</a>' + '</li>';
      console.log('calc: ', allTagsHTML);
      /*[NEW] END LOOP: for each tag in allTags: */

    }
    /*[NEW] add HTML from allTagsHTML to tagList */

    tagList.innerHTML = allTagsHTML;
  }


  generateTags();

  function calculateAuthorsParams(authors){
    const params = {
      max: 0,
      min: 999999,
    };
    for(let author in authors){
      console.log(author + ' is used ' + authors[author] + ' times');
      if(authors[author] > params.max){
        params.max = authors[author];
      }
      if(authors[author] < params.min){
        params.min = authors[author];
      }
    }
    return params;
  }
  calculateAuthorsParams();

  function generateAuthors(){
    /* [NEW] create a new variable allAuthors with an empty object */
    let allAuthors = {};
    /*[DONE] find all authors */

    const authors = document.querySelectorAll(optArticleSelector);

    /*[DONE] START LOOP: for every author: */

    for(author of authors){

      /*[DONE] find author wrapper */

      const authWrap = author.querySelector(optAuthorSelector);

      /*[DONE] make html variable with empty string */

      let ahtml = '';

      /*[DONE] get authors from data-author attribute */

      const authAtr = author.getAttribute('data-author');
      console.log(authAtr);
      /*[DONE] generate HTML of the link */

      //const authHTML = 'by ' + '<a href="#auth-' + authAtr + '">' + authAtr + '</a>';
      const authHTML = '<p class="post-author">by <a href="#author-' + authAtr + '">' + authAtr + '</a></p>';
      /*[DONE] add generated code to html variable */

      ahtml = ahtml + authHTML;

      /* [NEW] check if this link is NOT already in allAuthors */

      if(!allAuthors[authAtr]){
        /* [NEW] add generated code to allAuthors object */
        allAuthors[authAtr] = 1;
      } else {
        allAuthors[authAtr]++;
      }

      /*[DONE] insert HTML of all the links into the authors wrapper */

      authWrap.innerHTML = ahtml;

      /*[DONE] END LOOP: for every author: */
    }
    /* [NEW] find list of authors in right column */
    const authList = document.querySelector(optAuthorsListSelector);
    console.log('authList: ', authList);
    /* [NEW] create variable for all links HTML code */
    const authParams = calculateAuthorsParams(allAuthors);
    console.log('authPar: ', authParams);
    let allAuthorsHTML = '';
    /*[NEW] START LOOP: for each tag in allTags: */
    for(let auth in allAuthors){
      /*[NEW] generate code of a link and add it to allTagsHTML */
      allAuthorsHTML +='<li><a href="#author-' + author + '">' + auth + '</a>' + ' (' + allAuthors[auth] + ') ' + '</li>';
      /*[NEW] END LOOP: for each tag in allTags: */
    }
    /*[NEW] add HTML from allTagsHTML to tagList */
    authList.innerHTML = allAuthorsHTML;
  }

  generateAuthors();


  function tagClickHandler(event){

    /*[DONE] prevent default action for this event */

    event.preventDefault();

    /*[DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /*[DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /*[DONE] find all tag links with class active */

    const activeTags = document.querySelectorAll('a.active[href^="tag-"]');

    /* START LOOP: for each active tag link */

    for(let tags of activeTags){

      /*[DONE] remove class active */

      tags.classList.remove('active');

    /*[DONE] END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = clickedElement.querySelectorAll('href' == href);

    /* START LOOP: for each found tag link */

    for(tagLink of tagLinks){

      /* add class active */

      tagLink.classList.add('active');

    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('.post-tags .list a');
    /* START LOOP: for each link */
    for(tagz of tagLinks){
    /* add tagClickHandler as event listener for that link */
      tagz.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    }
  }

  addClickListenersToTags();

  function authorClickHandler(event){

    /*[DONE] prevent default action for this event */

    event.preventDefault();

    /*[DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /*[DONE] make a new constant "author" and extract author from the "href" constant */

    const author = href.replace('#auth-', '');

    /*[DONE] find all author links with class active */

    const activeAuthors = document.querySelectorAll('a.active[href^="auth-"]');

    /*[DONE] START LOOP: for each active author link */

    for(let auths of activeAuthors){

      /*[DONE] remove class active */

      auths.classList.remove('active');

    /*[DONE] END LOOP: for each active author link */
    }
    /*[DONE] find all author links with "href" attribute equal to the "href" constant */

    const authLinks = clickedElement.querySelectorAll('href' == href);

    /*[DONE] START LOOP: for each found author link */

    for(authLink of authLinks){

      /*[DONE] add class active */

      authLinks.classList.add('active');

    /*[DONE] END LOOP: for each found author link */
    }

    /*[DONE] execute function "generateTitleLinks" with author selector as argument */

    generateTitleLinks('[data-author="' + author + '"]');
  }
  function addClickListenersToAuthors(){

    /*[DONE] find all links to authors */

    const authLinks = document.querySelectorAll('.post-author a');
    /*[DONE] START LOOP: for each link */

    for(auth of authLinks){

      /*[DONE] add authorClickHandler as event listener for that link */

      auth.addEventListener('click', authorClickHandler);

    /*[DONE] END LOOP: for each link */
    }
  }

  addClickListenersToAuthors();

}
