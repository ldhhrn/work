$ (function(){
	$ ("li:eq(0)").click(function(){
		$ (".land").css({
			"display":"block"
		});

	});
});

//登陆弹出end


//图片轮播begin

	$(function(){
		var $ imgCt=$(".img-ct");
		   var $ preButton=$(".button-pre");
		   var $ nextButton=$(".button-next");
		   var $ bullet=$(".bullet");

        var $ firstImg=$ imgCt.find("li").first(),
            $ lastImg=$ imgCt.find("li").last();

        var isAnimate=false;
		$ imgCt.prepend($ lastImg.clone())
		$ imgCt.append($ firstImg.clone())

		$ imgCt.width($ firstImg.width()*$ imgCt.children().length)
		$ imgCt.css("left","-300px")

        $ preButton.on("click",function(e){
        	e.preventDefault();
        	playPre();
        })

        $ nextButton.on("click",function(e){
        	e.preventDefault();
        	playNext();
        })
		var curPageIndex = 0;
        var imgLength=$ imgCt.children().length;

		function playNext(){
			if(isAnimate) return;
			isAnimate=true;

			$ imgCt.animate({
				left:"-=300"
			} ,function(){
				curPageIndex**;
				if(curPageIndex==imgLength){
					$ imgCt.css({"left":"-300px"})
					curPageIndex=0
				}
				isAnimate=false;
				setBullet();
			})
		}
		function playPre(){
			if (isAnimate) return;
			isAnimate=true;
			$ imgCt.animate({
				left:"+=300"
			},function(){
				curPageIndex--;
				if(curPageIndex<0){
					$ imgCt.css("left":-(imgLength*$ firstImg.width()));
						curPageIndex=imgLength-1
				}
				isAnimate=false;
				setBullet();
			})
			}
            function setBullet(){
            $ bullet.children()
                   .removeClass("active")
                   .eq(curPageIndex)
                   .addClass("active")
            }
 })
//图片轮播end





//搜索框begin
$("#search-input").bind("keyup",function(){
	var jqueryInput=$(this)
	var searchText=jqueryInput.val();
    $.get("http://code.jquery.com"+searchText,function(d){
    	var d=d.AS.Result[0].Suggests;
    	var html="";
        for(var i=0;i<d.length;i++){
        	html+="<li>"+d[i].Txt+"</li>";
        }
        $("search-result").html(html);
        $("#search-suggest").show().css({
		top:$("#search-form").offset().top+$("#search-form").height(),
		left:$("search-form").offset().left,
		position:'absolute'
	});
    },"jim");
})


$("#search-input").keyup(function(){
	var words=$(this).val();
	$.ajax({
		type:"post",
		url:"some.php",
		data:"name=John&Location=Boston",
		success:function(msg){
			alert("Data Saved:"+msg);
		},
		error:function(data){
			
		},
		complate:function(data){
			
		
		}
	});

});

//搜索框end