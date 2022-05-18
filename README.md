
<div>
  <img src="./.img/hiringCodersCover.png" alt="hiring Coders" width="100%" align-self="center" margin="0px"> 
</div>

# Presentation
This repository is part of the bootcamp ["Hiring Coders #3"](https://www.hiringcoders.com.br/). 
The projects and activities developed along this course will be available here. 
You are invited to use the codes and improve them. It will be great if you have comments or suggestions to make them better. 

## Tecnologies And Tools
<div>
<img src="https://img.shields.io/static/v1?label=&message=HTML&color=blue">
<img src="https://img.shields.io/static/v1?label=&message=CSS&color=orange">
<img src="https://img.shields.io/static/v1?label=&message=GIT&color=blueviolet">
<img src="https://img.shields.io/static/v1?label=&message=JAVA SCRIPT &color=green">
<img src="https://img.shields.io/static/v1?label=&message=QA&color=lightgray">
<img src="https://img.shields.io/static/v1?label=&message=JASMINE&color=yellowgreen">
<img src="https://img.shields.io/static/v1?label=&message=SELENIUM &color=blue">
<img src="https://img.shields.io/static/v1?label=&message= CUCUMBER &color=orange">
<img src="https://img.shields.io/static/v1?label=&message= JEST &color=black">
<img src="https://img.shields.io/static/v1?label=&message= CYPRESS &color=red">
<img src="https://img.shields.io/static/v1?label=&message=GITHUB&color=blue">
<img src="https://img.shields.io/static/v1?label=&message=VS CODE&color=red">
</div>


## List of Folders
The master branch has the functional version of the projects. They are segregated in folders briefly described below for reference:
Note: the folder names and the code are writen in portuguese to be in accordance with the language used along the course.

| Folder | Description                                                                                                                                                                                                                                    |
| -------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| portfolioProject | Hey! Let's put the HTML and CSS concepts that we have been learning all together? This project will help us to practice these skills producing a useful project. Enjoy the trip! |
| dataStructures | First week, warming up activities: this course will briefly talk about key concepts related to data structures. Enjoy it!|
| qualityAssuranceProject | Quality is the core atribute of anything that persists useful over the time. During this course we will be exposed to a very important knowledge about TDD, BDD and some tools adopted to keep the softwares on the track, specialy when we work with CI/CD aprouch.|
|qualityAssuranceProject/tdd_bdd_jasmine_cucumber | Jasmine: there are 3 unit tests implemented to demonstrate TDD coding aproach. The Client class is tested to perform the methods returnAll(), first() and upperCase().|
|qualityAssuranceProject/tdd_bdd_jasmine_cucumber| Selenium & Cucumber: there is a case of use implemented checking if the browser presented all 10 client's information recovered by returnAll() method. It is a useful BDD example!|
|qualityAssuranceProject/tdd_bdd_jest_cypress|
|javaScriptBasicActvity|This project ask you to put in practice the knowledge to exchange information bwtween the html and js files. Afterward you will need to create functions to process the information and define html eleents style by code returning the result in a visual way to the user. You can donload the bae project to try yourself at [JCBombardelli's github](https://github.com/jcbombardelli/gama-no-javascript-basico)|
|typeScriptIntroduction|Here we can find the examples used along this course and new ones included to test concepts learned from the documentation.|

## Usage Instructions
- portfolioProject, dataStructures: just download the files into your local folder and open index.html from your browser. If you want to change the code, use your prefered text editor or programing IDE.

- tdd_bdd_jasmine_cucumber: assuming that your system has installed node.js, execute:
To install Express-generator, a package that is an utility that provides a command-line tool you can use to scaffold your node.js project.
  ```npm install express-generator -g```

  Execute cd command on your terminal to move into your folder:
  ``express tdd_bdd_jasmine_cucumber --view=ejs``

  Execute cd command on your terminal to move into your project folder and install the dependencies:
  ``npm install``
  
  Install Jasmine:
  ``npm install --save-dev -g jasmine``

  ``jasmine init``
  
  Install Cucumber:
  ``npm install --save-dev cucumber``
 
  Install Selenium:
  ``npm install --save-dev selenium-webdriver``

  ``npm install``

  Download your browaer's webdriver
  ``https://www.npmjs.com/package/selenium-webdriver``

  Create a new folder ``./driver`` and put the driver into it.

  Clone the project folder and copy into your folder project.

- tdd_bdd_jest_cypress: assuming that your system has installed node.js, execute:
To install Express-generator, a package that is an utility that provides a command-line tool you can use to scaffold your node.js project.
  ```npm install express-generator -g```

  Execute cd command on your terminal to move into your folder:
  ``express tdd_bdd_jest_cypress --view=ejs``

  Execute cd command on your terminal to move into your project folder and install the dependencies:
  ``npm install``
  
  Install Jest:
  ``npm install --save-dev jest``

  ``jasmine init``
  
  Install Cypress:
  ``npm install cypress``
 
  Install Selenium:
  ``npm install --save-dev selenium-webdriver``

  ``npm install``

  Download your browser's webdriver
  ``https://www.npmjs.com/package/selenium-webdriver``

  Create a new folder ``./driver`` and put the driver into it.

  Clone the project folder and copy into your folder project.
