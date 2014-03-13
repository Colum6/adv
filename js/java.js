	$(document).ready(function()
	{
	   
	   var blockCarMarginNumber,blockCarMarginString,translate3d,topPWidth,numberBlock,shift,countClickArrow, countSlide,countCont,cont,offsetTop11,offsetTop22,offsetTop33,offsetTop44,offsetTop55,offsetTop66,top,scrollTop,newsHeight,newsWrapObject;
       countSlide=1;
       translate3d=0
       topPWidth=$(".topH1").css("width");
       topPWidth=topPWidth.split("px");
       topPWidth=topPWidth[0];
       topPWidth=parseInt(topPWidth);
       topPWidth=topPWidth-84;
       if (topPWidth<674){
           blockCarMarginNumber=446-((896-topPWidth));
           blockCarMarginString=blockCarMarginNumber+"px";
           if (topPWidth<453){
            blockCarMarginNumber=0;
            blockCarMarginString=blockCarMarginNumber+"px";
         }
        }
       else{
        var blockCarMarginNumber=111-((896-topPWidth)/2);
           blockCarMarginString=blockCarMarginNumber+"px"; 
      }
      $(".blockCar").css("margin-right",blockCarMarginString)
      $(".caruselWrap").css("width",topPWidth);
     $(window).resize(function() {
     topPWidth=$(".topH1").css("width");
     topPWidth=topPWidth.split("px");
     topPWidth=topPWidth[0];
     topPWidth=parseInt(topPWidth);
     topPWidth=topPWidth-84;
     $(".caruselWrap").css("width",topPWidth);
     if (topPWidth<674){
       blockCarMarginNumber=446-((896-topPWidth));
       blockCarMarginString=blockCarMarginNumber+"px";
       if (topPWidth<453){
            var blockCarMarginNumber=0;
             blockCarMarginString=blockCarMarginNumber+"px";
         }
       } 
      else{
      blockCarMarginNumber=111-((896-topPWidth)/2);
      blockCarMarginString=blockCarMarginNumber+"px";
      }
      $(".blockCar").css("margin-right",blockCarMarginString)
 });
      
      
      
      
       $(".triangleRightWrap").click(function(){     
        if (topPWidth<674) {
           if (countSlide==3){   
           }
                else{
                    countSlide++;
                }
             switch (countSlide)   {
                case 2:  {translate3d=2*223+(blockCarMarginNumber+4)*2;
                            $(".triangleLeftWrap").removeClass("dis2"); 
                            }
                         break;
                case 3:  {translate3d=(3*223+(blockCarMarginNumber+4)*3);
                         $(".triangleLeftWrap").removeClass("dis2");
                         $(".triangleRightWrap").addClass("dis");
                         break;
                }
                }
        $(".caruselWrapInner").css({
        "-webkit-transform": "translate3d( " + -translate3d + "px,0, 0)",
        "-moz-transform": "translate3d( " + -translate3d + "px,0, 0)",
        "transform": "translate3d( " + -translate3d + "px,0, 0)"
            })  
               if (countSlide==2){
                 $(".cont").stop().fadeOut(0);
                 $("#cont1").stop().fadeIn(500); 
                 $(".blockCar").children(".topBlock").removeClass("selectedAdv");
                 $(".blockCar").children(".bottomBlock").removeClass("selectedBottom");
                 $(".blockCar").eq(2).children(".topBlock").addClass("selectedAdv");
                 $(".blockCar").eq(2).children(".bottomBlock").addClass("selectedBottom");
            }
            if ((countSlide==3)&&(numberBlock!=4)){
                 
                
                 $(".cont").stop().fadeOut(0);
                 $("#cont1").stop().fadeIn(500); 
                 $(".blockCar").children(".topBlock").removeClass("selectedAdv");
                 $(".blockCar").children(".bottomBlock").removeClass("selectedBottom");
                 $(".blockCar").eq(3).children(".topBlock").addClass("selectedAdv");
                 $(".blockCar").eq(3).children(".bottomBlock").addClass("selectedBottom");
            }
           
            }
            else{
         if ($(".triangleRightWrap").hasClass("dis")){
                
            }
            else
            {
                 $(".cont").stop().fadeOut(0);
                 $("#cont3").stop().fadeIn(500);
            translate3d=2*223+(blockCarMarginNumber+4)*2;
            
        $(".blockCar").children(".topBlock").removeClass("selectedAdv");
        $(".blockCar").children(".bottomBlock").removeClass("selectedBottom");
        $(".blockCar").eq(2).children(".topBlock").addClass("selectedAdv");
         $(".blockCar").eq(2).children(".bottomBlock").addClass("selectedBottom"); 
            } 
                
        translate3d=2*223+(blockCarMarginNumber+4)*2;
       $(".caruselWrapInner").css({
        "-webkit-transform": "translate3d( " + -translate3d + "px,0, 0)",
        "-moz-transform": "translate3d( " + -translate3d + "px,0, 0)",
        "transform": "translate3d( " + -translate3d + "px,0, 0)"
                                  })
        $(".triangleLeftWrap").removeClass("dis2");
        $(".triangleRightWrap").addClass("dis");
        } 
     })
     
     
     
     
     $(".triangleLeftWrap").click(function(){
         $(".centerCurrentLine").css("margin-left","42px");
              if (topPWidth<674) {
                
                
                  if (countSlide==1){  
                }
                else{
                    countSlide--;
                }
             switch (countSlide)   {
                case 1: { translate3d=0;
                         $(".triangleLeftWrap").addClass("dis2");
                         $(".triangleRightWrap").removeClass("dis"); 
                          break;
                          }
                case 2:  {translate3d=(223+(blockCarMarginNumber+4))*2;
                         
                          }       
                          break;
                }
        $(".caruselWrapInner").css({
        "-webkit-transform": "translate3d( " + -translate3d + "px,0, 0)",
        "-moz-transform": "translate3d( " + -translate3d + "px,0, 0)",
        "transform": "translate3d( " + -translate3d + "px,0, 0)"
                                  })     
            
            
            if (countSlide==2){
                
                 $(".cont").stop().fadeOut(0);
                 $("#cont1").stop().fadeIn(500); 
                 $(".blockCar").children(".topBlock").removeClass("selectedAdv");
                 $(".blockCar").children(".bottomBlock").removeClass("selectedBottom");
                 $(".blockCar").eq(2).children(".topBlock").addClass("selectedAdv");
                 $(".blockCar").eq(2).children(".bottomBlock").addClass("selectedBottom");
            }
            if (countSlide==1){
       
                $(".cont").stop().fadeOut(0);
                 $("#cont1").stop().fadeIn(500); 
                 $(".blockCar").children(".topBlock").removeClass("selectedAdv");
                 $(".blockCar").children(".bottomBlock").removeClass("selectedBottom");
                 $(".blockCar").eq(0).children(".topBlock").addClass("selectedAdv");
                 $(".blockCar").eq(0).children(".bottomBlock").addClass("selectedBottom");
            
                
            }   
            
            }
        else{ 
            if ($(".triangleLeftWrap").hasClass("dis2")){
                
            }
            else
            {
                 $(".cont").stop().fadeOut(0);
                 $("#cont1").stop().fadeIn(500); 
                 $(".blockCar").children(".topBlock").removeClass("selectedAdv");
                 $(".blockCar").children(".bottomBlock").removeClass("selectedBottom");
                 $(".blockCar").eq(0).children(".topBlock").addClass("selectedAdv");
                 $(".blockCar").eq(0).children(".bottomBlock").addClass("selectedBottom");
            }
            $(".caruselWrapInner").css({
            "-webkit-transform": "translate3d( 0,0, 0)",
            "-moz-transform": "translate3d( 0,0, 0)",
            "transform": "translate3d( 0,0, 0)"
                 })
        $(".triangleLeftWrap").addClass("dis2");
        $(".triangleRightWrap").removeClass("dis");
        
        }   
     })
      
      
      
      $(".blockCar").click(function(){
        $(".centerCurrentLine").css("margin-left","42px");
        $(".blockCar").children(".topBlock").removeClass("selectedAdv");
        $(".blockCar").children(".bottomBlock").removeClass("selectedBottom");
        $(this).children(".topBlock").addClass("selectedAdv");
        $(this).children(".bottomBlock").addClass("selectedBottom");
        
        numberBlock=$(this).index();
       $(".cont").stop().fadeOut(0);
       countCont=numberBlock+1;
       cont="#cont"+countCont;
       $(cont).stop().fadeIn(500);
  
       if (topPWidth<674) {
       if (numberBlock>0){
           $(".triangleLeftWrap").addClass("dis2");
           $(".triangleRightWrap").removeClass("dis");

       }
       if ((numberBlock<=4) && (numberBlock!=0)){
           $(".triangleLeftWrap").removeClass("dis2");
           $(".triangleRightWrap").addClass("dis");
       }
       if ((numberBlock==1) || (numberBlock==2)){
           
           $(".triangleRightWrap").removeClass("dis");

       }
        switch (numberBlock){
        case 0,1:countSlide=1
                  break;
        case 2:countSlide=2
                  break; 
        case 3,4:countSlide=3     
                  break; 
            
        }
           
        if (numberBlock<4){
          shift=numberBlock*223+(blockCarMarginNumber+4)*numberBlock;
        $(".caruselWrapInner").css({
        "-webkit-transform": "translate3d( " + -shift + "px,0, 0)",
        "-moz-transform": "translate3d( " + -shift + "px,0, 0)",
        "transform": "translate3d( " + -shift + "px,0, 0)"
        })
       }
       else{
        shiftBottom=223+(blockCarMarginNumber+4)+42;
        $(".centerCurrentLine").css("margin-left",shiftBottom);
       }
       
         
       }
      
      
      
       else{    
       if (numberBlock>0){
           $(".triangleLeftWrap").addClass("dis2");
           $(".triangleRightWrap").removeClass("dis");

       }
       if ((numberBlock<=4) && (numberBlock!=0)){
           $(".triangleLeftWrap").removeClass("dis2");
           $(".triangleRightWrap").addClass("dis");
       }
       if (numberBlock==1){
           
           $(".triangleRightWrap").removeClass("dis");

       }
       if ($(".triangleRightWrap").hasClass("dis") && (numberBlock!=0)){
       
                    if ((numberBlock<4)){
          shift=2*223+(blockCarMarginNumber+4)*2;
        $(".caruselWrapInner").css({
        "-webkit-transform": "translate3d( " + -shift + "px,0, 0)",
        "-moz-transform": "translate3d( " + -shift + "px,0, 0)",
        "transform": "translate3d( " + -shift + "px,0, 0)"
        })
       if (numberBlock==3){
           shiftBottom=223+(blockCarMarginNumber+4)+42;
        shiftBottom2=2*223+(blockCarMarginNumber+4)*2+42;
        if (topPWidth<674) {
            $(".centerCurrentLine").css("margin-left",shiftBottom);
            
        }
        else{
                   if (numberBlock==3){
                   
                    $(".centerCurrentLine").css("margin-left",shiftBottom);
                    
                 }
                else{
                    $(".centerCurrentLine").css("margin-left",shiftBottom2);
                } 
        }
        
       }
       }
       else{
        shiftBottom=223+(blockCarMarginNumber+4)+42;
        shiftBottom2=2*223+(blockCarMarginNumber+4)*2+42;
        if (topPWidth<674) {
            $(".centerCurrentLine").css("margin-left",shiftBottom);
            
        }
        else{
                   if (numberBlock==3){
                    alert(shiftBottom);
                    $(".centerCurrentLine").css("margin-left",shiftBottom);
                    
                 }
                else{
                    $(".centerCurrentLine").css("margin-left",shiftBottom2);
                } 
        }
       }
        
       }
       else{

                 if ((numberBlock<3)){
          shift=numberBlock*223+(blockCarMarginNumber+4)*numberBlock;
        $(".caruselWrapInner").css({
        "-webkit-transform": "translate3d( " + -shift + "px,0, 0)",
        "-moz-transform": "translate3d( " + -shift + "px,0, 0)",
        "transform": "translate3d( " + -shift + "px,0, 0)"
        })
      
       }
       else{
        shiftBottom=223+(blockCarMarginNumber+4)+42;
        shiftBottom2=2*223+(blockCarMarginNumber+4)*2+42;
        if (topPWidth<674) {
            $(".centerCurrentLine").css("margin-left",shiftBottom);
            
        }
        else{
                   if (numberBlock==3){
                    $(".centerCurrentLine").css("margin-left",shiftBottom);
                    
                 }
                else{
                    $(".centerCurrentLine").css("margin-left",shiftBottom2);
                } 
        }
       }
       } 
       }

      })
      
   
     
     $(window).scroll(function() {
        top = $(document).scrollTop();
       if (top < 1) $(".header").css("box-shadow", "none");
       else $(".header").css("box-shadow", "0 0 5px rgba(0,0,0,0.5)");
     });
    
  
  offsetTop11=$("#main1").offset().top;
  offsetTop22=$("#main2").offset().top;
  offsetTop33=$("#main3").offset().top;
  offsetTop44=$("#main4").offset().top;
  offsetTop55=$("#main5").offset().top;
  offsetTop66=$("#main6").offset().top;
  offsetTop1=(offsetTop22-offsetTop11)/2;
  offsetTop2=offsetTop22-(offsetTop22-offsetTop11)/2;
  offsetTop3=offsetTop33-(offsetTop33-offsetTop22)/2;
  offsetTop4=offsetTop44-(offsetTop44-offsetTop33)/2;
  offsetTop5=offsetTop55-(offsetTop55-offsetTop44)/2;
  offsetTop6=offsetTop66-(offsetTop66-offsetTop55)/2;
  $(window).scroll(function(){
    
    scrollTop=$(window).scrollTop();
  
    
            if ((scrollTop>offsetTop1) && (scrollTop<=offsetTop2)){
          $(".menuButton").removeClass("menuActive");
          $(".menuButtonRight").removeClass("menuButtonRightActive");
          $("#hrefTo1").addClass("menuActive")
        
    }
            if ((scrollTop>offsetTop2) && (scrollTop<=offsetTop3)){
          $(".menuButton").removeClass("menuActive");
          $(".menuButtonRight").removeClass("menuButtonRightActive");
          $("#hrefTo2").addClass("menuActive")
        
    }
           if ((scrollTop>offsetTop3) && (scrollTop<=offsetTop4)){
          $(".menuButton").removeClass("menuActive");
          $(".menuButtonRight").removeClass("menuButtonRightActive");
          $("#hrefTo3").addClass("menuActive") 
    }
 
           if ((scrollTop>offsetTop4) && (scrollTop<=offsetTop5)){
         $(".menuButton").removeClass("menuActive");
          $(".menuButtonRight").removeClass("menuButtonRightActive");
          $("#hrefTo4").addClass("menuButtonRightActive")
        
    }

            if ((scrollTop>offsetTop5) && (scrollTop<=offsetTop6)){
         $(".menuButton").removeClass("menuActive");
          $(".menuButtonRight").removeClass("menuButtonRightActive");
          $("#hrefTo5").addClass("menuButtonRightActive")
        
    }

            if ((scrollTop>offsetTop6) ){
         $(".menuButton").removeClass("menuActive");
          $(".menuButtonRight").removeClass("menuButtonRightActive");
          $("#hrefTo6").addClass("menuButtonRightActive")
        
    } 
   })
   
/*
easeOutSine
easeInOutSine
easeInOutQuad
easeOutCubic
*/
   
    
    



	$('#hrefTo1').click(function() {
		jQuery.scrollTo('#main1',600, {easing:'easeOutCubic','axis':'y'});
	});
	$('#hrefTo2').click(function() {
		jQuery.scrollTo('#main2',600, {easing:'easeOutCubic','axis':'y'});
	});
	$('#hrefTo3').click(function() {
		jQuery.scrollTo('#main3',600, {easing:'easeOutCubic','axis':'y'});
	});
	$('#hrefTo4').click(function() {
		jQuery.scrollTo('#main4',600, {easing:'easeOutCubic','axis':'y'});
	});
	$('#hrefTo5').click(function() {
		jQuery.scrollTo('#main5',600, {easing:'easeOutCubic','axis':'y'});
	});
	$('#hrefTo6').click(function() {
		jQuery.scrollTo('#main6',600, {easing:'easeOutCubic','axis':'y'});
	});


    
    
    
    
    
    
    
   $(".newsWrap").click(function(){
     if ($(this).hasClass("opened")){
        $(this).height("64px").removeClass("opened");
         $(this).prev(".arrow").removeClass("rotate");
     }
     else{
     $(this).prev(".arrow").addClass("rotate");
     newsHeight=$(this).children(".news").height();
     $(this).height(newsHeight).addClass("opened");
        
     }

   })
   
   $(".moreButton").click(function(){
    newsWrapObject=$(this).prev(".newsWrap");
     if ($(newsWrapObject).hasClass("opened")){
        $(newsWrapObject).height("64px").removeClass("opened");
        $(newsWrapObject).prev(".arrow").removeClass("rotate");
    
     }
     else{
     newsHeight=$(newsWrapObject).children(".news").height();
     $(newsWrapObject).height(newsHeight).addClass("opened");
     $(newsWrapObject).prev(".arrow").addClass("rotate");
     
        
     }

   })
    
    
    });/*КОНЕЦ*/