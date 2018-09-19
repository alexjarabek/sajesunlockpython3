<script>  
function getimg()
{
       //GET IMAGE 
    var m = document.getElementById('modelslist').value;
	var b = document.getElementById('brandslist').value;
	b = b.replace('&', '%26');
	m = m.replace('&', '%26');

	
	 
	var xmlhttp3;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp3=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp3=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp3.onreadystatechange=function()
    {
		if (xmlhttp3.readyState==4 && xmlhttp3.status==200)
		{
			var response = xmlhttp3.responseText;
			window.SetImage('phoneimg',response);
		}
	}
	xmlhttp3.open("GET","index2.php?cmd=getimg&model="+m+"&brand="+b,true);
	xmlhttp3.send();
}

function lb(lnkstr)
{
   var x = $(window).width();  
   var h = 0;
   var w = 0;
   
         if (x >= 423)
         {
             w = 423;
             h = 555;
         }
         if (x <= 423)
         {
             w = 320;
             h = 555;
         }
         
   javascript:displaylightbox(lnkstr,{
   'margin':0,
   'overlayOpacity':0.9,
   'centerOnScroll':true,
   'autoDimensions':true,
   'type':'iframe',
   'transitionIn':'elastic',
   'transitionOut':'elastic',
   'speedIn':600,
   'speedOut':200,
   'overlayShow':true,
   'overlayColor':'#000000',
   'scrolling':'yes',
   'fitToView':true,
   'height':h,
   'width':w,
   'autoScale':true});
}
	
	
function chargemodels() // ch mod
{
    window.SetImage('phoneimg','images/loading.gif');
    document.getElementById("modelslist").options.length=1;
    var b = document.getElementById('brandslist').value;
    b = b.replace('&', '%26');
	 
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
    {
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var models = xmlhttp.responseText;
			var g = document.getElementById('modelslist');
	        var a = models.split(":");
	        var y = a.length;
	        for (var i = 0; i < y; i++) 
	        {
	          	var option = document.createElement("option");
		        option.text = a[i];
		        option.value = a[i];
		         try 
		         { 					
		         	g.add(option, null); //Standard  
		         }
		         catch(error) 
		         { 
			        g.add(option); // IE only 
		         }
	        }
	        window.SetImage('phoneimg','images/defomg.png'); 
		}
	}
	xmlhttp.open("GET","index2.php?cmd=getmodels&brand=" + b,true);
	xmlhttp.send();
}

	

function chargednycont()
{	

// GET CARRIERS

    window.SetImage('phoneimg','images/loading.gif');
    var m = document.getElementById("modelslist").value;
    var b = document.getElementById("brandslist").value;
    m = m.replace('&', '%26');
    b = b.replace('&', '%26');
    document.getElementById("carrier").innerHTML = "";
    var z = document.createElement("option");
    z.text = "Original network of phone..";
    z.selected = 1;
    document.getElementById("carrier").add(z);
    
    
	var xmlhttp2;
	if (window.XMLHttpRequest)
	{
		xmlhttp2=new XMLHttpRequest();
	}
	else
	{
		xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp2.onreadystatechange=function()
	{
		if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
		{		
			var carriers = xmlhttp2.responseText;
			var a = carriers.split(",");
			var y = a.length;
			for (var i = 0; i < y; i++) 
			{
			      if (a[i].indexOf(")") > -1)
			      {      
			            var country = a[i].replace("(","");
			            country = country.replace(")","");
			            var opt = document.createElement("optgroup");
			            opt.setAttribute("label", country);
			            var g = document.getElementById("carrier");
                  }
                  else
                  {
                        var carr = a[i];
			            var opt1 = document.createElement("option");
			            var g = document.getElementById("carrier");
			            //opt1.text = carr;
		                opt1.value = carr + " | " + country;
		                opt1.text = country + " - " + carr;
		                try 
		                { 					
		         	        g.add(opt1, null); //Standard  
		                }
		                    catch(error) 
		                { 
			                g.add(opt1); // IE only 
		                }
                  }
			 }

			getimg();
		}			
	}
	xmlhttp2.open("GET","index2.php?cmd=getcarriers&model="+m+"&brand="+b,true);
	xmlhttp2.send();	

}



function Gettatandprice()
{
    //GET PRICE
    var m = document.getElementById("modelslist").value;
    var b = document.getElementById("brandslist").value;
    var c = document.getElementById("carrier").value;
    b = b.replace('&', '%26');
	m = m.replace('&', '%26');
	c = c.replace('&', '%26');
    
	window.SetImage('phoneimg','images/loading.gif'); 
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
    {
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		    var response = xmlhttp.responseText;
		    response = response - 0.00;
		    if ((b == "SAMSUNG") && (c == "T-Mobile | United States"))
			{
			   response = 67.95;
			}
			if ((b == "SAMSUNG") && (c == "MetroPCS | United States"))
			{
			   response = 39.95;
			}
			if ((b == "SAMSUNG") && (c == "Xfinity | United States"))
			{
			   response = 36.95;
			}


			/*if (response == 77.95)
			{
			    window.alert("PLEASE DO NO ORDER IF YOUR DEVICE IS LOCKED BY T-MOBILE DEVICE UNLOCK APP.\nTHIS SERVICE IS DOWN GLOBALLY. PLEASE RETRY A WEEK LATER.");
                document.getElementById("carrier").selectedIndex = 0;
                return false;
            }*/
			   
			response = response.toFixed(2);
			document.getElementById("wb_price").innerHTML = "<span class='pandd'>US $"+response;
			document.getElementById("price").value = response;
		}
	}

	xmlhttp.open("GET","index2.php?cmd=getpirce&model="+m+"&brand="+b+"&carrier="+c,true);
	xmlhttp.send();	
	
	//GET TURNTIME
	
	var xmlhttp1;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp1=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp1.onreadystatechange=function()
    {
		if (xmlhttp1.readyState==4 && xmlhttp1.status==200)
		{
		
			var response1 = xmlhttp1.responseText;
			if ((b == "SAMSUNG") && (c == "T-Mobile | United States"))
			{
			   response1 = "1 to 3 days";
			}
		    if ((b == "SAMSUNG") && (c == "MetroPCS | United States"))
			{
			   response1 = "1 to 24 hours";
			}
			if ((b == "SAMSUNG") && (c.search("United Kingdom") != -1))
			{
			   response1 = "12 to 24 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Ireland") != -1))
			{
			   response1 = "12 to 24 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Canada") != -1))
			{
			   response1 = "12 to 24 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Albania") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Austria") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Bosnia") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Bulgaria") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Croatia") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Greece") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Hungary") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Kosovo") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Macedonia") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Montenegro") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Poland") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Romania") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Serbia") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Slovakia") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Slovenia") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c.search("Switzerland") != -1))
			{
			   response1 = "1 to 2 hours";
			}
			if ((b == "SAMSUNG") && (c == "Xfinity | United States"))
			{
			   response1 = "1 to 3 days";
			}
			
			document.getElementById("wb_dtime").innerHTML = "<span class='pandd'>"+"  "+response1+"</span>";
			document.getElementById("time").value = response1;
			window.getimg();
		}
	}
	xmlhttp1.open("GET","index2.php?cmd=gettat&model="+m+"&brand="+b+"&carrier="+c,true);
	xmlhttp1.send();	
	
}
   
	
	function linkStr()
	{
	var b = document.getElementById("brandslist").value;
	b = b.replace('&', '%26');
	var m = document.getElementById("modelslist").value;
	m = m.replace('&', '%26');
	var c = document.getElementById("carrier").value;
	c = c.replace('&', '%26');
       var link;
       link = 
       "order-confirmation.php?carrier="+c
       +"&"+"brand="+b
       +"&"+"model="+m
       +"&"+"imei="+document.getElementById("imei").value
       +"&"+"price"+"="+document.getElementById("price").value
       +"&"+"time"+"="+document.getElementById("time").value;
	   return link;
	}
	
    function validateIMEI()
    {
      window.SetStyle('imei', 'editbox');
      var imeiTxt = document.getElementById("imei").value;
      if (imeiTxt.indexOf("99") == 0)
      {  
         window.alert("IMEIs starting with 99, unfortunately not supported for unlocking. Your phone seems to be from Verizon, Sprint or another CDMA carrier.");
         document.getElementById("imei").value = "";
         return false;
      }
      
      /*if (imeiTxt.indexOf("01449700") == 0)
      {  
         window.alert("Sorry, your phone seems to be Alcatel One Touch Cricket Idol3, it's not supported.");
         document.getElementById("imei").value = "";
         return false;
      }*/
      
      if (imeiTxt.indexOf("01439900") == 0)
      {  
         window.alert("Sorry, your device seems to be an Alcatel One Touch Tablet (9006W) from T-Mobile, it's not supported.");
         document.getElementById("imei").value = "";
         return false;
      }
      
      if (imeiTxt.indexOf("01462000") == 0)
      {  
         window.alert("Sorry, your device seems to be an Alcatel One Touch Tablet (9015) from T-Mobile, it's not supported.");
         document.getElementById("imei").value = "";
         return false;
      }
      
      if (imeiTxt.indexOf("01472400") == 0)
      {  
         window.alert("Sorry, your device seems to be an Alcatel One Touch PIXI 4 from T-Mobile, it's not supported.");
         document.getElementById("imei").value = "";
         return false;
      }
      if (imeiTxt.indexOf("35161508") == 0)
      {  
         window.alert("Sorry, it seems that there's no method to enter the unlock code for this device. Please do not order.");
         document.getElementById("imei").value = "";
         return false;
      }
      if (imeiTxt.indexOf("35990607") == 0)
      {  
         window.alert("Sorry, it seems that there's no method to enter the unlock code for this device. Please do not order.");
         document.getElementById("imei").value = "";
         return false;
      }
      if (imeiTxt.indexOf("35184009") == 0)
      {  
         window.alert("Sorry, your device seems to be a Motorola E5 Cruise from Cricket, it's not supported.");
         document.getElementById("imei").value = "";
         return false;
      }
      if (imeiTxt.indexOf("35189109") == 0)
      {  
         window.alert("Sorry, your device seems to be a Motorola G6 Forge from Cricket, it's not supported.");
         document.getElementById("imei").value = "";
         return false;
      }
      
      
       // IMEI CHECKSUM
       if (imeiTxt.length == 15)
       {
          var nCheck = 0, nDigit = 0, bEven = false;
          imeiTxt = imeiTxt.replace(/\D/g, "");
          for (var n = imeiTxt.length - 1; n >= 0; n--) 
          {
             var cDigit = imeiTxt.charAt(n),
             nDigit = parseInt(cDigit, 10);
             if (bEven) 
             {
               if ((nDigit *= 2) > 9) nDigit -= 9;
             }
             nCheck += nDigit;
             bEven = !bEven;
          }

           if (!(nCheck % 10) == 0)
           {
             window.alert("- The IMEI number you entered is incorrect.\n\n- The IMEI is 15 digits. IMEI example : 356406061236541.\n\n- If your phone IMEI is 17 digits, ignore last two digits.\n\n- To get IMEI, type *#06# on your phone or check the sticker underneath battery.");
             document.getElementById("imei").value = "";
             window.SetStyle('imei', 'editbox');
           }
           window.SetStyle('imei', 'editbox_gr');
      }
 }
	

	
</script>
