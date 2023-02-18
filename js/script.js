/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
{
  'use strict';
  /*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;

    console.log('Link was clicked!');
    console.log('Event: ' , event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a');
    console.log('links:', activeLinks);

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /*[DONE! :)] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */

    const linkAtr = clickedElement.getAttribute('href');

    console.log('LinkAtr:' + linkAtr);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(linkAtr);

    console.log('targetArticle: ' , targetArticle);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
  };



  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optAuthorSelector = '.post-author';

  function generateTitleLinks(customSelector = ''){

    /*[DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);

    titleList.innerHTML = '';

    /*[DONE] for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    console.log('optArtSelec: ', optArticleSelector);
    console.log('optArtSelec + custom: ', optArticleSelector + customSelector);
    console.log('custom: ', customSelector);
    let html = '';

    for(let article of articles){
      console.log('article: ', article);

      /*[DONE] get the article id */

      const articleId = article.getAttribute('id');
      console.log('articleId: ', articleId);

      /*[DONE] find the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('articleTitle: ', articleTitle);

      /*[DONE^Above] get the title from the title element */

      /*[DONE] create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML: ', linkHTML);

      /*[DONE] insert link into titleList */

      html = html + linkHTML;
      console.log('html: ', html);
    }
    titleList.innerHTML = html;
  }

  generateTitleLinks();

  const links = document.querySelectorAll('.titles a');
  console.log('links: ', links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }


  function generateTags(){

    /*[DONE] find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log('articles: ', articles);

    /*[DONE] START LOOP: for every article: */


    for(article of articles){
      console.log('tags: ', article);

      /*[DONE] find tags wrapper */

      const tagWrap = article.querySelector(optArticleTagsSelector);
      console.log('tagWrap: ', tagWrap);


      /*[DONE] make html variable with empty string */

      let thtml = '';

      /*[DONE] get tags from data-tags attribute */

      const tagsInner = article.getAttribute('data-tags');
      console.log('tagsInner: ', tagsInner);

      /*[DONE] split tags into array */

      const tagsArray = tagsInner.split(' ');
      console.log('Array: ',tagsArray);

      /*[DONE] START LOOP: for each tag */

      for(let tag of tagsArray){

        /*[DONE] generate HTML of the link */

        console.log('tag: ', tag);
        const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
        console.log('tagHTML: ', tagHTML);

        /*[DONE] add generated code to html variable */

        thtml = thtml + tagHTML;
        console.log('thtml: ', thtml);

        /*[DONE] END LOOP: for each tag */
      }
      /*[DONE] insert HTML of all the links into the tags wrapper */

      tagWrap.innerHTML = thtml;

    /*[DONE] END LOOP: for every article: */
    }
  }

  generateTags();

  function generateAuthors(){

    /*[DONE] find all authors */

    const authors = document.querySelectorAll(optArticleSelector);
    console.log('authors: ', authors);

    /*[DONE] START LOOP: for every author: */

    for(author of authors){
      console.log('author: ', author);

      /*[DONE] find author wrapper */

      const authWrap = author.querySelector(optAuthorSelector);
      console.log('authWrap: ', authWrap);

      /*[DONE] make html variable with empty string */

      let ahtml = '';

      /*[DONE] get authors from data-author attribute */

      const authAtr = author.getAttribute('data-author');
      console.log('authAtr: ', authAtr);

      /*[DONE] generate HTML of the link */

      const authHTML = 'by ' + '<a href="#auth-' + authAtr + '">' + authAtr + '</a>';
      console.log('authHTML: ', authHTML);

      /*[DONE] add generated code to html variable */

      ahtml = ahtml + authHTML;
      console.log('ahtml: ', ahtml);

      /*[DONE] insert HTML of all the links into the tags wrapper */

      authWrap.innerHTML = ahtml;

      /*[DONE] END LOOP: for every article: */
    }
  }

  generateAuthors();


  function tagClickHandler(event){

    /*[DONE] prevent default action for this event */

    event.preventDefault();

    /*[DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log('href: ', href);

    /*[DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');
    console.log('tag: ', tag);

    /*[DONE] find all tag links with class active */

    const activeTags = document.querySelectorAll('a.active[href^="tag-"]');
    console.log('activeTags: ', activeTags);

    /* START LOOP: for each active tag link */

    for(let tags of activeTags){

      /*[DONE] remove class active */

      tags.classList.remove('active');

    /*[DONE] END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = clickedElement.querySelectorAll('href' == href);
    console.log('tagLink: ', tagLinks);

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

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log('ahref: ', href);

    /* make a new constant "author" and extract author from the "href" constant */

    const author = href.replace('#auth-', '');
    console.log('authorEx: ', author);

    /* find all author links with class active */

    const activeAuthors = document.querySelectorAll('a.active[href^="auth-"]');
    console.log('activeAutors: ', activeAuthors);

    /* START LOOP: for each active author link */

    for(let auths of activeAuthors){

      /* remove class active */

      auths.classList.remove('active');

    /* END LOOP: for each active author link */
    }
    /* find all author links with "href" attribute equal to the "href" constant */

    const authLinks = clickedElement.querySelectorAll('href' == href);
    console.log('authLink: ', authLinks);

    /* START LOOP: for each found author link */

    for(authLink of authLinks){

      /* add class active */

      authLinks.classList.add('active');

    /* END LOOP: for each found author link */
    }

    /* execute function "generateTitleLinks" with author selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');
  }
  function addClickListenersToAuthors(){
    /* find all links to tags */
    const authLinks = document.querySelectorAll('.post-author a');
    /* START LOOP: for each link */
    for(auth of authLinks){
    /* add tagClickHandler as event listener for that link */
      auth.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
    }
  }

  addClickListenersToAuthors();

}
