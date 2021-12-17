```
function calculaNota(ex, p1, p2) {
   const media = (p1*2 + p2*3 + ex) / 6;
   console.log(media);
   if(media < 6) {return 'D'};
   if(media < 7.5) {return'C'};
   if(media < 9) {return 'B'};
   return "A";

}

```
