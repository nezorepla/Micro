﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="users.aspx.cs" Inherits="users" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Untitled Page</title>
 

    <script src="Assets/jquery-1.8.3.js" type="text/javascript"></script>
    <script src="Assets/jquery.easyAccordion.js" type="text/javascript"></script>
    <link href="Assets/Main.css" rel="stylesheet" type="text/css" />
</head>
<body>    <script language="javascript">
              $(document).ready(function() {


                  $('#accordion-1').easyAccordion({
                      autoStart: true,
                      slideInterval: 3000
                  });

                  $('#accordion-2').easyAccordion({
                      autoStart: false
                  });

                  $('#accordion-3').easyAccordion({
                      autoStart: true,
                      slideInterval: 5000,
                      slideNum: false
                  });

                  $('#accordion-4').easyAccordion({
                      autoStart: false,
                      slideInterval: 5000
                  });


              });</script>

<div class="sample">
        <h1>jQuery Easy Accordion Plugin</h1>
        
        <h2>Horizontal Accordion with Autoplay</h2>
        <p>Set the '<strong>autoStart</strong>' parameter to '<strong>true</strong>' to get a timed slideshow. You can also define the interval between each slide in milliseconds using the '<strong>slideInterval</strong>' parameter.</p>
        <div id="accordion-1">
            <dl>
                <dt>First slide</dt>
                <dd><h2>This is the first slide</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/monsters/img1.png" alt="Alt text to go here" />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, enim.<br /><a href="#" class="more">Read more</a></p></dd>
                <dt>Second slide</dt>
                <dd><h2>Here is the second slide</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/monsters/img2.png" alt="Alt text to go here" />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, enim.<br /><a href="#" class="more">Read more</a></p></dd>
                <dt>One more slide</dt>
                <dd><h2>One more slide to go here</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/monsters/img3.png" alt="Alt text to go here" />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, enim.<br /><a href="#" class="more">Read more</a></p></dd>
                <dt>Another slide</dt>
                <dd><h2>Another slide to go here</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/monsters/img4.png" alt="Alt text to go here" />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, enim.<br /><a href="#" class="more">Read more</a></p></dd>
                <dt>Wow one more</dt>
                <dd><h2>Unbilievable one more slide here</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/monsters/img5.png" alt="Alt text to go here" />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, enim.<br /><a href="#" class="more">Read more</a></p></dd>
                <dt>Last one</dt>
                <dd><h2>This is definitely the last one</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/monsters/img6.png" alt="Alt text to go here" />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, enim.<br /><a href="#" class="more">Read more</a></p></dd>
            </dl>
        </div>
 		
        <h2>Simple Horizontal Accordion</h2>
        <p>If you don't specify the '<strong>autoStart</strong>' parameter or if you set it to '<strong>false</strong>' you get a simple slideshow.</p>

        <div id="accordion-2">
            <dl>
                <dt>Slide title</dt>
                <dd><h2>First mammoth here</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/mammoths/img1.png" alt="Alt text to go here" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.</p></dd>
                <dt>Another slide</dt>
                <dd><h2>Over the moon!</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/mammoths/img2.png" alt="Alt text to go here" />Aenean commodo ligula eget dolor. Aenean massa. Nascetur aenean commodo ligula eget dolor. Aenean massa eget. </p></dd>
                <dt>Third slide</dt>
                <dd><h2>Another mammoth</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/mammoths/img3.png" alt="Alt text to go here" />Ipsum dolor sit amet.Aenean ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p></dd>
                <dt>Last slide</dt>
                <dd><h2>This is my favourite</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/mammoths/img4.png" alt="Alt text to go here" />Cum sociis natoque penatibus et donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></dd>
           </dl>
        </div>
        
        <h2>Set the initial Active Slide</h2>
        <p>You can easily set the <strong>initial active slide</strong> by adding the '<strong>active</strong>' class to the respective DT element.
        <br />Notice that you could also remove the slide number by setting the '<strong>slideNum</strong>' parameter to '<strong>false</strong>'.</p>
        <div id="accordion-3">
            <dl>
                <dt>Slide title</dt>
                <dd><h2>First slide here</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/bugs/img2.png" alt="Alt text to go here" />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.</p></dd>
                <dt>Another slide</dt>
                <dd><h2>Title to go here</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/bugs/img4.png" alt="Alt text to go here" />Aenean commodo ligula eget dolor. Aenean massa. Nascetur aenean commodo ligula eget dolor. Aenean massa eget. </p></dd>
                <dt class="active">Third slide</dt>
                <dd><h2>Here is the title</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/bugs/img1.png" alt="Alt text to go here" />Ipsum dolor sit amet.Aenean ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p></dd>
                <dt>Last slide</dt>
                <dd><h2>Last slide title</h2><p><img src="http://www.madeincima.it/download/samples/jquery/easyAccordion/images/bugs/img3.png" alt="Alt text to go here" />Cum sociis natoque penatibus et donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></dd>
           </dl>
        </div>

   		<p><a href="http://www.madeincima.eu/blog/jquery-plugin-easy-accordion/">Go back to the post!</a></p>
    </div>
    
    
    
           <form id="form1" runat="server">
    <div> <asp:Label ID="UsersOnlineLabel" runat="Server" /><br />
  
    </div>
    </form>
</body>
</html>
