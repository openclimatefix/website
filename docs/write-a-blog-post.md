# Write a Blog Post

All blog posts are written in markdown and then converted into HTML by Gatsby automatically.
This step by step manual guides you through creating a new blog post.
If you have any questions at any point, please ping [@flowirtz](https://github.com/flowirtz).

## 1. Find Existing Blog Post and Copy

The easiest way to get started with writing a blog post is to copy an existing post and then just change it. You can find all blog posts in [`website/src/posts`](https://github.com/openclimatefix/website/tree/master/src/posts). Select the latest post in the list (usually the last one on the page) and click it. Then click on the button that says `Raw` on the top right hand side of the file.

Select all the text on the new page (the URL should say something like `raw.githubusercontent.com/...`) and copy it.

## 2. Create New File

Navigate back to github.com/openclimatefix/website. On there click the `+` button, to the left of the green clone button, and select `Create new file`.

A new page opens. In the top field where it says `Name your file...`, enter the following name:

```text
src/posts/<date>-<name>.md
```

WHERE:

- `<date>` is the current date, in `YYYY-MM-DD`, and
- `<name>` is a short name for your blog post

Once that is done paste in all the text you copied from the old blog post, as per [step #1](#1-find-existing-blog-post-and-copy) above.

## 3. Update Metadata

Each blog posts has some metadata at the top. This is used to populate fields like the author information and the cover photo at the top.
It will likely look something like this:

```text
---
title: 'Linked Data for the Energy System'
path: '/blog/2020-08-18-linked-data-energy-sys'
date: '2020-08-18'

...

---
```

Update these fields accordingly. Here is an explanation of what each of these fields mean:

| Name                       | Description                                                                                                                                                                                                           |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title                      | Title of the blog post                                                                                                                                                                                                |
| path                       | Path of the blog post. Must be the same as the filename, **without** the `.md` ending.                                                                                                                                |
| date                       | Same as in the filename                                                                                                                                                                                               |
| authorName                 | Name of the Author                                                                                                                                                                                                    |
| authorTwitter              | Twitter Handle of Author (without the `@`)                                                                                                                                                                            |
| authorImage                | Filepath to picture of author. Should be in [here](https://github.com/openclimatefix/website/tree/master/src/images/people), or add if not there yet.                                                                 |
| coverImageUnsplashId       | Id of cover photo, taken from unsplash.com. The id is in the URL once you click on an image you like <br/> **OR** the title of the image file if uploaded to `src/images/blog` e.g. 2022-11-16_how-we-save-carbon.jpg |
| coverImagePhotographerName | Name of the photographer of cover image. Displayed in top left corner on unsplash.com once you click in an image you like                                                                                             |
| coverImageSourceTitle      | Text for source link if uploaded and not sourced from Unsplash                                                                                                                                                        |
| project                    | Handle of project this blog post is under. One of `["open-energy", "mapping", "nowcasting"]` or empty                                                                                                                 |

## 4. Write Text

Now the hard part is done. You can now start writing your blog post in markown.

> **Note**: If you prefer writing your blog post in Google Docs, there is a [handy tool to convert google docs to markdown automatically](https://github.com/mangini/gdocs2md/blob/master/converttomarkdown.gapps). Instead of converting your post by hand, you can just use the script instead.

## 5. Commit & Open Pull Request

Once you are done writing your blog post, scroll down to the end of the page to where it says `Commit new file`. In the radio buttons select the second option, which reads `Create a new branch for this commit and start a pull request`. Give your branch a meaningful name, e.g. `blog/<name-of-post>` instead of the default `<username>-patch-1`.

Now click `Propose new file`.

## 6. Finish creating the Pull Request

You should now be on a new page that says `Open a pull request`.
Give your Pull Request a meaningful title (e.g. `Add new blog post about XYZ`) and description.

Then click `Create pull request`.

Now you are done! Congrats!!!

> **Note**: At the bottom of the Pull Request page there are a bunch of checks that should start automatically.
> One of them is a page preview, powered by Netlify. If you wait for that to finish (until it turns green) you can click
> on the link it provides and directly preview your changes in the browser!
