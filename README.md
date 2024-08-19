# This is another type of carousal where 3dimensional direction is used with rotate x and y are used to keep track of images

<br>

<p>Author:</p>
<h1>Chetan Prince</h1>

<br>

<h3>Code that replaces javascript in css</h3>
<p>The following code represents how the data is processed and image sees carousal of 360 degree where each position is multiplied with quantity and is converted into degreee to place the element for the next position</p>
<pre>transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(300px);</pre>

<br>

<h4>Animation to take place at 3D in CSS file</h4>
<pre>@keyframes autorun{
    from{ transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);}
    to{ transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);}
}</pre>
