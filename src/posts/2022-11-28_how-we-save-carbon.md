---
title: 'Nowcasting: How OCF will reduce carbon emissions with solar forecasts'
path: '/blog/2022-11-28_how-OCF-will_reduce-carbon'
date: '2022-11-28'
authorName: 'Dan Travers|Rachel Tipton' 
authorTwitter: 'danieltravers'
authorImage: '/images/people/dan.jpg|/images/people/rachel.png'
coverImageUnsplashId: '2022-11-16_how-we-save-carbon.jpg'
coverImagePhotographerName: ''
coverImageSourceTitle: 'Flickr'
project: 'nowcasting'
---

### Highlights
OCF’s first focus is on developing short-term solar forecasts that will decrease CO2 emissions and help electricity network operators integrate more renewables into their power grid. In this article, we talk about how our Nowcasting Service can help with the energy transition. 

Here are some highlights: 

- **Maintaining a balanced power grid while integrating more renewables**

Our service assists electricity network operators (like National Grid ESO in Great Britain) to balance their grid by more accurately predicting daily solar power production. In terms of net reduction of CO2, this could be up to 100,000 fewer tonnes/year of CO2 emissions in Great Britain and up to 50 million fewer tonnes/year globally. 

- **Supporting a growing solar energy industry**

We want to facilitate growth in the solar energy ecosystem by providing solar farms, battery projects and smart home innovators with the information they need to become more profitable. We offer a tool to electricity network operators that could allow them to be more comfortable with implementing large-scale solar power generation projects that in turn increase solar power connections.

- **Establishing open-source digital infrastructure for the energy transition**

We are excited to be developing open-source data and cutting-edge modelling that encourages collaborative learning and attracts top talent to the renewable energy industry. Our models can go beyond solar to incorporate short-term forecasts for wind, demand, and batteries.

### How we reduce CO2 emissions
 
At Open Climate Fix our first focus is on improving short-term solar power generation forecasts, or nowcasts. 
We’ve developed a machine learning (ML) model that synthesises real-time PV data, numeric weather predictions (NWPs), satellite imagery looking at cloud cover, as well as grid supply point data to estimate how much solar energy will be generated in a given location. This model is currently used by our Nowcasting Service, which we’ll talk about. 

So why predict PV generation? If there’s sun, there’s solar energy, right? 
Well, not exactly. 

The infrastructure that ferries solar energy from panel to power grid is complex and depends on having a close estimate of when and how much photovoltaic (PV) energy will be available to the grid. In contrast to fossil fuels, renewable energies are unpredictable in terms of power generation from one hour to the next. Cloud cover in particular impacts PV generation, and, unfortunately, cloud cover is difficult to predict. 
In this article, we’re going to look at the role accurate, short-term solar forecasts can play in the clean energy transition. First, we’ll discuss how National Grid is already using our nowcasts to reduce their use of CO2-emitting power generation. Then we’ll discuss how our Nowcasting Service encourages solar industry growth while at the same time attracting tech talent through building much-needed open source digital infrastructure through ML models. 

## Balancing the grid

[With solar energy projected to be the largest global form of electricity generation by 2040](https://www.iea.org/reports/renewables-2020), integrating solar into existing and new infrastructure is a growing priority. At OCF we’re developing forecasts to help enable this. OCF’s Nowcasting App uses charts and a map to show projected solar power generation on both a national and regional level in Great Britain. GB’s electricity system operator, National Grid ESO, is already using this technology in their control room to integrate solar energy in a way that reduces CO2 emissions. 
Why and how do they do this? 

Well, one of the main challenges of any energy system operator involves maintaining a balanced grid. The physics of the grid dictates that supply must always match demand. Small changes in demand are handled automatically. For example, when you turn on your kettle, a generator somewhere on the grid will automatically produce a tiny bit more power. 

Historically, when there was any intermittent renewable generation on the system, such as wind or solar, an National Grid ESO would schedule “spinning reserves”. These are typically natural gas (ie. CO2-emitting) thermal generators operating below capacity that ramp up quickly to replace unanticipated lost PV generation, and ESOs took a crude approach to estimating how much reserves would be needed. With accurate PV forecasts from the Nowcasting Service, National Grid has a tool for scheduling fewer spinning reserves, thus decreasing CO2 emissions. 

In particular, we need solar PV nowcasts which accurately quantify uncertainty. If we're confident the day will stay sunny, National Grid can schedule less spinning reserves. The Nowcasting Service generates “probabilistic” forecasts, which tell an ESO the probability of big changes occurring. 
With the goal of reaching net zero emissions by 2050, we have estimated the impact of this at around 100,000 tonnes of CO2 per year in the UK alone*. With the current expected growth of renewables, globally, this could be 50 million tonnes of CO2 per year by 2030. 

In addition to decreasing carbon emissions, having this means to confidently integrate more solar energy into the power grid would net energy savings, savings that can be passed on to households.

## Supporting a growing solar industry

One piece of the OCF legacy will hopefully be expanding the solar industry in a meaningful way. Looking to the future, grid operators need to consider if they will be able to balance the grid as solar generation increases. This is a challenging prospect for an ESO, as the worst-case scenario is blackouts. 

Some ESOs across Europe have restricted new deployments of solar PV [due to concerns about grid stability with too much variable renewable generation](https://www.pv-tech.org/europe-facing-solar-implementation-gap-as-ember-calls-for-installs-to-double),. In the UK and other countries, it can take years to secure connections for new renewable projects as grid operators scramble to ensure the grid is able to accept the variable power supply.

Faced with these challenges, how do we encourage industry growth? 

OCF’s response is by providing trusted, accurate solar electricity information and forecasts. For example, with the Nowcasting Service (and hopefully future applications that use our predictive model), we will make solar generation more attractive for commercial investors by delivering greater predictability, hence reducing investment risk and increasing profits. 

From factories installing solar panels to large solar farms to PV-enabled “smart homes”, being able to accurately predict solar generation will strengthen the business case for PV. This will encourage investment in PV technology and infrastructure and decarbonise the grid even faster. 

## Digital Infrastructure for the Energy Transition

How do we tackle this technology drag?

At OCF, perhaps our longest-term legacy provides open-source digital infrastructure that will reach a complete transition to renewables by 2035 and net zero emissions by 2050.

Many of OCF’s team members have decades of experience in the energy industry, and it’s an exciting industry in which to work. We’ve observed that the digital foundations and tools in the industry are dated compared to younger industries, a legacy of digitising early–decades ago in the late twentieth century.

This technology drag makes it hard to attract and keep talent and hence to innovate fast. This slows the increasingly urgent clean energy transition, a transition that requires a vastly more decentralised and complex grid. 

Firstly, we are fully open-source, and are making the datasets we can open also. This will encourage others to contribute, but also for people to learn and get involved. 

Secondly, we will make our forecasts freely available to researchers and innovators. By giving new entrants access to the same information available to the largest incumbents, we are taking small but vital steps towards levelling the playing field and encouraging innovation. 
Lastly, the solar PV forecast is built on the latest approaches and technologies, seldom seen in the energy industry:


|                             |     |                                                                                         |
|-----------------------------|:---:|-----------------------------------------------------------------------------------------|
| Cutting Edge ML             |  ➜  | Latest in ML research brings new insights not usually seen in the forecasting community |
| Consuming Terabytes of data |  ➜  | The latest ML models can use huge amounts of data to learn effectively                  |
| Great user experience       |  ➜  | Easy to navigate and understand user interface & well-documented API.                   |


Through being open and modern, we hope to act as a lighthouse project for the next generation of technological innovation in the sector, attracting and keeping more tech talent.

## Conclusion

We are super excited about the myriad possibilities of how improved solar PV forecasts can reshape the grid and reduce carbon emissions. What is more, the technologies OCF is developing can just as easily be turned to improving forecasts for wind generation, electricity demand, or even battery forecasting. 

We appreciate that this is a long journey, but a journey where there are wins at every step of the way as we approach climate change with new thinking. The chance of taking these first steps and trying new approaches is too important an opportunity to be missed. 

As Albert Einstein said, “We can't solve problems by using the same kind of thinking we used when we created them.” At OCF, we’re excited to approach the issue of climate change with fresh thinking. 

*Get in touch with OCF regarding our calculations. 
