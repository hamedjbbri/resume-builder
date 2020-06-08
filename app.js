let count = 1;
        document.getElementById('plus-phone').addEventListener('click', function () {
          const input = document.createElement('input')
          input.setAttribute('type', 'text')
          count++;
          input.setAttribute('id', `phone-input-${count}`)
          input.setAttribute('class', 'form-control phone')
          input.setAttribute('placeholder', `Phone ${count}`)

          const span = document.createElement('span')
          span.innerText = '-'
          span.classList.add('minus-phone')

          document.getElementById('phone-group').appendChild(input)
          document.getElementById('phone-group').appendChild(span)
          console.log(input)

        })

        document.getElementById('phone-group').addEventListener('click', function (e) {
          if (e.target.className === 'minus-phone') {
            count = document.querySelectorAll('.phone').length - 1
            e.target.previousSibling.remove()
            e.target.remove()
          }
        })






        checkName();

      function checkName() {
        const firstNameVal = document.getElementById("first-name-input")
        const lastNameVal = document.getElementById("last-name-input")
        if (firstNameVal.value == '' || lastNameVal.value == '') {
         
          document.querySelector('button[type="submit"]').setAttribute('disabled', true)
        } else {
          document.querySelector('button[type="submit"]').removeAttribute('disabled')
          
        }
      }

      document.getElementById("first-name-input").addEventListener('keyup', function(){
        checkName()
      })

      document.getElementById("last-name-input").addEventListener('keyup', function(){
        checkName()
      })




      document.querySelector('.edit').addEventListener('click', function () {
        document.getElementById("form").style.display = 'block'
        document.querySelector('main').style.display = 'none'
        this.classList.add('d-none')
      })

      const form = document.getElementById("form")
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const firstNameVal = document.getElementById("first-name-input").value
        const lastNameVal = document.getElementById("last-name-input").value
        const streetNumberVal = document.getElementById("street-number-input").value
        const streetNameVal = document.getElementById("street-name-input").value

        const cityVal = document.getElementById("city-input").value
        const provinceVal = document.getElementById("province-input").value
        const postalCodeVal = document.getElementById("postal-code-input").value
        // const phoneVal = document.getElementById("phone-input").value
        let phoneVal = document.createElement('div');

        document.querySelectorAll('.phone').forEach((item, index) => {
          const divEl = document.createElement('div')
          divEl.innerText = `Phone ${index+1}: ${item.value}`
          phoneVal.appendChild(divEl)
        })

        const emailVal = document.getElementById("email-input").value
        const linkedInVal = document.getElementById("linked-url-input").value
        const websiteVal = document.getElementById("website-url-input").value
        const portfolioVal = document.getElementById("portfolio-url-input").value
        const highlights = document.getElementById("highlights").value

        const institutionNameVal = document.getElementById("institution-name").value
        const institutionCityVal = document.getElementById("institution-city").value
        const institutionCountryVal = document.getElementById("institution-country").value
        const institutionDegreeVal = document.getElementById("institution-degree").value
        const institutionStartDateVal = document.getElementById("start-date").value
        const institutionEndDateVal = document.getElementById("end-date").value

        const companyNameVal = document.getElementById("company-name").value
        const positionVal = document.getElementById("position").value
        const positionStartDateVal = document.getElementById("position-start-date").value
        const positionEndDateVal = document.getElementById("position-end-date").value
        const positionDescriptionVal = document.getElementById("description").value


        document.getElementById("first-name").innerText = firstNameVal.toUpperCase()
        document.getElementById("last-name").innerText = lastNameVal.toUpperCase()
        document.getElementById("street-number").innerText = streetNumberVal
        document.getElementById("street-name").innerText = streetNameVal

        document.getElementById("city").innerText = cityVal
        document.getElementById("province").innerText = provinceVal
        document.getElementById("postal-code").innerText = postalCodeVal
        document.getElementById("phone").innerHTML = '';
        document.getElementById("phone").appendChild(phoneVal)

        document.getElementById("email").innerText = emailVal
        document.getElementById("linkedIn-url").innerText = linkedInVal
        document.getElementById("website-url").innerText = websiteVal
        document.getElementById("portfolio-url").innerText = portfolioVal
        document.getElementById("highlights-text").innerText = highlights

        document.getElementById("degree").innerText = institutionDegreeVal
        document.getElementById("country").innerText = institutionCountryVal
        document.getElementById("institution").innerText = institutionNameVal
        document.getElementById("start").innerText = institutionStartDateVal
        document.getElementById("end").innerText = institutionEndDateVal

        document.getElementById("company-name").innerText = companyNameVal
        document.getElementById("position-name").innerText = positionVal
        document.getElementById("position-start-date-span").innerText = positionStartDateVal
        document.getElementById("position-end-date-span").innerText = positionEndDateVal
        document.getElementById("description-span").innerText = positionDescriptionVal

        this.style.display = 'none'
        document.querySelector('main').style.display = 'block'
        document.querySelector('.edit').classList.remove('d-none')

      })

      