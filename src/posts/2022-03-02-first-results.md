---
title: 'Six Months into the Nowcasting Project Our Results Are Highly Promising'
path: '/blog/2022-03-02-first-results'
date: '2022-03-02'
authorName: 'Kasia Krasucka'
authorTwitter: 'kasia_krasucka'
authorImage: 'https://raw.githubusercontent.com/openclimatefix/website/master/src/images/people/kasia.png'
coverImageUnsplashId: 'Ilpf2eUPpUE'
coverImagePhotographerName: 'Andreas Gücklhorn'
project: 'nowcasting'
---

Open Climate Fix has recently completed the first phase of our flagship [solar PV Nowcasting project](https://smarter.energynetworks.org/projects/nia2_ngeso002/), which we have been working on with [National Grid ESO (NG-ESO)](https://www.nationalgrideso.com/) since July 2021. With [Nowcasting](https://www.openclimatefix.org/projects/forecasting), we are working to improve the PV output forecast National Grid-ESO is using. Why does this matter? Better forecasts have the potential to reduce emissions of greenhouse gases significantly, by up to 100,000 tonnes per year in the UK alone.

The results we have achieved so far are very promising. OCF’s best forecast is already 2.8 times more accurate than the existing PV forecast from NG-ESO, with a mean absolute error (MAE) of 230 MW vs 650 MW. This is a great stepping stone for OCF, and for anyone interested in learning more about the details of our work, we are happy to share our first progress reports.

> I am very impressed with OCF’s high-quality work and the preliminary results the team has managed to achieve so early into the project.

-Lyndon Ruff, Lead Data Scientist, NG-ESO

## How Did We Get There?

The main goal for the OCF team in this first phase was to complete the initial data sourcing and machine learning research to develop a novel forecasting model, which could be benchmarked against National Grid-ESO’s existing PV forecasts.

To this end, we collected tens of terabytes of data and created a pipeline combining sources such as numerical weather predictions (NWP), 5-minutely satellite imagery and PV data from thousands of individual PV systems. Satellite data has not yet been widely used in traditional solar PV forecasting methodologies, and thus we are particularly interested in incorporating it into our models.

It won’t be surprising to say that data preparation took a good chunk of our time. One of the early lessons you can always keep learning is to never underestimate the importance of cleaning up and checking data in advance. We tried a number of approaches to loading data, from on-the-fly to pre-preparing, and instituted automatic and visual tests of the data to ensure we are always lining up the various data sources correctly.

## Early Results

Eventually, we were able to test six different machine learning architecture models including OptiFlow, Conv3d (both developed by OCF), [Perceiver](https://arxiv.org/abs/2103.03206), [PerceiverIO](https://arxiv.org/abs/2107.14795), [MetNet](https://arxiv.org/abs/2003.12140) and [Skillful Nowcasting GAN](https://www.nature.com/articles/s41586-021-03854-z). All OCF models are trained to predict the half-hourly total PV generation for the next two hours, for a single Grid Supply Point (GSP) region at a time.

In this early stage of our research, we opted for mean absolute error (MAE) measured in megawatts (MW) as the best metric to evaluate our models, as it is probably the most widely used across academia and industry. MAE is calculated by averaging the absolute difference between the forecast and the actual amount of PV electricity generated. So for example, a MAE of 100 equates to the average absolute error being 100 MW across the country.

Having run hundreds of experiments on each of the six models, four of them outperformed the NG-ESO model by at least a factor of two, with OptiFlow achieving the best result of MAE of 232.6 MW. Such good early results make us very motivated and we are confident that the forecast could be improved even further in the future.

## What’s Next?

With these solid foundations in place, the bulk of our work in the coming months will focus on the production of the Nowcasting service with the goal to build an operational prototype by July. We are particularly interested in ensuring there is a user interface that can communicate the forecast information effectively and efficiently. We will also continue the ML research to improve the skill of our solar PV Nowcasts. We are looking into incorporating a probability distribution of the PV outputs (rather than just a point forecast) and conducting more analysis on the strengths of our models.

## Acknowledgements

We would like to thank nvidia for their very generous support: nvidia provided OCF with two A6000 GPUs via the "academic hardware grant", and a further four A6000 GPUs via the nvidia foundation. Thank you nvidia!

We would also like to thank Google Cloud for providing free credits, and thank Sustainable Workspaces for providing help with our two servers.

Last, but by no means least, we must thank our collaborators and [open-source contributors](https://github.com/orgs/openclimatefix/people). Thank you!

## Learn More and Download the Reports

1. [Research Report: Solar PV Nowcasting Using Deep Learning](https://drive.google.com/file/d/1sDKZ8WEJlTNa5oyonbNl2xGyZ7GLXKtQ/view?usp=sharing)
2. [Documentation: Open-Source Research Code and Results](https://drive.google.com/file/d/1kfYDSB0KMx4CYYsujihdJ2OTqQuz8n7H/view?usp=sharing)
3. [Report: Progress Report: WP1](https://drive.google.com/file/d/18FpMlQPn_VSRtXSQoQKhOMxFI7USwAJo/view?usp=sharing)
4. [Documentation: Operational Pilot Service API](https://drive.google.com/file/d/18qKC3-mKr99CEdLs_NviiCT5I1aCZpms/view?usp=sharing)
