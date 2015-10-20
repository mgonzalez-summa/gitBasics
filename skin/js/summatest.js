$(window).load(function(){
	$(".main .main-container .boxes-block .title .link").click(function(){
		showLinkContent();
	});
});


function showLinkContent(){
	$.ajax({
		type:"GET",
		url:"resources/data.php?getBoxes=what-we-do",
		success:function(result){
			var r = JSON.parse(result);
			if(r.length >0) {
				$(".main .main-container .boxes-block .box-list").append("<ul></ul>");
				r.forEach(function(res){
					var item = '<li style="border-top-color:'+ res.color + '"><h1>' + res.title + '</h1><p>' + res.content + '</p></li>';
					$(".main .main-container .boxes-block .box-list").find("ul").append(item);
				});

				$(".main .main-container .boxes-block .box-list").find("ul").find("li").click(function(e){
					var _thisData = { color:$(this).css("borderTopColor"),title:$(this).find("h1").html(),content:$(this).find("p").html() };
					var lastItem = $(".main .main-container .boxes-block .box-list").find("ul").find("li").last();
					var lastData = { color:$(lastItem).css("borderTopColor"),title:$(lastItem).find("h1").html(),content:$(lastItem).find("p").html() };
					
					$(this).css({"borderTopColor":lastData.color});
					$(this).find("h1").html(lastData.title);
					$(this).find("p").html(lastData.content);

					$(lastItem).css({"borderTopColor":_thisData.color});
					$(lastItem).find("h1").html(_thisData.title);
					$(lastItem).find("p").html(_thisData.content);
				});
			}
		},
		error:function(error){
			debugger;
		}
	})
}