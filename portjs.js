
                var tablinks=document.getElementsByClassName("tab-links");
                var tabcontents=document.getElementsByClassName("tab_contents");
                function opentab(tabname){
                    for(var tablink of tablinks){
                        tablink.classList.remove("active-link");
                    }
                    for(var tabcontent of tabcontents){
                        tabcontent.classList.remove("active-tab");
                    }
                    event.currentTarget.classList.add("active-link"); 
                    document.getElementById(tabname).classList.add("active-tab");
                }
                
            
                const scriptURL = 'https://script.google.com/macros/s/AKfycbyG9n4-3jdNATuUN1dBt1vTHgIAFLfAcBfoDRlmrDkW8704VD58KJ1dzncTfYFYIJDF/exec'
                const form = document.forms['submit-to-google-sheet']
                const msg=document.getElementById("msg")
              
                form.addEventListener('submit', e => {
                  e.preventDefault()
                  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then(response => {
                        msg.innerHTML="Message sent successfully!"
                        setTimeout(function(){
                            msg.innerHTML=""
                        },5000)
                        form.reset()
                    })
                    .catch(error => console.error('Error!', error.message))
                })
              