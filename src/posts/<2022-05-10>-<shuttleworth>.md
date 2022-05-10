---
title: 'Implementing Multiple Machine Learning Models Publicly'
path: '/blog/2022-05-10-shuttleworth'
date: '2022-05-10'
authorName: 'Jacob Bieker'
authorTwitter: 'JacobBieker'
authorImage: 'https://raw.githubusercontent.com/openclimatefix/website/master/src/images/people/jacob.jpg'
coverImageUnsplashId: 'blue-bright-lights-373543'
coverImagePhotographerName: ''
project: 'nowcasting'
---

Over the last couple of months, we have focused on our Machine Learning (ML) research around solar electricity short-term forecasting. The work is progressing nicely: in early March [we realeased our initial results](https://www.openclimatefix.org/blog/2022-03-02-first-results), showing that OCF’s best forecast already is 2.8 times more accurate than the existing solar forecast from National Grid ESO.

Since we want as many people as possible to benefit from our work we release everything under open-source licences. While our work is currently focused on solar electricity forecasting, ML model architectures we have implemented so far can be used for precipitation and weather forecasting as well. In this blog post, we provide an overview of the models that we have released so far. 


## Why are we publishing these models?

Many fantastic researchers already publish their ML research papers openly, for example on the platform ArXiv. This is great, but often the papers miss the critical information that would allow reproducing the proposed approaches fully. For example, they don’t include public code, training datasets or weights. Because of that, ML practitioners are stuck: they can’t just simply use the models described in these research papers.

If the authors don’t want to publish their models or aren’t allowed to, the only solution is to try reimplementing them ourselves. A lot of people are doing that already, and so are we! We have implemented three famous models based on the recent ML papers. To make them as easy to use as possible, we have uploaded all of them to HuggingFace. We also submitted relevant datasets where they were available. This should make it much easier for anyone to start using these models.

## Which models did we publish?
### MetNet-2

The original MetNet provided state-of-the-art multi-hour probabilistic precipitation forecasts for large spatial areas, and MetNet-2 built on top of that foundation to extend the forecasts out to 12 hours ahead. These models are very large, trained on multiple years of Multi-Radar/Multi-Sensor radar precipitation data, and GOES-16/17 5-minutely satellite imagery over the continental United States. We reimplemented these models in PyTorch, and are in the process of releasing a similar dataset to the one that is used in the papers. 

- [ArXiv: “MetNet: A Neural Weather Model for Precipitation Forecasting” (Sønderby et al., 2020)](https://arxiv.org/abs/2003.12140)
- [Arxiv: “Skillful Twelve Hour Precipitation Forecastsusing Large Context Neural Networks” (2021](https://arxiv.org/abs/2003.12140)
- [https://github.com/openclimatefix/metnet](https://github.com/openclimatefix/metnet)
- [HuggingFace: openclimatefix/metnet-2](https://huggingface.co/openclimatefix/metnet-2)
- [https://huggingface.co/datasets/openclimatefix/mrms](https://huggingface.co/datasets/openclimatefix/mrms)

### Graph Weather Model

One important input to our solar electricity forecasting models are numerical weather predictions. These predictions are generated on large supercomputers and take a long time to run, only becoming available hours after they are initialised. To reduce the turnaround time for these predictions, this paper proposed a graph neural network that takes the current state of the NWP model and returns the next state of the model. With this approach, the author was able to generate future NWP states for the next 5 days in 0.8 seconds on a single GPU, dramatically faster than the physics-based models. We open-sourced our implementation of the model, and are currently in the process of releasing datasets that are expanded versions of those mentioned in the paper. 
One of the benefits of these graph neural networks is that they don’t require the inputs to be on a uniform grid. Instead, the graph will be denser in some places and less dense in others. We are hoping to be able to train our model to provide higher-resolution forecasts over regions of interest, such as the UK, while keeping the rest of the globe at a lower resolution, which both speeds up inference and reduces costs. 

- [ArXiv: “Forecasting Global Weather with Graph Neural Networks” (Keisler, 2022)](https://arxiv.org/abs/2202.07575)
- [https://github.com/openclimatefix/graph_weather](https://github.com/openclimatefix/graph_weather)
- [HuggingFace: openclimatefix/graph-weather-forecaster-0.25deg](https://huggingface.co/openclimatefix/graph-weather-forecaster-0.25deg)
- [HuggingFace: openclimatefix/graph-weather-forecaster-0.5deg](https://huggingface.co/openclimatefix/graph-weather-forecaster-0.5deg)
- [HuggingFace: openclimatefix/graph-weather-forecaster-1.0deg](https://huggingface.co/openclimatefix/graph-weather-forecaster-1.0deg)
- [https://huggingface.co/datasets/openclimatefix/era5](https://huggingface.co/datasets/openclimatefix/era5)
- [https://huggingface.co/datasets/openclimatefix/gfs-reforecast](https://huggingface.co/datasets/openclimatefix/gfs-reforecast)

### Deep Generative Models of Radar (DGMR)
This paper introduced a generative model for predicting precipitation for the next hour and a half. This model also outputs probabilistic predictions, something that is quite helpful for solar power forecasting as well. The authors helpfully included pseudocode and their UK dataset in their public release. We just worked to convert the Tensorflow code into PyTorch and rehosted the dataset on HuggingFace Datasets to remove the need for users to pay data transfer costs with the original dataset. We have also released multiple years of similar radar precipitation data over the US to somewhat match the US dataset they also experimented with.

- [ArXiv: “Skillful Precipitation Nowcasting using Deep Generative Models of Radar” (Ravuri et al., 2021)](https://arxiv.org/abs/2104.00954)
- [https://github.com/openclimatefix/skillful_nowcasting](https://github.com/openclimatefix/skillful_nowcasting)
- [HuggingFace: openclimatefix/dgmr](https://huggingface.co/openclimatefix/dgmr)
- [https://huggingface.co/datasets/openclimatefix/mrms](https://huggingface.co/datasets/openclimatefix/mrms)
- [https://huggingface.co/datasets/openclimatefix/nimrod-uk-1km](https://huggingface.co/datasets/openclimatefix/nimrod-uk-1km)


## Our Partner: The Shuttleworth Foundation
Back in November 2021, one of our community members, Aaron, nominated us for a Flash Grant with the Shuttleworth Foundation. Twice a year the foundation awards a number of small grants to a collection of social change agents in support of their work.

Openly publishing so many different ML model architectures over the last six months, as explained in this blog post, would not have been possible without the fantastic support from the Shuttleworth Foundation. Thank you so much, Aaron and Jason, your support has been incredibly helpful!

We are planning to release more datasets in the future and engage with our community and produce more models that are useful for a wider audience. We will also publish pretrained models soon. Stay tuned!

<img src="https://github.com/openclimatefix/website/blob/main/src/images/logos/shuttleworth.jpg" width="500" height="200" class="centerImage">
