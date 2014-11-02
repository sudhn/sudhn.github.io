(function($){

	// General
	var container = $("#wrapper");

	// Text
	var newTextElem = document.createElement("div");
	var menuContainer = document.createElement("div");
	menuContainer.setAttribute("class","inline-menu")
	menuContainer.innerHTML = "<span class='icon icon-edit'>Edit</span><span class='icon icon-remove'>Remove</span>"
	newTextElem.appendChild(menuContainer);
	var textWrap = document.createElement("div");
	newTextElem.appendChild(textWrap);
	newTextElem.setAttribute("class","has-text text-position");
	textWrap.innerHTML ="Enter Text Here..";
	container.append( newTextElem );
	$(textWrap).summernote({
	  	toolbar: [
		    ['style', ['bold', 'italic', 'underline', 'clear']],
		    ['fontsize', ['fontsize']],
		    ['color', ['color']],
	  	]
	}); 
	$(newTextElem).resizable({containment: '#wrapper', handles:"all"});
	$(newTextElem).draggable({containment: '#wrapper'});
	$(newTextElem).bind('click',function(e){
		$(".object-selected").removeClass("object-selected");
		$(this).addClass("object-selected");
	});
	$(".icon-edit").bind('click',function(e){
		$(this).closest('.ui-draggable').addClass('show-editor');
		$(this).closest('.ui-draggable').draggable('disable');	
	});
	$(newTextElem).rotatable(); // Rotate




	$(document).click(function(event) { 
	    if(!$(event.target).closest('.ui-resizable.ui-draggable').length) {
	        //Selected Object Unselect
	        $('.object-selected').draggable("enable").removeClass('object-selected');
			
			//For Text Objeect and Editor
			$('.show-editor').draggable("enable").removeClass('show-editor');
			window.getSelection().removeAllRanges();
	    }        
	});

	// Shapes - SVG
	var newSvgElem = document.createElement("div");
	newSvgElem.setAttribute("id","svg");
	newSvgElem.setAttribute("class","svg-position");
	container[0].appendChild(newSvgElem);

	var menuSvg = document.createElement("div");
	menuSvg.setAttribute("class","inline-menu");
	menuSvg.innerHTML = "<span class='icon icon-remove'>Remove</span>"
	newSvgElem.appendChild(menuSvg);
	
	$(newSvgElem).bind('click',function(e){
		$(".object-selected").removeClass("object-selected");
		$(this).addClass("object-selected");
	});

	var garaj= '<circle cx="50%" cy="50%" r="50%"  fill="red" />';
	var draw = SVG('svg').size('100%', '100%').style({ cursor: 'pointer', fill: '#ddd' });
	
	var rect = draw.svg(garaj);
	draw.style({ fill: "blue" })
	$("#svg").css({width: '70px', height: '70px'});
	$("#svg").draggable({containment:"#wrapper"});
	$("#svg").resizable({aspectRatio: true,containment:"#wrapper", handles:"all"});
	$(newSvgElem).rotatable(); // Rotate


	//Video
	var newVideoElem = document.createElement("div");
	newVideoElem.setAttribute("id","videoWrapper");
	newVideoElem.setAttribute("class","video-container video-position"); // For Start Width Width
	container[0].appendChild(newVideoElem);

	var menuVideo = document.createElement("div");
	menuVideo.setAttribute("class","inline-menu");
	menuVideo.innerHTML = "<span class='icon icon-remove'>Remove</span>"
	newVideoElem.appendChild(menuVideo);

	var videoTag = document.createElement("video");
	videoTag.setAttribute("width","100%");
	videoTag.setAttribute("height","100%");
	videoTag.setAttribute("controls","controls");
	videoTag.setAttribute("prelod","none");
	videoTag.setAttribute("id","video");
	videoTag.innerHTML = '<source type="video/mp4" src="./video/mov_bbb.mp4" />';
	newVideoElem.appendChild( videoTag );

	$(videoTag).mediaelementplayer();
	$("#videoWrapper").draggable({containment:"#wrapper"});
	$("#videoWrapper .mejs-container").resizable({aspectRatio:true,containment:"#wrapper"});	
	$("#videoWrapper").removeClass("video-container");
	$(newVideoElem).rotatable(); // Rotate

	// Audio
	var newAudioElem = document.createElement("div");
	newAudioElem.setAttribute("id","audioWrapper");
	newAudioElem.setAttribute("class","audio-position");
	container[0].appendChild(newAudioElem);

	var rotateHandle = document.createElement("div");
	newAudioElem.appendChild(rotateHandle);	

	var menuAudio = document.createElement("div");
	menuAudio.setAttribute("class","inline-menu");
	menuAudio.innerHTML = "<span class='icon icon-remove'>Remove</span>"
	newAudioElem.appendChild(menuAudio);

	var audioTag = document.createElement("audio");
	audioTag.setAttribute("id","audio");
	audioTag.innerHTML = '<source type="audio/mp3" src="./audio/horse.mp3" />';
	newAudioElem.appendChild( audioTag );
	$(audioTag).mediaelementplayer({audioHeight: '30px', audioWidth: '330px'});
	$("#audioWrapper").draggable({containment:"#wrapper"});
	$("#audioWrapper .mejs-container").resizable({containment:"#wrapper"});
	$(newAudioElem).rotatable(); // Rotate

})(jQuery);