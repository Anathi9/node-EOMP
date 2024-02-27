<template>
    <footer class="footer">
    <div class="container ">
        <div class="footer-columns">
            <div class="footer-column">
                <h4>Welcome to Kasi Eat</h4>
                <p>Kasi  Eats founded in 2022-27-08 Township taste market ,has been a hub for local flavors,connecting people through a shared love for traditional food</p>
            </div>
            <div class="footer-column">
                <h4>Contact Information</h4>
                <p>123 Main Street, Cityville, KAS</p>
                <p>Operating Hours: Mon-Sat 9AM-8PM</p>
            </div>
            <div class="footer-column">
                <h4>FAQ & About Us</h4>
                <p>Frequently Asked Questions</p>
                <p>About Us: Learn more about our company and mission.</p>
            </div>
        </div>
    </div>
</footer>
</template>
<style>
.footer {
            background-color: #333;
            color: #fff;
            padding: 30px 0;
            text-align: center;
            position:relative
          
        }

        .footer-columns {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .footer-column {
            flex: 0 0 calc(33.33% - 20px);
            margin: 10px;
        }

        .footer-column h4 {
            font-size: 17px;
            margin-bottom: 15px;
        }

        .footer-column p {
            font-size: 13px;
        }
        @media only screen and (max-width: 767px) {
            .footer-column h4 {
                font-size: 14px; /* Adjust the font size as needed */
            }

            .footer-column p {
                font-size: 8px; /* Adjust the font size as needed */
            }
        }

       
</style>