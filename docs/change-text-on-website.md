# Change Text on Website

You found a typo on the website or would just like to change some text? That's great!
All pages on the website (except for the blog, see `write-a-blog-post.md` instead) are
located in [`website/src/pages`](https://github.com/openclimatefix/website/tree/master/src/pages).

These files can be edited directly and any changes can be committed to GitHub via a Pull Request.

## Example: Fix a Typo on the Forecasting Project Page

### 1. Find Forecasting Project Page

All files in the `pages` directory represent the URL path of the website.
We know that the forecasting page is located on `openclimatefix.org/projects/forecasting`, so we look for it in the `projects` folder.
And indeed, in there we find a file called `forecasting.jsx`.
Open that file.

## 2. Edit the File

Our website page files are written in React. Usually they are fairly static though, so the relevant pages are mostly HTML only.
Edit the respective HTML by clicking on the little pen icon at the top right corner of the file.

## 3. Commit Changes

Once you are done, scroll down to the end of the page to where it says `Commit new file`. In the radio buttons select the second option, which reads `Create a new branch for this commit and start a pull request`. Give your branch a meaningful name, e.g. `fix/fix-typo-forecasting` instead of the default `<username>-patch-1`.

Now click `Propose new file`.

## 6. Finish creating the Pull Request

You should now be on a new page that says `Open a pull request`.
Give your Pull Request a meaningful title (e.g. `Fix a typo on the forecasting project page`) and description.

Then click `Create pull request`.

Now you are done! Congrats!!!

> **Note**: At the bottom of the Pull Request page there are a bunch of checks that should start automatically.
> One of them is a page preview, powered by Netlify. If you wait for that to finish (until it turns green) you can click
> on the link it provides and directly preview your changes in the browser!
