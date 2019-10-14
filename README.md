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
    * Technology 1
        * Description
        * Justification
    * Technology 2
        * Description
        * Justification


Vanilla JavaScript
Web Audio API
Webpack
Tone.js


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

 Allow user to the change the settings of the simulation and be able to restart with their settings in place
 Show count of non-infected and infected particles, along with the total time it took to infect all particles
 Show live graph of rate of infection
 
 
 **Day 4: Translating Data to Audio & UI **

* Add links to GitHub, LinkedIn, and Portfolio Site

* Begin honing user interface presentation

 
**Day 5: Complete User Interface **

* Add links to GitHub, LinkedIn, and Portfolio Site

* Update styling 

* Any user experience changes (for example, changing the settings to a modal or adding an about section)
