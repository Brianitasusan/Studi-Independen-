<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Regex and DOM - 01</title>
  </head>
  <body>
    <form id="form">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" />
      </div>
      <button id="btn-submit" type="submit">submit</button>
    </form>

    <script>
      // EDIT DOWN HERE
      const elInputUsername = document.querySelector("#username");
      const elBtnSubmit = document.querySelector("#btn-submit");
      const elForm = document.querySelector("#form");
      const usernameValidator = new RegExp("^[a-zA-Z]\\w{5,}");        
       // regex expression to accept first character must an alphabet not numeric, and username at least 6 character long, accept only character not special char like symbol

      elForm.onsubmit = function(e) {
        e.preventDefault();
        
        // check if username value match regex
        if(usernameValidator.test(elInputUsername.value)) {
          alert(`selamat datang ${elInputUsername.value}`)
          elForm.reset()
        }
        else {
          alert("mohon masukan username yang valid")
        }
      }
    </script>
  </body>
</html>