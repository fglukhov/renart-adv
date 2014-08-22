$(window).resize(function() {
  pupMakeup();
});

$(window).scroll(function() {
  var scrollPos = $(window).scrollTop();
	
	if (scrollPos > 150) {
		$(".fixed-menu").addClass("fixed");
	} else {
		$(".fixed-menu").removeClass("fixed");
	}
	
});

$(document).ready(function() {
	
	$(".tab-projects-item").click(function() {
		var caseHash = $(this).attr("rel");
		navToCase(caseHash);
		return false;
	})

	// Top menu
	
	$(".fixed-menu a").click(function() {
		
		var anchor = $(this).attr("href").replace("#","");
		
		$("html,body").animate({
			scrollTop: $("a[name='"+anchor+"']").offset().top - 49
		},1000);
		
		return false;
	});

	// Works SEO screenshots carousel

	$(".seo-carousel .jcarousel").jcarousel({
    scroll:1,
    wrap:'circular'
  });

	$(".fancybox").fancybox({
    padding: 0,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

	// Works slider
	
	worksSlider()

	// Client review popup
	
	$(".review-button").click(function() {
		if (!$("#reviewPopup").length) {
			$("body").append("<div id='reviewPopup' class='popup review-popup' />");
		}
		$("#reviewPopup").html("<div class='pup-cont'><div class='close'></div>" + $(this).next(".review-content").html() + "</div>");
		openPopup("reviewPopup");
	});
	
	// Works tabs
	
	$(".works-content").each(function() {
    var tabs = $(this).find(".works-tabs").find(".tab");
    var tabContents = $(this).find(".works-tabs-content").find(".works-tab-content");
    
    if (!tabs.hasClass("act")) {
      tabs.first().addClass("act");
    }
    
    tabContents.hide();
    tabContents.filter("[rel='"+tabs.filter(".act").attr("rel")+"']").show();
    
    tabs.click(function() {
      tabs.removeClass("act");
      $(this).addClass("act");
      
      // window.location.hash = $(this).attr("rel");
      
      tabContents.hide();
      
      tabContents.filter("[rel='"+$(this).attr("rel")+"']").fadeIn(250);
			
			window.location.hash = tabContents.filter("[rel='"+$(this).attr("rel")+"']").find(".slide-act").attr("rel")
      
    });
    
  });
  

	// Forms
	
	$("input:text").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });

  $("input.phone").mask("+7 (999) 999-99-99");

  validateForms();
	
	$("form").submit(function() {
    if ($(this).valid()) {
      
			$(this).find("input:text").val("");
			$(this).find("textarea").val("");
	  
			$(this).find(".placeholder").show();
		
    }
	});
	
	$("input:text, input:password, textarea").each(function() {
    $(this).addClass("initial");
    
    if ($(this).prop("tagName") == "INPUT" || $(this).prop("tagName") == "TEXTAREA") {
      // if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
      if ($(this).hasClass("phone") || $(this).hasClass("form-date")) {
        $(this).focus(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      } else {
        $(this).focus(function() {
          $(this).parents(".form-item").find(".placeholder").addClass("placeholder-initial");
        });
        $(this).keydown(function() {
          $(this).removeClass("initial");
          $(this).parents(".form-item").find(".placeholder").hide();
        });
      }
      $(this).blur(function() {
        $(this).prev().prev(".placeholder").hide();
        $(this).parents(".form-item").find(".placeholder").removeClass("placeholder-initial");
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    } else {
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    }
      
    $(this).parents(".form-item").find(".placeholder").click(function() {
      $(this).focus();
    });
    
  });
  

	// Tabbed content
  
  $(".tabbed-content").each(function() {
    var tabs = $(this).find(".tabs").find(".tab");
    var tabContents = $(this).find(".tabs-content").find(".tab-content");
    
    if (!tabs.hasClass("act")) {
      tabs.first().addClass("act");
    }
    
    tabContents.hide();
    tabContents.filter("[rel='"+tabs.filter(".act").attr("rel")+"']").show();
    
    tabs.click(function() {
      tabs.removeClass("act");
      $(this).addClass("act");
      
      // window.location.hash = $(this).attr("rel");
      
      tabContents.hide();
      
      tabContents.filter("[rel='"+$(this).attr("rel")+"']").fadeIn(250)
      
    });
    
  
    if ($(this).find(".tabs-nav").length) {
      $(".tabbed-content").each(function() {
        var prev = $(this).find(".tabs-nav .prev");
        var next = $(this).find(".tabs-nav .next");
        
        var tabs = $(this).find(".tabs");
        
        if (tabs.find(".act").prev(".tab").length) {
          prev.show();
          prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
        } else {
          prev.hide();
        }
        
        if (tabs.find(".act").next(".tab").length) {
          next.show();
          next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
        } else {
          next.hide();
        }
        
        prev.click(function() {
          tabs.find(".act").prev(".tab").click();
          if (tabs.find(".act").prev(".tab").length) {
            next.show();
            $(this).find("span").html(tabs.find(".act").prev(".tab").find("span").html());
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          } else {
            $(this).hide();
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          }
        });
        
        next.click(function() {
          tabs.find(".act").next(".tab").click();
          if (tabs.find(".act").next(".tab").length) {
            prev.show();
            $(this).find("span").html(tabs.find(".act").next(".tab").find("span").html());
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          } else {
            $(this).hide();
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          }
        })
        
        tabs.find(".tab").click(function() {
          next.find("span").html($(this).next(".tab").find("span").html());
          prev.find("span").html($(this).prev(".tab").find("span").html());
          if ($(this).prev(".tab").length) {
            prev.show();
          } else {
            prev.hide();
          }
          if ($(this).next(".tab").length) {
            next.show();
          } else {
            next.hide();
          }
        })

      });
    }
  });
  
  
	// Запуск верхнего слайдера
	
	$(".main-slider").mainSlider();
	
	// replace checkboxes with Toggles
	$('input.switcher').simpleCheckbox();
	
	$(".ideal-item h3").click(function() {
		$(".ideal-tooltip").hide();
		
		var tooltip = $(this).parents(".ideal-item").find(".ideal-tooltip");
		
		$(".ideal-item h3").removeClass("act");
		$(this).addClass("act");
		
		tooltip.fadeIn(150).css({
			marginTop: -tooltip.height()/2 + $(this).height()/2
		})
		
	});
	
	$(".ideal-tooltip .close").click(function() {
		$(this).parents(".ideal-tooltip").hide();
	});
	
	$(document).mouseup(function (e) {
    var container1 = $(".ideal-tooltip");
    var container2 = $(".ideal-item h3");

    if (!container1.is(e.target) && !container2.is(e.target) // if the target of the click isn't the container...
        && container1.has(e.target).length === 0 && container2.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container1.fadeOut(150);
				$(".ideal-item h3").removeClass("act");
    }
  });
	
	// Навигация к кейсу
	
	var pageHash = window.location.hash;
	
	var caseId = pageHash.replace("#","");
	
	if ($(".works-slide[rel='"+caseId+"']").length) {
		navToCase(caseId);
	}
	
});

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
  
  
    var slider = $(this);
    var slides = slider.find(".slide");
    var sliderSize = slides.size();
    
    var lister = slider.find(".lister");
    
    lister.find(".item").eq(0).addClass("act");
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    var listerItems = lister.find(".item");
    
    lister.css("background-position",lister.find(".act").offset().left-2000+lister.find(".act").outerWidth()/2+"px"+" 0");
    
    //sliderMakeup();
    
    if (sliderSize > 1) {
    
      slider.find(".slides").after("<div class='next button-inact' />");
      slider.find(".slides").after("<div class='prev button-inact' />");
      slider.find(".slides").after("<div class='go-button' />");
      
      var prevBtn = slider.find(".prev");
      var nextBtn = slider.find(".next");
      var goBtn = slider.find(".go-button");
    
      listerItems.on("click",function () {
        if (!$(this).hasClass("act")) {
          if ($(this).prevAll().length > 0) {
            goBtn.fadeOut(150);
          } else {
            goBtn.fadeIn(150);
            prevBtn.addClass("button-inact")
            nextBtn.addClass("button-inact")
          }
          listerItems.removeClass("act");
          $(this).addClass("act");
          slides.fadeOut(500).removeClass("slide-act");
          slides.eq($(this).index()).fadeIn(500).addClass("slide-act");
          //sliderMakeup();
          lister.css("background-position",lister.find(".act").offset().left-2000+lister.find(".act").outerWidth()/2+"px"+" 0");
          
          sliderAnimate(slider.find(".slide-act").prevAll(".slide").length);
          
          if (!listerItems.filter(".act").next().length) {
            nextBtn.addClass("button-inact")
          } else {
            if ($(this).prevAll().length > 0) nextBtn.removeClass("button-inact")
          }
          
          if (!listerItems.filter(".act").prev().length) {
            prevBtn.addClass("button-inact")
          } else {
            prevBtn.removeClass("button-inact")
          }
          
        }
      });
      
      // listerItems.bind("mouseover",function () {
        // $(this).click();
      // });
      
      goBtn.on("click",function() {
        $(this).fadeOut(150);
        listerItems.eq(1).click();
      });
      
      slides.bind("click",function () {
        if (listerItems.filter(".act").next().length) {
          //listerItems.filter(".act").next().click();
        } else {
          //listerItems.eq(0).click();
        }
        
      });
      
      $(".go-button-alt").click(function() {
        listerItems.eq(1).click();
      })
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex < sliderSize-1) {
          curIndex++;
          lister.find(".item").eq(curIndex).click();
          //prevBtn.removeClass("button-inact")
        } else {
          //lister.find(".item").eq(0).click();
        }
        
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".slide-act").prevAll(".slide").length)
        if (curIndex > 0) {
          curIndex--;
          lister.find(".item").eq(curIndex).click();
          //nextBtn.removeClass("button-inact")
        } else {
          //lister.find(".item").eq(slides.length-1).click();
        }
      });
      
    }
    
    //sliderAnimate(0);
    
  }
})( jQuery );

/* Super Simple Fancy Checkbox Plugin @Dave Macaulay, 2013 http://davemacaulay.com/jquery-simple-checkbox-replacement-jquery-simplecheckbox-js/ */
(function( $ ) {
	$.fn.simpleCheckbox = function(options) {
		var defaults = {
			newElementClass: 'tog',
			activeElementClass: 'on'
          };
		var options = $.extend(defaults, options);
		this.each(function() {
			//Assign the current checkbox to obj
			var obj = $(this);
			//Create new element to be styled
			var newObj = $('<div/>', {
			    'id': '#' + obj.attr('id'),
			    'class': options.newElementClass,
			    'style': 'display: block;'
			}).insertAfter(this);
			//Make sure pre-checked boxes are rendered as checked
			if(obj.is(':checked')) {
				newObj.addClass(options.activeElementClass);
			}
			obj.hide(); //Hide original checkbox
			//Labels can be painful, let's fix that
			if($('[for=' + obj.attr('id') + ']').length) {

				var label = $('[for=' + obj.attr('id') + ']');
				label.click(function() {
					newObj.trigger('click'); //Force the label to fire our element
					return false;
				});
			}
			//Attach a click handler
			newObj.click(function() {
				//Assign current clicked object
				var obj = $(this);
				//Check the current state of the checkbox
				if(obj.hasClass(options.activeElementClass)) {
					obj.removeClass(options.activeElementClass);
					$("input#" + obj.attr('id')).attr('checked',false).change();
				} else {
					obj.addClass(options.activeElementClass);
					$("input#" + obj.attr('id')).attr('checked',true).change();
				}
				//Kill the click function
				return false; 
			});
		});
	};
})(jQuery);

function validateForms() {
  
  $("form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        if (element.attr("errortext")) {
          error.html(element.attr("errortext"))
        }
        error.insertAfter(element);
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
        
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find("input.email").length) {
      $(this).find("input.email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный e-mail"
        }
      });
    }
    
    if ($(this).find(".form-date").length) {
      $(this).find(".form-date").rules('add', {
        messages: {
          required:  "Выберите дату!"
        }
      });
    }
    
    if ($(this).find("input.email").length && $(this).find("input.phone").length) {
      var thisField = $(this).find("input.phone");
      var relatedField = $(this).find("input.email");
      thisField.rules('add', {
        required: function(element) {
          if (relatedField.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
      var thisField2 = $(this).find("input.email");
      var relatedField2 = $(this).find("input.phone");
      thisField2.rules('add', {
        required: function(element) {
          if (relatedField2.val() == "") {
            return true;
          } else {
            return false;
          }
        }
      });
    }
    
    $(document).mouseup(function (e) {
      var container = $("form");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".error-wrapper").remove();
      }
    });
		
		$(document).mouseup(function (e) {
      var container = $(".tooltip");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $(".tooltip").fadeOut(150);
      }
    });
    
  });  
    
}

jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function openPopup(pupId) {
  var popup = $("#"+pupId);
  $("body").append("<div class='tint' style='display:none;' />");
  popup.addClass("popup-act").fadeTo(500,1);
  
  $(".tint").fadeTo(300,1);
  pupMakeup();
  
  if (!popup.children(".popup-shadow").length) {
    popup.append("<div class='popup-shadow' />");
  } 
  
  jQuery(document).keydown(function(e){
    if (e == null) { // ie
      keycode = event.keyCode;
    } else { // mozilla
      keycode = e.which;
    }
    
    if(keycode == 27){ // escape, close box
      closePopup()
    }
    
  });
  
  $(".tint").on("click", function () {
    closePopup()
  });
  
  $(".popup .close, .popup .cancel").on("click", function () {
    closePopup()
  });
}

function pupMakeup() {
  var popup = $(".popup-act");
  var pupTop = $(window).scrollTop() + ($(window).height() - popup.outerHeight(true))/2;
  if (pupTop < $(window).scrollTop() + 20) pupTop = $(window).scrollTop() + 20;  $(".tint").css("height",$(window).height()).css("width",$("body").width());
  if (!popup.hasClass("price-popup")) {
    popup.css("top",pupTop).css("left",($(window).width()-popup.outerWidth(true))/2);
  } else {
    popup.css("margin-top",$(window).scrollTop() - popup.parent().offset().top - popup.parent().outerHeight(true) + ($(window).height()-popup.outerHeight(true))/2);
  }
  
}

function closePopup() {
  $(".tint").fadeTo(500,0,function() {
    $(this).remove();
  });
  $(".popup-act").removeClass("popup-act").fadeTo(300,0,function() {
    $(this).hide();
  });
}

function worksSlider() {
  $(".works-slider").each(function() {
		var slider = $(this);
		var slides = $(this).find(".works-slide");
		var sliderSize = slides.length;
		slides.hide();
		slides.eq(0).show().addClass("slide-act");
		
		var prevBtn = slider.find(".works-nav .prev");
		var nextBtn = slider.find(".works-nav .next");
		
		animateWorksSlide(slider);
		
		nextBtn.click(function() {
			curIndex = parseInt(slider.find(".slide-act").prevAll(".works-slide").length)
			if (curIndex < sliderSize-1) {
				curIndex++;
			} else {
				curIndex = 0;
			}
			
			slider.find(".slide-act").hide().removeClass("slide-act");
			slides.eq(curIndex).fadeIn(150).addClass("slide-act");
			
			window.location.hash = slides.eq(curIndex).attr("rel");
			
			animateWorksSlide(slider);
			
		});
		
		prevBtn.click(function() {
			curIndex = parseInt(slider.find(".slide-act").prevAll(".works-slide").length)
			if (curIndex > 0) {
				curIndex--;
			} else {
				curIndex = sliderSize - 1;
			}
			
			slider.find(".slide-act").hide().removeClass("slide-act");
			slides.eq(curIndex).fadeIn(150).addClass("slide-act");
			
			window.location.hash = slides.eq(curIndex).attr("rel");
			
			animateWorksSlide(slider);
			
		});
		
	})

}

function animateWorksSlide(slider) {
  var elsLeft = slider.find(".slide-act .works-l").find(".anim-block");
	var clientBlock = slider.find(".slide-act .works-r").find(".works-client");
	
	for (i=0;i<elsLeft.length;i++) {
		elsLeft.eq(i).css({opacity:0,left:-100}).show().delay(i*250).transition({
			opacity:1,
			left:0
		},250);
		
	}
	
	clientBlock.css({opacity:0}).transition({
		perspective: '500px',
		rotateY: '-90deg'
	},0);

	clientBlock.transition({
		perspective: '500px',
		rotateY: '0deg',
		opacity: 1
	},1000);
	
}

function navToCase(caseHash) {
	window.location.hash = caseHash;
	var caseSlide = $(".works-slide[rel='"+caseHash+"']");
	var caseTab = $(".works-tabs .tab[rel='"+caseSlide.parents(".works-tab-content").attr("rel")+"']");
	caseSlide.siblings(".works-slide").hide().removeClass("slide-act");
	caseSlide.fadeIn(250).addClass("slide-act");
	caseTab.click();
  $("html,body").animate({
		scrollTop: $("a[name='cases']").offset().top - 49
	},1000);
}