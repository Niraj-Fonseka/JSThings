
### SVG Objects

SVG consists of Shapes ,  Gradients and Filters 



Both of these gives the same output
HTML 
```
<svg>
    <rect width="50" height="200" style="fill:blue;"/>
</svg>
```
D3.js
```
d3.select("body").append("svg").append("rect").attr("width",50).attr("height",200).style("fill","blue");
```

Viewport 0,0 starts at the top left

Supports all the html selectors

Setting the svg height and the width you set the view port