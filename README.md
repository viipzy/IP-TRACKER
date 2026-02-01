# Frontend Mentor - IP address tracker

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


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

* View the optimal layout for each page depending on their device’s screen size
* See hover states for all interactive elements
* See their own IP address on the map on the initial page load
* Search for any IP addresses or domains and see the key information and location.

### Screenshot

![Mobile screen](./screenshot/mobile.png)
![Desktop screen](./screenshot/desktop.png)


### Links

- Solution URL: [FrontEndMentor](https://www.frontendmentor.io/solutions/ip-address-tracker-lOdn_K94lm)
- Live Site URL: [Vercel](https://ip-tracker-jet.vercel.app/)

## My process

### Built with

* Semantic HTML5
* CSS (Flexbox + Grid)
* Mobile-first workflow
* JavaScript
* [LeafletJS](https://leafletjs.com/) – interactive maps
* [IP Geolocation API by IPify](https://geo.ipify.org/) - IP Geolocation and API
* [Vercel Serverless Functions](https://vercel.com/) – to hide API keys

---

### What I learned

This project taught me how to:

* Work with third-party APIs and handle errors
* Use Leaflet to display and update map markers dynamically
* Secure API keys using a backend proxy with Vercel
* Understand why serverless proxies return different IPs
* Debug real-world issues like 403 errors and CORS

One part I’m proud of is dynamically moving the map marker:

```js
map.setView([lat, lng], 13);
map.removeLayer(marker);
marker = L.marker([lat, lng]).addTo(map);
```

---

### Continued development

In future projects, I want to:

* Improve error handling and user feedback
* Add loading states and animations
* Learn more about backend security and rate limiting
* Build more full-stack projects using serverless functions

---

### Useful resources

* [https://leafletjs.com/](https://leafletjs.com/) – Map documentation
* [https://geo.ipify.org/](https://geo.ipify.org/) – IP Geolocation API
* [https://vercel.com/docs/functions](https://vercel.com/docs/functions) – Vercel serverless guide
* [https://developer.mozilla.org/](https://developer.mozilla.org/) – For fetch and async/await

---

## Author

* Name: **Awosanya Ifeoluwa (Vipzy)**
* Frontend Mentor: [https://www.frontendmentor.io/profile/viipzy](https://www.frontendmentor.io/profile/viipzy)
* GitHub: [https://github.com/viipzy](https://github.com/viipzy)
