# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice Generator Screnshot](/public/screenshots/advice-img-desktop.jpeg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/advice-generator-app-using-react-and-shadcn-ui-jAgez_hhbL)
- [Live Site URL](https://advice-generator-api-blond.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://react.dev/) - JS library
- Shadcn UI
- Advice API

### What I learned

I learn't how to make simple API calls to obtain data.

```js
const getAdvice = async () => {
  let resp = await fetch("https://api.adviceslip.com/advice");
  let data = await resp.json();
}
```

### Continued development

I want to continue on how to fetch data from APIs using various paramaters.

### Useful resources

- [Random Quote Generator React Project Tutorial](https://www.youtube.com/watch?v=L8QhURQuyHA) - This is a simple and concise tutorial on how to use the Advice API.

- [Advice Slip JSON API](https://api.adviceslip.com/) - This is the official docs for the Advice API. I'd recommend it to anyone who wants to try.

## Author

- Website - [Simon-Gabriel](https://simon-o-gabriel.netlify.app/)
- Github - [i-Strider243](https://github.com/i-Strider243)
- Frontend Mentor - [@Simon Gabriel](https://www.frontendmentor.io/profile/i-Strider243)
- Twitter - [@strider18](https://x.com/Strider18)
- LinkedIn - [Simon Gabriel](https://www.linkedin.com/in/gabriel-o-simon/)

## Acknowledgments

I thank God Almighty for another successful project.