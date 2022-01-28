---
title: 'Year in Review'
path: '/blog/2022-01-28-year-in-review'
date: '2022-01-28'
authorName: 'Flo Wirtz'
authorTwitter: 'flowirtz'
authorImage: 'https://raw.githubusercontent.com/openclimatefix/website/master/src/images/people/flo.jpg'
coverImageUnsplashId: 'cxoR55-bels'
coverImagePhotographerName: 'Markus Winkler'
project: ''
---

With January already coming to an end, we thought it would be good to take a moment to reflect on everything that happened at OCF in 2021 and bring everyone up to speed on all the exciting developments. And there have been plenty!

## Organisation

Last year was the biggest one for us yet, starting great by securing two big sources of funding from Google.org and National Grid Electricity System Operator (ESO), totalling ~£1M over two years. Raising this funding allowed us to shift focus to work on our projects. To help us do that, we grew our team: First Jacob joined, then Peter, and just before Christmas Kasia joined our team! Welcome, Kasia! We were completely overwhelmed by the number of applications - receiving hundreds of them - which was very flattering, but also a lot of work.
We are now a total of six employees, compared to three at the start of the year, effectively doubling our capacity. The new team members bring experience in machine learning, energy systems, fundraising and project management - a huge boost to our core skills.

## Solar Electricity Nowcasting

For 2021, outside of growing the team, we were focused on making good progress on our main project - Nowcasting, where [we try to predict solar electricity generation using Machine Learning](https://openclimatefix.org/projects/nowcasting). Here is a quick summary of what we have been up to:

- **Machine Learning Research.** Thanks to the growth of our research team, we built a strong compute infrastructure foundation and started work on implementing different Machine Learning approaches. We tested several different model architectures, including Conv3d, [Perceiver](https://arxiv.org/abs/2103.03206), [PerceiverIO](https://arxiv.org/abs/2107.14795), [MetNet](https://arxiv.org/abs/2003.12140) and [Skillful Nowcasting GAN](https://www.nature.com/articles/s41586-021-03854-z) and we are looking to improve our results in the coming months. All our code is of course [on GitHub](https://github.com/openclimatefix/nowcasting).
- **Early Results.** As part of our project with National Grid ESO, we have achieved some promising preliminary results in terms of improving forecasting accuracy.
  The best Open Climate Fix model is 2.8 times more accurate than National Grid-ESO's PV forecast (for forecasts up to two hours ahead) with a mean absolute error of 233 MW vs 650 MW. This is already a significant improvement at this early stage in the project. You can find [our full research report on “Solar PV Nowcasting Using Deep Learning” here](https://drive.google.com/file/d/1sDKZ8WEJlTNa5oyonbNl2xGyZ7GLXKtQ/view?usp=sharing).
- **ML Server.** Thanks to the generous support of the NVIDIA Foundation, we were able to build a fantastic server to locally train our models. In the near future, we will build our second machine that can take up to eight GPUs.

## Solar PV Mapping Project

To estimate how much photovoltaic energy will be produced, we first need to know where the solar PV systems are located. At the moment this is not well known in the UK for all but the largest systems. Domestic systems are particularly poorly documented. That’s what [our solar PV mapping project](https://www.openclimatefix.org/projects/pv-mapping) is focused on.
Over the last year, our two volunteers, Karan and Sol, have made fantastic progress: The app they built will allow anyone to walk around their neighbourhood and take pictures of solar panels. Together with their GPS location, the pictures will then get reviewed by volunteers before the extracted information is added to OpenStreetMap.
There is now an almost fully-functioning Android app, allowing users to submit pictures, cool badges to show off progress among users’ friends and featuring a popping design. What is still [missing is an IOS app](https://github.com/openclimatefix/bigsolarhunt/issues/6). We also need [to make some changes to the backend](https://github.com/openclimatefix/bigsolarhunt/issues/5). This is where we need you: Have you developed mobile apps with Flutter before, or always wanted to learn how to do it? Or know someone who does? If so, [please reach out to us via this issue](https://github.com/openclimatefix/bigsolarhunt/issues/7) as we are actively looking for collaborators for this project.

## What else?

The short answer to that question is plenty! We joined accelerators, like the [Google.org Impact Challenge accelerator](https://impactchallenge.withgoogle.com/climate2020) and the [Subak accelerator](https://climatesubak.org/the-accelerator), both of which exposed us to some fascinating mentors and helped us grow as an organisation. We also spoke at conferences, including Dan speaking at [Solar&Storage](https://www.terrapinn.com/exhibition/solar-storage-live/index.stm) and [Jack’s gig at COP26](https://twitter.com/OpenClimateFix/status/1468666452567904267) expanded our collaborations with universities, including UCL and Edinburgh, and wrote applications for future funding opportunities.
Last but not least, we significantly expanded our network and built some great new relationships with people who just like us are eager to work on reducing carbon emissions. All while still trying to cope with a global pandemic and trying to stay sane - couldn’t leave that one out, sorry.

## What’s coming?

Glad you have asked! Nowcasting will remain our main focus, at least for the first half of this year. Our goals are ambitious: we will continue to improve our nowcasting results and hope to have a pilot service for National Grid ESO that works in real-time by mid-2022. Once that is up and running, we will be testing it together with National Grid ESO and then in the next phase try to scale to other European countries.
Another initiative that is especially close to our heart is a public ML competition to let everyone participate in improving our models. We [just released a small sample of our dataset (~108GB)](https://console.cloud.google.com/marketplace/product/bigquery-public-data/eumetsat-seviri-rss-hrv-uk?project=pc-api-6932409227086194180-457) and then hopefully later this year the full dataset (~25TB) and more tools to the public. Make sure [to follow us on Twitter](https://twitter.com/openclimatefix) for more updates.
Judging by these last few weeks, 2022 is going to be busy for us and we couldn’t be more excited! Thank you for following and supporting us on our journey so far. There are lots of exciting news to come!

So long!
