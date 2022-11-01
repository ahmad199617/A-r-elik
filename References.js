document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}
    
    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";}  
    
    
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    

                    
    




   
    {
        document.documentElement.setAttribute("lang", 'tr');
        $('[lang="tr"]').show();
        $('[lang="en"]').hide();
        $('[lang="ar"]').hide();
       
    }    
       
        var lang=localStorage.getItem('lang');
        localStorage.getItem('lang');   
        if(lang==("en")){
        document.documentElement.setAttribute("lang", 'en');
        $('[lang="en"]').show();
        $('[lang="tr"]').hide();
        $('[lang="ar"]').hide();
        
    }
        
        
        if(lang==("tr")){
        document.documentElement.setAttribute("lang", 'tr');
        $('[lang="tr"]').show();
        $('[lang="en"]').hide();
        $('[lang="ar"]').hide();
       
    }
        
        if(lang==("ar")){
        document.documentElement.setAttribute("lang", 'ar');
        $('[lang="ar"]').show();
        $('[lang="en"]').hide();
        $('[lang="tr"]').hide();
        
    }});


        


        
        $(document).ready(function () {
            $('#switch-lang-en').click(function() {
                document.documentElement.setAttribute("lang", 'en');
                $('[lang="tr"]').hide();
                $('[lang="en"]').show();
                $('[lang="ar"]').hide();
               
                localStorage.setItem('lang', 'en');
            });
        });
        

        $(document).ready(function () {
            $('#switch-lang-tr').click(function() {
                document.documentElement.setAttribute("lang", 'tr');
                $('[lang="tr"]').show();
                $('[lang="en"]').hide();
                $('[lang="ar"]').hide();
                localStorage.setItem('lang', 'tr');
            });
        });


        $(document).ready(function () {
            $('#switch-lang-ar').click(function() {
                document.documentElement.setAttribute("lang", 'ar');
                $('[lang="ar"]').show();
                $('[lang="en"]').hide();
                $('[lang="tr"]').hide();
                localStorage.setItem('lang', 'ar');
            });
        });

        
        
        function setlangEN(){                   
            document.documentElement.setAttribute("lang", 'en');   
            $('[lang="tr"]').hide();
            $('[lang="en"]').show();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'en');

        }
        function setlangTR(){
            document.documentElement.setAttribute("lang", 'tr');
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');

        }

        function setlangAR(){
            document.documentElement.setAttribute("lang", 'ar');
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');

        }