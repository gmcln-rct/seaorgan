# Sea Organ


* Project Title
* Background and Overview
    * Motivation for project
    * High level overview
* Functionality and MVP Features
    * Choose carefully
    * Be especially detailed
* Architecture and Technologies
    * Technology 1
        * Description
        * Justification
    * Technology 2
        * Description
        * Justification
    ...
Implementation Timeline
    * Most important category
    * Daily breakdown
    * Aim to be done by Friday
    
    
    
<h1>Background and Overview</h1>

This project is inspired by the Sea Organ of Zadar in Zadar, Croatia, which uses the movement of water to power an audio installation underneath the boardwalk in Zadar, which creates an ethereal, organ-like sound.

In this project, the goal is to use an external, real-time dataset of tides or ocean currents in order to generate organ-like sounds in the browser. The app will not require user input, beyond mute/unmute. If time allows, the project will also include the ability select from different geographic locations.

The front-end will remain fairly minimal, showing the location source of the data as well as an audio visualization.

Reference on Sea Organ of Zadar:
Info: http://www.oddmusic.com/gallery/om24550.html

Video: https://www.youtube.com/watch?v=myV3E9uREuI


<h2>Functionality</h2>

Sea Organ should include the following basic functionality.

* User can initiate audio by unmuting.

* User can mute/unmute audio stream.

* App fetches tidal/current data from external source on recurring, consistent basis (depending on dataset requirements)

   * App should be able to handle gaps in data feed

* App 'translates' data into a form to be used by Web Audio API

* Web Audio API converts the resulting data into continuous organ-like sounds

Bonus: Ideally, the User should be able to select what geographic location to source the tidal/current data from, using a dropdown.


<h2>Architectures and Technologies</h2>



