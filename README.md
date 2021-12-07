HACKSC 2020 Project - Hype UP!

Type Down, Hype Up. A chrome extension that prevents cyber ​​bully by censoring hate comments.

Video Demo: https://www.youtube.com/watch?v=RMk7w2A3C3I

## Inspiration

2019 winter, a famous South Korean celebrity, Sullie, committed suicide under the **constant pressure from cyber violence**, alarming not only within the South Korean, but the rest of the world. 

2020, we lived in a digital world. There is no denying that social media took over a huge part of our life. As we share the snippets of our passions and emotions, **cyberbullying is not the problem only a celebrity faces.** We all encountered moments that one or two comments that brought us down. We think cyberbullying is just important as all other forms of aggression. **We want to change that and develop an extension to find peace and positivity in our digital safe space.**

## What it does

Once plugged in our chrome extension **"Hype Up"**, the user can click on the icon to view the interface. The user can click on the intuitive **"Start!"** button to start filtering out hate comments. They can click into the comment section of an Instagram post and will see that potentially hateful and harassing comments that are classified by our NLP model are blocked. When scrolling down, all the comments that are possibly offensive will be censored and replaced with the text saying "this comment might be offensive and have been blocked."

## How we built it

We collected labelled data from established research projects that publicly share their github online. The data consist of 12,000 sentences from movies and social media platforms like twitter. Each sentence is labelled either neutral speech (0) or hate speech (1). We converted the data into a csv file, and used them to train the autoML sentiment analysis model available on the Google Cloud Platform. We scraped each comment in the comment section and used the model to determine whether each comment is hateful/harrassing or not.
The back-end utilized Ajax to post request to our google cloud trained model to get predicted possibility of neutrality/inappropriateness (with score 0 - 1) of each comment. We flagged comment that has a score of inappropriateness bigger than 0.6.
We used html, css, and javascript to create the pop-up window when clicking the chrome extension icon. We used content script to web scrape comments on Instagram.

## Challenges we ran into

Nature Language Processing is a challenging topic to comprehend. We struggled with training the model, getting familiar with google api interface. 

Integrating the model to google cloud and sending requests through javascript was also huge challenge that we bumped into.

## Accomplishments that we're proud of

None of us have had experience in implementing NLP projects before, but we somehow figured out the entire process. Building chrome extension is also new to us. All of us are glad that we quickly got our hands on these unfamiliar topics and managed to build a presentable project based on these topics.

## What we learned

This is our first experience with NLP, google chrome extension and many other things!

We learned about data preprocessing, training NLP model, creating chrome extension, linking front-end back-end within javascript, and google cloud machine learning platform

## What's next for HypeUP

The extension is currently made specific for Instagram. We want to make it a universally useful tool that works across more social media platforms.
