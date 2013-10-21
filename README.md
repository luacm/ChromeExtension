Chrome Extension
===============

Intro to making a chrome extension

What is it?
============

An extension is a program that runs in your browser and interacts with the web pages you go to. In this workshop we will focus on Chrome Extensions, which are extensions made for the Chrome Browser. Firefox, Safari, and IE also support extension functionality but we'll focus on Chrome because its cooler.  

Some example extension to help you get the idea of the power are a [browser history timeline](https://chrome.google.com/webstore/detail/history-timeline/gjhpcfomcckgcaniehfgakaddjgncpeb) and a [to-do list](https://chrome.google.com/webstore/detail/todoist-to-do-list-and-ta/fnibmbcdeepaahjmddiihohjanlimlmj/related). You can explore more extensions at the [Chrome Web Store](https://chrome.google.com/webstore/category/apps). 


Helpful to know
================

* HTML/CSS/JS
* Git or some other version control
* Basic terminal knowledge

If you don't know, don't worry! All of these things can be picked up along the way.

Why are we doing this?
======================

So far we have explored HTML, CSS, and Javascript which are pretty much all the tools you need to do stuff on the web. Normally, that involves making a website but I don't want to get bogged down in pushing to servers, backend languages, frameworks, and other stuff so we'll just make a Chrome App.

Plan
====

I'm going to walk you through making your first Chrome Extension; some topics I will cover are x, y, and z. Some topics I won't cover are a, b, and c. Google has a nice [beginner tutorial](http://developer.chrome.com/extensions/getstarted.html) that you can take a look at; I plan on showing a lot more than what they do. 

Composition of a Chrome App
============================

### The Manifest
A manifest describes your apps properties. In here you will give it a name, version number, description, and other important information that the browser will use when running your app. the manifest file needs to be saved in the top-level of your apps directory and it needs to be named ``` manifest.json ```. To ensure properly formed JSON, use [jsonlint.com](http://jsonlint.com/).  

Example
```
{
    "name": "Doctor Octopus",
    "version": "0.0.1",
    "manifest_version": 2,
    "description": "At least I graduated",
    "icons": {
        "16": "shredded_arms.png",
        "48": "swol_arms.png",
        "128": "yolked_arms.png"
    },
    "content_scripts": [
        {
            "js": [
                "jquery-1.8.1.min.js",
                "contentscript.js"
            ],
            "matches": [
                "http://*/*",
                "https://*/*"
            ],
            "run_at": "document_end"
        }
    ],
    "permissions": []
}
```

### Content Scripts
This is where we actually __do things__. 


### Testing your app
* You can find all of your installed chrome apps on [chrome://extensions](chrome://extensions/) and can load an unpublished extension into Chrome froms there


Other Resources
================

* [Tutorial](http://developer.chrome.com/extensions/getstarted.html)
* [Developer's Guide](http://developer.chrome.com/extensions/devguide.html)
* [API](http://developer.chrome.com/extensions/api_index.html)
