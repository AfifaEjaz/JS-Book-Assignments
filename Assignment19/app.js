   //   a

        // 1
        var mainContent = document.getElementById("main-content")

        // 2
        document.write(mainContent.childNodes)

        // 3
        var render = document.getElementsByClassName("render")
        for (var i = 0; i < render.length; i++) 
        {
         console.log(render[i].innerHTML);
        }
     

        // 4
        document.getElementById("first-name").value = "Afifa";

        // 5
        document.getElementById("last-name").value = "Ejaz";
        document.getElementById("email").value = "abc@gmail.com";



        //   b

        // 1
        var formContent = document.getElementById("form-content").nodeType
        console.log(formContent)

        // 2
        var lastName = document.getElementById("lastName")
        console.log(lastName.nodeType)
        console.log(lastName.childNodes.nodetype)

        // 3
        document.getElementById("lastName").innerText = "Last Name: Updated name"

        // 4
        console.log(mainContent.childNodes[0])
        console.log(mainContent.lastChild)

        // 5
        console.log(lastName.nextSibling)
        console.log(lastName.previousSibling)

        // 6
        var email = document.getElementById("email")
        console.log(email.parentNode)
        console.log(email.nodeType)
