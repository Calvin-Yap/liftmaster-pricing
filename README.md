<h1 align="center" style="border-bottom:none">LiftMaster Pricing</h1>

<p align="center">
  <img  src="https://liftmaster-3d0d7.web.app/Title.png">
    
</p>
<p align="center">
<a href="https://liftmaster-3d0d7.web.app/" target="blank">Project Page </a> ·
<a href="https://github.com/Calvin-Yap/liftmaster-pricing/issues" target="blank">Issues</a>
</p>

<details open>
<summary>Table of Contents</summary>

1. [About The Project](#about-the-project)
    - [Built With](#built-with)
    - [Langauge Choices](#language-choices)
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [Contact](#contact)

</details>

# About The Project

This is a pricing calculator app designed for LiftMaster Garage Systems and Accessories

This project aims to:

- Create mobile friendly UI that workers are able to use on the go with meeting with customers
- Improve on the efficiency of the quoting process
- Replace the dated Excel apporach to adjusting and finding prices


## Built With

- HTML/CSS
- AngularJS
- PHP
- Firebase Hosting

## Language Choices

- Already familiar to using the AngularJS framework from previous projects
    - Can take advantage of simple 2-way binding
    - Easy built in HTTP service to access local PHP JSON databases
- Hosted using Firebase for its simplicity in collecting daily user counts and crash analytics.
    - Looking to add Firebase Authentication in the future for better admin controls.

# Getting Started

To get a local copy up and running follow these simple steps

1. Login to Firebase and create a new project
1. Clone the repo

    ```text
    git clone https://github.com/Calvin-Yap/liftmaster-pricing.git
    ```

1. Enter your Firebase API keys in `config.js`

# Usage

## Standard

For normal usage in finding the adjusted price of products (from USD to CAD)

1. Select the product series in the dropdown menu
1. Select a model number from the next dropdown
1. Click the radio button to the corresponding quantity
1. Adjusted price will be shown in the box bellow
    - **Grand total** will be in bold
    - Base price breakdown is listed bellow 

## Promotional Pricing

Adjusting the grand total with a promotional discount

1. After selecting product series, model, and quantity there is a text box to adjust "Promo"
    - Fill out this text box with desired promotional discount (only numbers will be accepted)
1. Grand total will be adjusted along with the price breakdown

## Percentage Discount

Adjusting the grand total with a percentage discount

1. After selecting product series, model, and quantity there is a text box to adjust "Percentage Discount"
    - Fill out this text box with desired percentage discount (only numbers will be accepted up to 100%)
1. Grand total will be adjusted along with the price breakdown

## Adjusting Exchange Rates

Adjusting the conversion rate when calculating the grand total

1. The current exhange rate is listed at the bottom of the app, by instruction it is defaulted to 1.31
1. To adjust press the "Change Rate" button and fill in the desired rate in the text box bellow

# Contact

Please contact me through email with any questions or inquires

Calvin Yap - calvin.gh.yap@gmail.com

Project Link -https://github.com/Calvin-Yap/liftmaster-pricing
