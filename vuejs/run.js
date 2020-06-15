
/* default */
var Home ={template: 
  
  `
  <div class="container">
      <div class="bg1">
        <h2>12 <span>| 100</span></h2>
        <p>Goals Completed</p>
      </div>
      <div class="bg1">
        <h2><i class="fas fa-battery-three-quarters"></i></h2>
        <p>Respiration</p>
      </div>
      <div class="bg2">
        <h2><i class="fas fa-running"></i></h2>
        <p>Miles</p>
      </div>
      <div class="bg1">
        <h2>32 &deg;</h2>
        <p>Temperature</p>
      </div>
      <div class="bg1">
        <h2><i class="fas fa-bed"></i></h2>
        <p>Sleep Keep</p>
      </div>
      <div class="bg2">
        <h2>92 <span>bpm</span></h2>
        <p>Heart Rate</p>
      </div>
      <div class="bg1">
        <h2>xxx <span>KG</span></h2>
        <p>Weight</p>
      </div>
      <div class="bg1">
        <h2>28 <span>%</span></h2>
        <p>Fat Percentage</p>
      </div>
      <div class="bg2">
        <h2>118 <span>mgdl</span></h2>
        <p>Blood Glucose</p>
      </div>
      <div class="bg2">
        <h2>680 <span>kcal</span></h2>
        <p>AVG Consumption</p>
      </div>
      <div class="bg2">
        <h2><i class="fas fa-dumbbell"></i></h2>
        <p>Workouts</p>
      </div>
      <div class="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>
    </div>

  
 
  
   





  
  
  
  `
  
  


}


/* about */
var About={template: 
  
  ` 
  <div class="row">

  <div class="col s6">
    <h2 class ="center">Bio</h2>
    <p> Welcome to my simple portfolio website, <br>
    I am a student from Multimedia University(Melaka Campus)<br>
    I love programming and also follow with interest the Security Techonology nowadays.<br>
    I have some simple assignment/project upload in Github, you can see it in "Contact" section<br>
    If you have interest with me welcome to contact with me via email or Linkedin in "Contact" above.
  </div>


<div class="col s6">
  <h2 class ="center">Skill Set</h2>
  <div class="row.skill">
  <div><p class="skill">HTML,CSS</p></div>
  <div class="progress">
  <div class="determinate" style="width:60%"></div>
  </div>
  </div>

  <div class="row.skill">
  <div><p class="skill">Javascript</p></div>
  <div class="progress">
  <div class="determinate" style="width:20%"></div>
  </div>
  </div>


  <div class="row.skill">
  <div><p class="skill">Vue</p></div>
  <div class="progress">
  <div class="determinate" style="width:10%"></div>
  </div>
  </div>


  <div class="row.skill">
  <div><p class="skill">Photoshop</p></div>
  <div class="progress">
  <div class="determinate" style="width:70%"></div>
  </div>
  </div>


  <div class="row.skill">
  <div><p class="skill">Video Editing</p></div>
  <div class="progress">
  <div class="determinate" style="width:50%"></div>
  </div>
  </div>

  <div class="row.skill">
  <div><p class="skill">Ethical Hacking</p></div>
  <div class="progress">
  <div class="determinate" style="width:10%"></div>
  </div>
  </div>


  <div class="row.skill">
  <div><p class="skill">Networking</p></div>
  <div class="progress">
  <div class="determinate" style="width:30%"></div>
  </div>
  </div>









</div>




  </div>
  `


  


}



/* contact */
var Contact={template: 

`
<div class="row">
  <h2 class="center">Contact me</h2>
  <p>
  <div class="row">
  <div class="center">
<br><br>
  <a href="https://www.linkedin.com/in/zhan-wang-lim-3204301ab/" target="_blank">
  <img class="circle" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png" 
  alt="Linkedin" width="100px" height="100px">
  </a>

  <a href="https://github.com/Limwebdev" target="_blank">
  <img class="circle" src="https://webstockreview.net/images/github-icon-png.png"
  alt="Github" width="100px" height="100px">
  </a>

  <a href="mailto:zhanwang198@gmail.com?subject=Contact">
  <img class="circle" src="https://cdn0.iconfinder.com/data/icons/material-circle-apps/512/icon-email-material-design-512.png" 
  alt="Gmail" width="100px" height="100px"x>
  </a>

  </div>
  </div>
  </p>



</div>







`


}
 

























var routes =[
    
        {path:'/',component: Home },
        {path:'/about', component: About },
        {path:'/contact', component: Contact }
    
]

var router =new VueRouter({
    routes,
})
 
 
 
 
 
 
 
 new Vue({
     router,
  el: '#app',
  data: {
    message: 'Portfolio'
  }
}).$mount('#app')

