Instead of using attr we can use a multi value map

Regular 

```
   
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
                .attr("x", function(d , i){
                    return i * ( w / dataset.length);
                })
                .attr("y", function(d){
                    return h - (d* 4);
                })
                .attr("width" , w / dataset.length - padding)
                .attr("height" , function(d){
                    return d * 4;
                })
                .attr("fill",function(d){
                    return "rgb("+ (d*10) + ", 0 , 0)";
                });
```

With Multi Value Map 

```
      
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
                .attr({
                x : function(d , i){
                    return i * ( w / dataset.length);},
                y : function(d){
                    return h - (d* 4);},
                width:  w / dataset.length - padding,
                height : function(d){
                    return d * 4;
                },
                fill : function(d){
                    return "rgb("+ (d*10) + ", 0 , 0)";
                }});
```