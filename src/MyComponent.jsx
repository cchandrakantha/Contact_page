import React from 'react'

 function MyComponent() {
  return (
    <div className='component-container'>
        <div className='compo-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE
                TO
                HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
                THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                SHOES.</p>
                <div className='btns'>
                    <button className='primart-btn'>Shop Now</button>
                    <button className='seconday-btn'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also Available On</p>
                    {/* <div className='brand-imgs'>
                        <img src='data:image/jpeg;base64,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'/>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAwFBMVEX///8AAAD/mQD/lQC8vLz/lwBXV1c2Njbx8fGnp6fs7Oz8/PyJiYmtra17e3vh4eFvb28NDQ0dHR3Nzc1DQ0P29vYwMDBcXFy0tLRJSUnY2NgkJCSdnZ0rKyvIyMgXFxf/+vCOjo5OTk46Ojqfn59jY2N3d3fBwcFoaGiSkpL/9OT/+/T/kAD/58z/wnn/sVH/0Zn/3LP/qkP/yIv/oRH/qTr/6tL/u2X/xYH/piv/tVr/4L7/yYr/vm7/1aT/ojAtmCGIAAAF8ElEQVR4nO2ZaWOqOhCGWRVxX3DBjaO1ti5VW6q1Pa3//19dMkMA7+1+u2nf51McmJh5mWQSUBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPNkLSv7dhfnU8ZyKLjng3q7XW9k7NBQbTabhqPYnVStkSFtjNPWIFeNXYonjXTgMugUQ4Odb8bk5Z1uZ9QalPKyX0dcdANzYdAqGV8R2udhlVRJJcOmtPhRddtkHNqK1eDrudDFyZWlS/mcTedqkhqlrlMIf7ZP+Kax+JFSOmxNvTW/fxJ2Ohkvx0cmo67K8EbyMmvkpJIurOWfPdlaQhGrFRtOSSJDNEeGNJ59T8Qfwp4EqkrziWSLg47TUbXE5cK+iytsj8g2SlpIcBIsVYuMxSdH9dOp0vgHzWqGkysvjHsJuMc4uFqk1jBTbbIAf4RLs5sm+LaCsFArlc/UInFJtnLcW+YbA/9/UObUxLLPAtKU4+CHzZ7Ms1MjoeqJaHRFWtpk47lmCbI5stSDi1lSSyxyNrmWlFA2VW2Mx4P4zw6SXKUfppiTltGxbGUxhYZR8vSi/Mi0KzJimsiJpd1lXXqKfApN+g/qzpayiYfEGTv62lg/Est2exR3trUvW0q0OtEEs8rRtHICF1rklMa+bNlunERcWmmppAKqGlI26iMV/cUBk7Wrxkl3XzaRYko+Ct5q/2s1st1xPr0vWy7KJlkQyOxKMY3oISinBy+bkxn1o1U6lo1yhmTri9Taky3bLLUjl0g2nscsi0NLW5nsReq+IWWjDCwcumwZNcljslVItkosm1FOukjZHBaft34W5W6b2ja51o5KttMw+Fqj/1rZwl2+Ohy1k7KdqWFSCTg5K9S2qT08Jtl4dzXs/bckPCkb18iKOFMmSwIvg2p4/nTq8SQ9wmyjRKBNGK9Gr5CNimCfVrBULFuRJ648oPND4JJwfGsb75/o5OPUXyebTfrwHncYyZblQ9rIkfWBd8q0T3HlnxyNbBwIbXdZQYrkWdkSpwmHmvS644SnaKVbb+XGYgfClYbeIPFC0Dsi2ZpxtvGmSxUhv0K2UnSVTuT2Xm1NZ+RToE6oVrSdI5KNt1r1ohSQD+bPysZTrhLkUS/UqhSdqiJcWVirUlzxaI5GNoujrJdSyYiflS08QVXO4hdDRpiCMT2pZLnBPddFH0cjm5J4l5YmYbrFlypp4kVulyTsV0PZurVWrStli7Z3keGIZLOiQ9LAFhq1RFCPHq76UjZnEKlWFJN86NKC18i7VjY43br5RplVykWi9XlfcjyyKfYZrVDdc0e8oh3R/mGglst8SDJEayjKRLCtC5oUvlMgCSsFSxTMAR30z91En26HX5CM+b1T+Sx8jVsVXbTpWk40S18V5GdQHBvjKn+7C784WcUA3oCJlhUbQxe7ZxhVNruJr35TbzKZ7vVdbXYyRvzuW3TBx4isaP7uD4bM/Grha6bmXy4P+YvUe3m48N7jNr+ezfQA0zRn8w8e0iEwn+nLt3utZ/7l5uLm4tY0tdndx4/q5zPxZ9py+vJ9j+P5pr7+yOEcDN5C17Wbydsdp8Jna2reR4/oQLgSi9Ttnfcmp8lyO1spnqYvPmdQB8D8Wjd13b+Yv3ayTlYLLcjRiTLX37M0HgvTv6auBcpt71cvztbp+mHhB+mpb4Jb/wrtfjHrTZA9Qjn/8ma19p64y5s/bHaa2Hfo25UwbPWLrxvjj2QuSkOgXCCdtlvcL1fzycTzpgIvOA7MV383l7vgoinU3XLxnc9+d7IRd7emEEVIZ4oqofm760vBbqdpvLnVKCOvlx573M9W3zriH8L6YqezcqF6EdIUpOLtKqocs19cD/bwVputmZAugUhBf/GQnJW/8oDwBN58udiGk1IifvjXN3dYyZ7FW98t7xfXW9/XfH+7vdxcBRXiuwd1MAQ1NODdJ1YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwK/kHm0hm4zyWkikAAAAASUVORK5CYII='/>
                    </div> */}
                </div>
        </div>
        <div className='compo-image'>
            <img src='./shoe.png'/>
        </div>
    </div>
  )
}
export default MyComponent;

