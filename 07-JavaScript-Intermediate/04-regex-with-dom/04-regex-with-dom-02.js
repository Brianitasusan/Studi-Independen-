<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Skilvul</title>
  </head>
  <body>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
    <button id="btn-submit" style="display: block; margin-top: 10px">
      submit
    </button>
    <script>
      // get email, password, button element
      const emailEl = document.getElementById("email")
      const passwordEl = document.getElementById("password")
      const btnSubmitEl = document.getElementById("btn-submit")

      // regex for valid email and password
      const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%^&*]).{8,}$/

      // function to check email validity
      const checkEmail = (email) => {
        return validEmail.test(email)
      }
      
      // function to check password validity
      const checkPassword = (password) => {
        return validPassword.test(password)
      }

      // event listener when submit button clicked
      btnSubmitEl.addEventListener('click', (e) => {
        e.preventDefault()

        // get email and password value
        let email = emailEl.value.trim()
        let password = passwordEl.value.trim()

        // validate email and password for not empty string
        if(email.length > 0 || password.length > 0) {
          // if email valid then check password, if not show alert email not valid
          if(checkEmail(email)) {
            if(checkPassword(password)) {
              alert('Welcome to The Jungle')
            } else {
              alert('tolong masukan password sesuai ketentuan')
            }
          }
          else {
            alert('tolong masukan email yang valid')
          }
          // set password field to empty again
          passwordEl.value = ''
        }
        else {
          alert('email and password are required field')
          emailEl.value = ''
          passwordEl.value = ''
        }
      })
    </script>
  </body>
</html>