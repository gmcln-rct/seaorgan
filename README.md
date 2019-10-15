![Sea Organ of Zadar](https://media.treehugger.com/assets/images/2015/11/sea-organ-zadar-1.jpg.860x0_q70_crop-scale.jpg "CC BY-NC-ND 2.0 linssimato")

# Sea Organ
## (aka seaOrganOf)

    
<h1>Background and Overview</h1>

This project is inspired by the Sea Organ of Zadar in Zadar, Croatia, which uses the movement of water to power an audio installation underneath the boardwalk in Zadar, which creates an ethereal, organ-like sound.

In this project, the goal is to use an external, real-time dataset of tides or ocean currents in order to generate organ-like sounds in the browser. The app will not require user input, beyond mute/unmute. If time allows, the project will also include the ability select from different geographic locations.

The front-end will remain fairly minimal, showing the location source of the data as well as an audio visualization.

Reference on Sea Organ of Zadar:

Info: http://www.oddmusic.com/gallery/om24550.html

Video: https://www.youtube.com/watch?v=myV3E9uREuI


---

<h1>Functionality</h1>

Sea Organ should include the following basic functionality.

* User can initiate audio by unmuting.

* User can mute/unmute audio stream.

* App fetches tidal/current data from external source on recurring, consistent basis (depending on dataset requirements)

   * App should be able to handle gaps in data feed

* App 'translates' data into a form to be used by Web Audio API

* Web Audio API converts the resulting data into continuous organ-like sounds


Bonus: Ideally, the User should be able to select what geographic location to source the tidal/current data from, using a dropdown.


<h1>Architectures and Technologies</h1>

* Architecture and Technologies
    * Vanilla Javascript
        * The plan is to use JavaScript as the core funtionality for the app
    * Web Audio API
        * The plan is to use the Web Audio API, as opposed to the basic HTML 5 Player <video> tag;
        * the Web Audio API allows for more flexibiliy in dealing with audio that is received beyond a single, one-time source.
    * Webpack
        * Webpack will allow for a range of npm-based tools to increase the functionality oif te app.
    * Tone.js
        * Tone.js will allow for more nuanced, specific representation of sound of a specific instrument.


---


<h1>Timeline</h1>


**Day 1: Skeleton Setup & Webpack**

* Setup webpack and webpack.config.js. 
* Setup skeleton. 
* Get webpack up and running.



**Day 2: Audio Synthesis**

* Work on understanding Web Audio API and how to add audio to page
* Research Tone.js and how to add specific instrumentation (e.g. organ)
* Work on audio synthesis from a local dataset.


**Day 3: Dataset Connection**

* Reseach and understand the datasets available related to tides and currents
* Choose the dataset that allows the greatest flexiblity vis-a-vis the Web Audio API
* Establish the best means of importing the database to the App for us ein audio synthesis.
 
 
 
**Day 4: TranslateData to Audio & UI**

* Format current data in format needed for Web Audio API

* Attenuate data, as needed, to suit specific audio needs of Web Audio API / Tone.js

* Begin honing user interface presentation


 
**Day 5: Complete User Interface**

* Update styling 

* Add links to GitHub, LinkedIn, and Portfolio Site

* Any user experience changes (for example, changing the settings to a modal or adding an about section)
